"""Healthcheck route module."""

import logging
from typing import Annotated, List

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from service.routes import get_db
from service.schemas.measurement_schema import MeasurementInput, MeasurementOutput
from service.service.measurement_service import MeasurementService

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/measurement",
    tags=["Mesurement"],
    responses={400: {"description": "Server error"}},
)


@router.post(
    "",
    response_model=MeasurementOutput,
    response_description="Create a new entry",
    status_code=status.HTTP_201_CREATED,
)
async def create_entry(
    request: MeasurementInput, db: Session = Depends(get_db)
) -> MeasurementOutput:
    """Asynchronously create a new measurement entry.

    Args:
        request (MeasurementInput): The input data for the new Measurement.
        db (Session, optional): The database session. Defaults to Depends(get_db).

    Returns:
        MeasurementOutput: The created Measurement.
    """
    return MeasurementService(db).create(request)


@router.get(
    "",
    response_model=List[MeasurementOutput],
    response_description="Get all entries",
    status_code=status.HTTP_200_OK,
)
async def fetch_entries(
    skip: Annotated[int, Query(title="Skip `skip`* `limit` entries")] = 0,
    limit: Annotated[int, Query(title="Limit number of entries to fetch")] = 100,
    db: Session = Depends(get_db),
) -> List[MeasurementOutput]:
    """Asynchronously create a new measurement entry.

    Args:
        skip (int, optional): The number of entries to skip. Defaults to 0.
        limit (int, optional): The maximum number of entries to return. Defaults to 100.
        db (Session, optional): The database session. Defaults to Depends(get_db).

    Returns:
        MeasurementOutput: The created Measurement.
    """
    return MeasurementService(db).get_all(skip, limit)
