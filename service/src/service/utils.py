"""Utility functions.

Colletions of utility functions that are used in the service.

- Load configuration
- Recursively search for directory


"""

import logging
import os
import sys
from pathlib import Path

from service.schemas.config import CisternData, Config, DatabaseConfig

logger = logging.getLogger(__name__)


def find_dir(target_dir: str = "config", path: Path = Path("./")) -> Path:
    """Recursively search for the target directory.

    Function starts at path and recursively searches for the target directory
    upwards.

    Args:
        target_dir (str): Name of the target directory
        path (Path): starting path

    Returns:
        path: Path to the target directory, starting from `path`
    """
    if (path / target_dir).is_dir():
        return path / target_dir
    elif path == path.parent:
        return None
    return find_dir(target_dir, path.parent)


def get_config() -> Config:
    """Get configuration class.

    Get the configuration class with the loaded configuration file.
    The configuration file is validated with the pydantic model.

    Returns:
        Config: Configuration class
    """
    try:
        cistern_data = CisternData(
            height=float(os.getenv("CISTERN_HEIGHT")),
            max_liter=int(os.getenv("CISTERN_MAX_LITER")),
        )
        database_config = DatabaseConfig(
            db_name=os.getenv("POSTGRES_DB_NAME"),
            user=os.getenv("POSTGRES_USER"),
            password=os.getenv("POSTGRES_PASSWORD"),
            host=os.getenv("POSTGRES_HOST"),
            port=os.getenv("POSTGRES_PORT"),
        )

        return Config(cistern=cistern_data, database=database_config)
    except EnvironmentError as e:
        logger.error("Error in configuration: %s", e)
        sys.exit(1)
