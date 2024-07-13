"""Database Tables.

Define the database tables for the ORM.
"""

from datetime import datetime

from sqlalchemy import (
    DateTime,
    Integer,
    sql,
)
from sqlalchemy.orm import Mapped, declarative_base, mapped_column

from service.database.database import metadata

Base = declarative_base(metadata=metadata)


class Measurement(Base):
    """Definition of the test table.

    Attributes:
        __tablename__ (str): Table name
        id (int): Row ID
        tag (str): Desired tag
        timestamp (datetime): Current timestamp
                                is stored here
    """

    __tablename__ = "cistern"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    measurement: Mapped[int] = mapped_column(Integer, comment="Raw Sensor Measurement")
    liters: Mapped[int] = mapped_column(Integer, comment="Calculate Liters of Water")
    timestamp: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        onupdate=sql.func.now(),
        server_default=sql.func.now(),
        comment="Creation Date",
    )


Base.registry.configure()
