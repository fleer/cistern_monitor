# Description: Makefile for the project
#
# setup project locally
local_startup: install_pre_commit update_pre_commit clean_venv init_venv sync_dependencies

# sync the dependencies
sync_dependencies:
	@$(MAKE) green_message MESSAGE="Syncing project"
	@uv sync --all-groups

# upgrade the dependencies
upgrade_dependencies:
	@$(MAKE) green_message MESSAGE="Upgrade project"
	@uv lock --upgrade

# install pre-commit
install_pre_commit:
	@$(MAKE) green_message MESSAGE="Installing pre-commit"
	@pre-commit install

# update pre-commit
update_pre_commit:
	@$(MAKE) green_message MESSAGE="Updating pre-commit"
	@pre-commit autoupdate

# run pre-commit
run_pre_commit:
	@$(MAKE) green_message MESSAGE="Run pre-commit"
	@pre-commit run --all-files

# install Python version
install_python:
# call make green message and provide the message for the current command
	@$(MAKE) green_message MESSAGE="Installing Pyhon $(PY_VERSION)"
	@uv python install $(PY_VERSION)

# Pin Python version
pin_python:
	 @$(MAKE) green_message MESSAGE="Pinning Python to $(PY_VERSION)"
	 @uv python pin $(PY_VERSION)

# Init project
init_venv:
	 @$(MAKE) green_message MESSAGE="Setting up venv"
	 @uv venv

# Cleanup venv
clean_venv:
	 @$(MAKE) green_message MESSAGE="Cleaning up"
	 @rm -rf .venv

# Run tests
test:
	 @$(MAKE) green_message MESSAGE="Running tests"
	 @uv run python -m pytest tests --test-alembic --doctest-modules --cov=service --maxfail=1 --durations=5

# Display message in green
green_message:
	@echo "\033[32m$(MESSAGE)\033[32m"

# Lint & Format
check: lint format mypy

# Ruff lint
lint:
	@$(MAKE) green_message MESSAGE="Lint Code"
	uvx ruff@latest check --fix

# Ruff format
format:
	@$(MAKE) green_message MESSAGE="Format Code"
	uvx ruff@latest format

# Static type checking using mypy
mypy:
	@$(MAKE) green_message MESSAGE="Running mypy"
	@uv run mypy --config-file ./pyproject.toml src/

# Build Docker Image
docker_build:
	@$(MAKE) green_message MESSAGE="Building Docker Image"
	@docker build . -t cistern-service

# Run Docker Image
docker_run:
	@$(MAKE) green_message MESSAGE="Building Docker Image"
	@docker run --rm -it --env-file .env -p 8000:8000 cistern-service

# Run Development Environment
dev:
	@$(MAKE) green_message MESSAGE="Running Development Environment"
	@docker compose up

# Serve the documentation
serve_docs:
	@$(MAKE) green_message MESSAGE="Serving Documentation"
	@uv run mkdocs serve

# alembic
alembic_upgrade:
	@$(MAKE) green_message MESSAGE="Upgrading Database"
	@uv run alembic upgrade head
