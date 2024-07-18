"""Cistern REST Service.

Service for processing, storing and fetching measurements.

Author: fleer
"""

import logging

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import service
from service.routes.v1 import router
from service.utils import get_config

logger = logging.getLogger(__name__)


config = get_config()

version = service.__getattr__("__version__")

description = """
# Service API Gateway.

Here is a small description of the project.
"""

tags_metadata = [
    {
        "name": "Healthcheck",
        "description": "Live and readiness probes.",
    },
]

app = FastAPI(
    title="FastAPI API Gateway",
    description=description,
    version=version,
    contact={
        "name": "fleer",
        "url": "https://github.com/fleer/fastapi-server-template",
    },
    openapi_tags=tags_metadata,
)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.router.include_router(router)


def start() -> None:
    """Launched with `poetry run start` at root level."""
    uvicorn.run("service.api:app", host="0.0.0.0", port=8000)
