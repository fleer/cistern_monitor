"""Health check schema."""

from datetime import date, datetime

from service.schemas.camel_case import CamelModel


class MeasurementInput(CamelModel):
    """Class with tag information.

    Simple response Model for creating and
    reading tags.

    Attributes:
    ----------
    tag: str
        Given tag
    """

    measurement: int

    model_config = {
        "json_schema_extra": {
            "example": {
                "measurement": 100,
            },
        }
    }


class MeasurementOutput(CamelModel):
    """Class with tag information.

    Simple response Model for creating and
    reading tags.

    Attributes:
    ----------
    tag: str
        Given tag
    """

    id: int
    measurement: int
    timestamp: datetime
    liters: int

    model_config = {
        "json_schema_extra": {
            "example": {
                "id": 1,
                "timestamp": "2021-01-01T00:00:00",
                "measurement": 100,
                "liters": 100,
            },
        }
    }


class MeasurementDayAggregation(CamelModel):
    """Represents daily aggregation of measurements.

    Attributes:
        measurement (int): The measurement value.
        date (date): The date of the measurement.
        liters (int): The amount of liters measured.
    """

    date: date
    liters: float

    model_config = {
        "json_schema_extra": {
            "example": {
                "date": "2021-01-01",
                "liters": 100,
            },
        }
    }
