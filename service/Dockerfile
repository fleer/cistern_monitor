# set base image (host OS)
FROM python:3.12-slim AS base

LABEL maintainer="fleer"
LABEL org.opencontainers.image.source=https://github.com/fleer/cistern_monitor
LABEL org.opencontainers.image.description="Rest service for storing and accessing measurements"
LABEL org.opencontainers.image.licenses=MIT

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

# working directory and Python path
WORKDIR /app

FROM base AS builder-base

RUN \
  apt-get update && \
  apt-get install -y curl ca-certificates build-essential

ADD https://astral.sh/uv/0.5.5/install.sh /uv-installer.sh

# Run the installer then remove it
RUN sh /uv-installer.sh && rm /uv-installer.sh

# Ensure the installed binary is on the `PATH`
ENV PATH="/root/.local/bin/:$PATH"

ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

COPY src/ ./src/

RUN --mount=type=cache,target=/root/.cache/uv \
  --mount=type=bind,source=uv.lock,target=uv.lock \
  --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
  --mount=type=bind,source=README.md,target=README.md \
  uv build

FROM base AS runtime

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

# Creates a non-root user with an explicit UID and adds permission and folder
# access
RUN useradd -u 1000 appuser && chown -R appuser /app

# Adds permission for appuser (non-root) to access the /data folder
RUN mkdir /app/data && chown -R appuser /app/data
RUN mkdir /home/appuser && chown -R appuser /home/appuser

USER appuser

ENV PATH="/home/appuser/.local/bin/:$PATH"

# Install the wheel
RUN pip install --no-cache-dir ./dist/*.whl

# Alembic
COPY alembic.ini alembic.ini
COPY entrypoint.sh entrypoint.sh
COPY alembic/ alembic/

# command to run on container start
ENTRYPOINT ["./entrypoint.sh"]
