# set base image (host OS)
FROM python:3.12-slim AS base

# Setup env
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

# Python
# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1
# enable Python tracebacks on segfaults
ENV PYTHONFAULTHANDLER=1

# Poetry
# https://python-poetry.org/docs/configuration/#using-environment-variables
ENV POETRY_VERSION=1.8.3

# make poetry install to this location
ENV POETRY_HOME="/opt/poetry"

# do not ask any interactive question
ENV POETRY_NO_INTERACTION=1

# never create virtual environment automaticly, only use env prepared by use
ENV POETRY_VIRTUALENVS_CREATE=false

# this is where our requirements + virtual environment will live
ENV VIRTUAL_ENV="/venv"

# prepend poetry and venv to path
ENV PATH="$POETRY_HOME/bin:$VIRTUAL_ENV/bin:$PATH"

# prepare virtual env
RUN python -m venv $VIRTUAL_ENV

# working directory and Python path
WORKDIR /app

ENV PYTHONPATH="/app:$PYTHONPATH"

FROM base AS builder-base

# copy the dependencies file to the working directory
COPY poetry.lock pyproject.toml README.md ./
COPY src/ ./src/

RUN \
  apt-get update && \
  apt-get install -y curl ca-certificates build-essential

# install poetry - respects $POETRY_VERSION & $POETRY_HOME
# The --mount will mount the buildx cache directory to where
# Poetry and Pip store their cache so that they can re-use it
RUN --mount=type=cache,target=/root/.cache \
  curl -sSL https://install.python-poetry.org | python -

# install runtime deps to $VIRTUAL_ENV
RUN --mount=type=cache,target=/root/.cache \
  # Build Package to /dist folder
  poetry build

FROM base AS runtime

LABEL maintainer="fleer"
LABEL org.opencontainers.image.source=https://github.com/fleer/cistern_monitor
LABEL org.opencontainers.image.description="Rest service for storing and accessing measurements"
LABEL org.opencontainers.image.licenses=MIT

ENV STAGE=prod

EXPOSE 8000

# used to init dependencies
WORKDIR /app

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
  apt-get install -y --no-install-recommends \
  gettext-base \
  ca-certificates \
  libpq-dev && \
  apt-get clean

# Copy python packages from python-deps stage
COPY --from=builder-base /app/dist ./dist

# Install the wheel
RUN pip install ./dist/*.whl

RUN mkdir -p ./config

COPY config/*.ini ./config/
COPY config/config.prod.yaml ./config/config.prod.yaml

# Alembic
COPY alembic.ini alembic.ini
COPY entrypoint.sh entrypoint.sh
COPY alembic/ alembic/
RUN chmod +x entrypoint.sh

# command to run on container start
ENTRYPOINT ["./entrypoint.sh"]
