"""Database configuration.

Load the database configuration and manage the connection to the database.

Provides functions for creating the connection string.
"""

import logging

from sqlalchemy import MetaData, create_engine
from sqlalchemy.orm import sessionmaker

from service.utils import get_config

logger = logging.getLogger(__name__)


def get_connection_string() -> str:
    """Create URI for database access.

    Function for reading the given section of a config file

    Raises:
    ------
        Exception: Section not found

    Returns:
    -------
        str: Connection string
    """
    connection_info = get_config().database
    logger.debug("Establish database connection...")
    for attribute, value in connection_info.__dict__.items():
        if attribute != "password":
            logger.debug("Parameter - %s: %s", attribute, value)
    return (
        f"postgresql+psycopg://{connection_info.user}:"
        + f"{connection_info.password}@"
        + f"{connection_info.host}:{connection_info.port}"
        + f"/{connection_info.db_name}"
    )


SessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=create_engine(get_connection_string())
)

metadata = MetaData()
