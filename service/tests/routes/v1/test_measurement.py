"""Tests for measurement route."""

import json

from fastapi import status
from fastapi.testclient import TestClient


def test_create_entry(client: TestClient) -> None:
    """Test creation of measurement entry.

    Args:
        client (TestClient): FastAPI TestClient
    """
    response = client.post("/api/v1/measurement", data=json.dumps({"measurement": 100}))
    assert response.status_code == status.HTTP_201_CREATED
