#!/bin/sh
envsubst <./config/config.prod.yaml >./config/config.yaml

alembic upgrade head

service_start --host 0.0.0.0 --port 8000
