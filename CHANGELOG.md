# CHANGELOG


## v0.5.6 (2025-05-17)


## v0.5.5 (2025-05-17)

### Bug Fixes

- **github actions**: Intermediate fix: workflow dispatch
  ([`da0013e`](https://github.com/fleer/cistern_monitor/commit/da0013e1d555d199ac6a2d210014d03b174eb56d))

- **service**: Fixed distance computation
  ([`4b03454`](https://github.com/fleer/cistern_monitor/commit/4b03454d3f40f34d8faedbb1b72b878f1b5df71e))

- New variable for distance between sensor and max fill level - Fixed computation of distance from
  sonic duration

### Refactoring

- **ui**: Fixed style
  ([`54f88f9`](https://github.com/fleer/cistern_monitor/commit/54f88f9524151f02f43ae6ede58765c9cec9051e))


## v0.5.4 (2025-05-17)

### Bug Fixes

- **esp**: Fixed missing pin definition and added avg
  ([`a266549`](https://github.com/fleer/cistern_monitor/commit/a266549300a016a3412d128717e9566fd2f14f41))

- Pin definition for in and out was missing. Average measurement is now computed for better
  stability

### Continuous Integration

- **semver**: Changed commit parser
  ([`8efd173`](https://github.com/fleer/cistern_monitor/commit/8efd173f3e7ca85c613947b01b0aa60e237d4b12))


## v0.5.3 (2025-04-19)

### Bug Fixes

- **github actions**: Fixed docker build event
  ([`01053bd`](https://github.com/fleer/cistern_monitor/commit/01053bdb19984de46db507f1a7386961ec56b7b0))


## v0.5.2 (2025-04-19)

### Continuous Integration

- **github action**: Fixed typo
  ([`c01012c`](https://github.com/fleer/cistern_monitor/commit/c01012c8063bb96afb0b8fc694d75aa3e427b5a9))

- **github action**: Removed wrong field in config
  ([`02bd213`](https://github.com/fleer/cistern_monitor/commit/02bd2133c5dd84b09726e352d0b0e2d7c5779738))

- **github actions**: Fixed docker creation action
  ([`95ab387`](https://github.com/fleer/cistern_monitor/commit/95ab38732ee396e314ba5a2714599163bc77a83a))

- Triggert now on tag push - Should write semver tags

- **github workflows**: Fixed build of Docker Images
  ([`da6f338`](https://github.com/fleer/cistern_monitor/commit/da6f338e79b5d6d44f7b763eac7160d5db8cdd9d))

### Refactoring

- **arduino**: Small refactoring
  ([`4f70eb6`](https://github.com/fleer/cistern_monitor/commit/4f70eb6e48737d5390835a697ffec858af5ee761))

- Delay set to 1 Hour - reformatting


## v0.5.1 (2025-02-07)

### Bug Fixes

- **github workflows**: Docker build trigger
  ([`fe04949`](https://github.com/fleer/cistern_monitor/commit/fe04949736924f634ea4abeceb71cd91ac810cbb))


## v0.5.0 (2025-02-07)

### Bug Fixes

- **data**: Fixed error on missing data
  ([`cb9688a`](https://github.com/fleer/cistern_monitor/commit/cb9688aa12b565ddcb3f2feac792ba3eab49f774))

### Build System

- **docker**: Github actions aligned for docker build of UI
  ([`285b2af`](https://github.com/fleer/cistern_monitor/commit/285b2afd5d4ef4c36a683dc218aafb2a6ec9d272))

### Continuous Integration

- Updated pre-commit.yaml
  ([`e0c72dc`](https://github.com/fleer/cistern_monitor/commit/e0c72dc4339490e6c3397d28bf88fa4ae3d22908))

- **github actions**: Updated python test
  ([`6edfeeb`](https://github.com/fleer/cistern_monitor/commit/6edfeebaf8b4b07f2df8d4225a96140816aa77bc))

- **github workflows**: Fixed POSTGRES_DB_NAME env var
  ([`574a8cf`](https://github.com/fleer/cistern_monitor/commit/574a8cfcc6d025e0194c110ec1c7f77adb191ed6))

- **github workflows**: Fixed python test script
  ([`44a79a5`](https://github.com/fleer/cistern_monitor/commit/44a79a5cca3424f02d831ab0459b839e1bef7f84))

- **github workflows**: Fixed ruff command
  ([`21e1604`](https://github.com/fleer/cistern_monitor/commit/21e16048c0fe496e23ee4a7f7e0dd639d0900224))

- **pre-commit**: Updated config
  ([`914cbcd`](https://github.com/fleer/cistern_monitor/commit/914cbcd95262e288310427cf3013b90dacee92f1))

### Features

- Added current fill level
  ([`90e0de7`](https://github.com/fleer/cistern_monitor/commit/90e0de70b796f2040ee8907de705b3cf8c063384))

- First version of Frontend
  ([`2cd130e`](https://github.com/fleer/cistern_monitor/commit/2cd130efadc65e319b20b3853ec27feb6f3b0633))

- **service**: Added new endpoint /measurement/days
  ([`12059ff`](https://github.com/fleer/cistern_monitor/commit/12059ff8c4fe4dcfa8ed4f94d38ed5ef535f6cbc))

- **ui**: First version of UI
  ([`d0435ac`](https://github.com/fleer/cistern_monitor/commit/d0435acb208c70e703bdc811ad7090457bd7473d))

### Refactoring

- Semantic release updated
  ([`9ca294d`](https://github.com/fleer/cistern_monitor/commit/9ca294db088e166c1cbe50c6fcd7658a3a0dff25))

- **dashboard**: Working docker-compose
  ([`6af4172`](https://github.com/fleer/cistern_monitor/commit/6af417247c4784f81d5ac9bcae476b3f5afef8fd))

- **service**: Uv and some other stuff
  ([`2408e6c`](https://github.com/fleer/cistern_monitor/commit/2408e6c4d74686ef2c7e9c7d45a738f829da2edb))

Improved package and added new endpoint for fetching days - switch from poetry to uv - alembic
  improvements

### Testing

- **conftest**: Moved env vars to top of script
  ([`ab221b4`](https://github.com/fleer/cistern_monitor/commit/ab221b4b18fb5f3c56c32caeb7f025cbbecdbcb4))

- **conftest.py**: Fixed env vars again
  ([`2aea3f1`](https://github.com/fleer/cistern_monitor/commit/2aea3f16e214d1939380d9e3b015d0501b442cce))


## v0.4.0 (2024-09-15)


## v0.3.0 (2024-08-13)

### Build System

- **dockerfile**: Added config path
  ([`addf5b1`](https://github.com/fleer/cistern_monitor/commit/addf5b19c91a2d464a1e420d72338689ec62f90d))

### Continuous Integration

- **github actions**: Fixed Docker Build Action
  ([`708ccc6`](https://github.com/fleer/cistern_monitor/commit/708ccc6289b99f9662e60d3343afdfac1ce3d88f))

- **github actions**: Fixed Docker Login Action
  ([`27d41ee`](https://github.com/fleer/cistern_monitor/commit/27d41ee0743aff4072fd7a7050c5aacddb43111f))

- **github actions**: Improved Github Actions
  ([`1663b7b`](https://github.com/fleer/cistern_monitor/commit/1663b7b0f5b80a3e02ee10101ca28bab4a9d9d0c))

Added docker build action

### Documentation

- **readme.md**: Added readme document
  ([`61f4504`](https://github.com/fleer/cistern_monitor/commit/61f4504d6e7f7916954296c28b66737a08155e76))

### Features

- New simple endpoint "/"
  ([`9aa8c60`](https://github.com/fleer/cistern_monitor/commit/9aa8c60c878233fbf1cbc860426f3fd86a060b0e))

- **github actions**: Add tags
  ([`3dd8c9d`](https://github.com/fleer/cistern_monitor/commit/3dd8c9d9a2ec45a63f7a7978b77385ed96a405ee))

### Refactoring

- **config**: Refactored config management
  ([`a5bf0ad`](https://github.com/fleer/cistern_monitor/commit/a5bf0ad143d03a2aecc3d09f263a6dd634e56784))


## v0.2.0 (2024-07-17)


## v0.1.0 (2024-07-15)

### Build System

- **semver**: Fixed version bump
  ([`50332b5`](https://github.com/fleer/cistern_monitor/commit/50332b50072cf21e0595a16cdab65c250a63162d))

No major bump on push in main

### Features

- **api/v1**: New endpoint for fetching all entries
  ([`f69bca0`](https://github.com/fleer/cistern_monitor/commit/f69bca0d96826a31921dc73ffc4ef8b9f4058ad6))

- **routes**: Added query parameters
  ([`ff21246`](https://github.com/fleer/cistern_monitor/commit/ff21246b9bed40ec94ae4ad852c45ed13f11c2de))

limit and skip added


## v0.0.1 (2024-07-12)

### Bug Fixes

- **database**: Fixed database issues
  ([`7bf04db`](https://github.com/fleer/cistern_monitor/commit/7bf04db73628eb21817bd7a62c161e44c1c9293d))

Tests are now working. Schema is a fixed parameter

### Build System

- **poetry**: Updated packages
  ([`60ae2d3`](https://github.com/fleer/cistern_monitor/commit/60ae2d3c4cbb1b528046e5af64b3be6c019fa2f8))

### Continuous Integration

- **github workflow**: Fixed semantic release script
  ([`8ae715c`](https://github.com/fleer/cistern_monitor/commit/8ae715cc2a8d3661b73b4d04c9d4201b4186661a))

switched to directory key

- **pre-commit**: Moved pre-commit config
  ([`f3f1eff`](https://github.com/fleer/cistern_monitor/commit/f3f1effaf940336a255725f260f06f2d1f6f4f0d))

Moved config to root folder

### Refactoring

- **service**: Extensive refactoring
  ([`192ee50`](https://github.com/fleer/cistern_monitor/commit/192ee50b883df00b490abd5056b6166265a98245))

Added repository and service layer


## v0.0.0 (2024-07-01)

### Refactoring

- **service**: Moved service to service folder
  ([`3ca4d63`](https://github.com/fleer/cistern_monitor/commit/3ca4d63c9eb3d39128e41fd87184cffe0e826a61))
