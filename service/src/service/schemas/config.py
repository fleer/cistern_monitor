"""Config schema for service."""

from pydantic import BaseModel


class DatabaseConfig(BaseModel):
    """DatabaseConfig schema class.

    Simple class to define the database configuration.
    """

    host: str
    db_name: str
    port: int
    user: str
    password: str


class CisternData(BaseModel):
    """Data about the cistern.

    This class contains the height of the cistern, the maximum
    liters of water it can hold, and the distance of the sensor
    from the maximal fill-level of the cistern. The height is used to calculate
    the liters of water in the cistern based on the distance
    from the sensor to the bottom of the cistern.

    Attributes:
        height (float): Height of the cistern in cm.
        max_liter (int): Maximum liters of water the cistern can hold.
        sensor_distance (float): Distance of the sensor from the maximal
            fill-level of the cistern in cm.
    """

    height: float
    max_liter: int
    sensor_distance: float


class Config(BaseModel):
    """Config schema class.

    Full configuration schema for service.
    It mainly contains the version and connection details.

    """

    cistern: CisternData
    database: DatabaseConfig
