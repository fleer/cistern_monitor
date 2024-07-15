"""Endopoints for version 1 of the API."""

from fastapi import APIRouter

from service.routes.v1 import healthcheck, measurement

router = APIRouter(prefix="/api/v1")
router.include_router(healthcheck.router)
router.include_router(measurement.router)
