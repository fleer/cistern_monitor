"""Measurement service layer."""

from typing import List, Optional

from fastapi import HTTPException
from sqlalchemy.orm import Session
from datetime import date

from service.repository.measurement_repository import MeasurementRepository
from service.schemas.measurement_schema import MeasurementInput, MeasurementOutput


class MeasurementService:
    """Service class for handling operations related to Measurements."""

    def __init__(self, session: Session) -> None:
        """Initialize the MeasurementService with a database session.

        Args:
            session (Session): The database session to use for repository operations.
        """
        self.repository = MeasurementRepository(session)

    def create(self, data: MeasurementInput) -> MeasurementOutput:
        """Create a new Measurement.

        Args:
            data (MeasurementInput): The input data for the new Measurement.

        Returns:
            MeasurementOutput: The created Measurement.
        """
        return self.repository.create(data)

    def get_all_in_timerange(
        self, start: str, end: str
    ) -> List[Optional[MeasurementOutput]]:
        """Get all Measurements in a given time range.

        Args:
            start (str): The start of the time range.
            end (str): The end of the time range.

        Returns:
            List[Optional[MeasurementOutput]]: A list of all Measurements in the
            given time range.
        """
        return self.repository.get_all_in_timerange(start, end)

    def get_days(
        self, start_day: date, end_day: date, skip: int = 0, limit: int = 100
    ) -> List[MeasurementOutput]:
        """Get all Measurements in a given day range.

        Args:
            start_day (date): The start day of the range.
            end_day (date): The end day of the range.
            skip (int, optional): The number of entries to skip.
                Defaults to 0.
            limit (int, optional): The maximum number of entries to return.
                Defaults to 100.

        Returns:
            List[Optional[MeasurementOutput]]: A list of all Measurements.
        """
        return self.repository.get_days(start_day, end_day, skip, limit)

    def get_all(
        self, skip: int = 0, limit: int = 100
    ) -> List[Optional[MeasurementOutput]]:
        """Get all Measurements.

        Args:
            skip (int, optional): The number of entries to skip.
                Defaults to 0.
            limit (int, optional): The maximum number of entries to return.
                Defaults to 100.

        Returns:
            List[Optional[MeasurementOutput]]: A list of all Measurements.
        """
        return self.repository.get_all(skip, limit)

    def delete(self, _id: int) -> bool:
        """Delete a Measurement.

        Args:
            _id (int): The id of the Measurement to delete.

        Returns:
            bool: True if the deletion was successful, False otherwise.

        Raises:
            HTTPException: If no Measurement with the given id exists.
        """
        if not self.repository.measurement_exists_by_id(_id):
            raise HTTPException(status_code=404, detail="Measurement not found")
        measurement = self.repository.get_by_id(_id)
        self.repository.delete(measurement)
        return True

    def update(self, _id: int, data: MeasurementInput) -> MeasurementInput:
        """Update a Measurement.

        Args:
            _id (int): The id of the Measurement to update.
            data (MeasurementInput): The new data for the Measurement.

        Returns:
            MeasurementInput: The updated Measurement.

        Raises:
            HTTPException: If no Measurement with the given id exists.
        """
        if not self.repository.measurement_exists_by_id(_id):
            raise HTTPException(status_code=404, detail="Measurement not found")
        measurement = self.repository.get_by_id(_id)
        return self.repository.update(measurement, data)
