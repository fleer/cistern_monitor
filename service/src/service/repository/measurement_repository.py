"""Measurement Repository.

Abstracts the data access layer
by offering a clean interface for interacting
with the underlying data storage.
"""

import logging
import datetime
from typing import List, Optional, Type

from sqlalchemy.orm import Session
from sqlalchemy import Date

from service.database.models import Measurement
from service.schemas.measurement_schema import MeasurementInput, MeasurementOutput
from service.utils import get_config

logger = logging.getLogger(__name__)


class MeasurementRepository:
    """A repository for handling operations related to the Measurement model."""

    def __init__(self, session: Session) -> None:
        """Initializes the repository with a database session.

        Args:
            session (Session): The database session to use for queries.
        """
        self.session = session

    def _compute_liters(self, duration: int) -> int:
        config = get_config()

        # Compute the distance the measred signal was travelling
        distance = (duration / 2) * 0.0343

        # Check if distance is not greater than cistern height and not 0
        if distance > config.cistern.height or distance < 0:
            distance = 0.0

        # Compute the mulitplication factor based on the distance of the sensor
        # from the maximal fill-level of the cistern
        multiplication_factor = float(config.cistern.max_liter) / (
            config.cistern.height - config.cistern.sensor_distance
        )

        liter = (config.cistern.height - distance) * multiplication_factor

        if liter < 0.0:
            return 0
        if liter > config.cistern.max_liter:
            return config.cistern.max_liter
        return int(liter)

    def create(self, data: MeasurementInput) -> MeasurementOutput:
        """Creates a new measurement record in the database.

        Args:
            data (MeasurementInput): The input data for the new measurement.

        Returns:
            MeasurementOutput: The created measurement output.
        """
        measurement = Measurement(**data.model_dump(exclude_none=True))
        measurement.liters = self._compute_liters(measurement.measurement)
        logging.debug("New measurement: %s", measurement)
        self.session.add(measurement)
        self.session.commit()
        self.session.refresh(measurement)
        return MeasurementOutput(
            id=measurement.id,
            timestamp=measurement.timestamp,
            liters=measurement.liters,
            measurement=measurement.measurement,
        )

    def get_all_in_timerange(
        self, start: datetime, end: datetime
    ) -> List[Optional[MeasurementOutput]]:
        """Retrieves all measurement records from the database.

        Args:
            start (datetime): The start of the time range.
            end (datetime): The end of the time range.

        Returns:
            List[Optional[MeasurementOutput]]: A list of all measurement outputs.
        """
        measurements = (
            self.session.query(Measurement)
            .where(Measurement.timestamp >= start)
            .where(Measurement.timestamp <= end)
            .order_by(Measurement.timestamp.asc())
            .all()
        )
        return [
            MeasurementOutput(**measurement.__dict__) for measurement in measurements
        ]

    def get_all(
        self, skip: int = 0, limit: int = 100
    ) -> List[Optional[MeasurementOutput]]:
        """Retrieves all measurement records from the database.

        Args:
            skip (int, optional): The number of entries to skip.
                Defaults to 0.
            limit (int, optional): The maximum number of entries to return.
                Defaults to 100.

        Returns:
            List[Optional[MeasurementOutput]]: A list of all measurement outputs.
        """
        measurements = (
            self.session.query(Measurement)
            .order_by(Measurement.id.desc())
            .offset(limit * skip)
            .limit(limit)
            .all()
        )
        return [
            MeasurementOutput(**measurement.__dict__) for measurement in measurements
        ]

    def get_days(
        self,
        start_day: datetime.date,
        end_day: datetime.date,
        skip: int = 0,
        limit: int = 100,
    ) -> List[MeasurementOutput]:
        """Get all Measurements in a given day range.

        Args:
            start_day (datetime): The start day of the range.
            end_day (datetime): The end day of the range.
            skip (int, optional): The number of entries to skip.
                Defaults to 0.
            limit (int, optional): The maximum number of entries to return.
                Defaults to 100.

        Returns:
            List[MeasurementOutput]: A list of all Measurements.
        """
        measurements = (
            self.session.query(Measurement)
            .where(Measurement.timestamp.cast(Date) > start_day)
            .where(Measurement.timestamp.cast(Date) <= end_day)
            .order_by(Measurement.timestamp.desc())
            .offset(limit * skip)
            .limit(limit)
            .all()
        )
        return [
            MeasurementOutput(**measurement.__dict__) for measurement in measurements
        ]

    def get_by_id(self, _id: int) -> Type[Measurement]:
        """Retrieves a measurement record by its ID.

        Args:
            _id (int): The ID of the measurement to retrieve.

        Returns:
            Type[Measurement]: The measurement with the given ID.
        """
        return self.session.query(Measurement).filter_by(id=_id).first()

    def measurement_exists_by_id(self, _id: int) -> bool:
        """Checks if a measurement exists by its ID.

        Args:
            _id (int): The ID of the measurement to check.

        Returns:
            bool: True if the measurement exists, False otherwise.
        """
        measurement = self.session.query(Measurement).filter_by(id=_id).first()
        return measurement is not None

    def update(
        self, measurement: Type[Measurement], data: MeasurementInput
    ) -> MeasurementInput:
        """Updates a measurement record in the database.

        Only the liters field can be updated.

        Args:
            measurement (Type[Measurement]): The measurement to update.
            data (MeasurementInput): The new data for the measurement.

        Returns:
            MeasurementInput: The updated measurement input.
        """
        measurement.liters = data.liters
        self.session.commit()
        self.session.refresh(measurement)
        return MeasurementInput(**measurement.__dict__)

    def delete(self, measurement: Type[Measurement]) -> bool:
        """Deletes a measurement record from the database.

        Args:
            measurement (Type[Measurement]): The measurement to delete.

        Returns:
            bool: True if the deletion was successful, False otherwise.
        """
        self.session.delete(measurement)
        self.session.commit()
        return True
