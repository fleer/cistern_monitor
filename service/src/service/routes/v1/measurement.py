"""Healthcheck route module."""

import logging

from fastapi import APIRouter, Depends, status
from service.routes import get_db
from service.schemas.measurement_schema import MeasurementInput, MeasurementOutput
from service.service.measurement_service import MeasurementService
from sqlalchemy.orm import Session

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
