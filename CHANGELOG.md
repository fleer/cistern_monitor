# CHANGELOG


## v1.1.10 (2025-11-01)

### Bug Fixes

- **ui**: Set days to 14
  ([`8c6f6ea`](https://github.com/fleer/cistern_monitor/commit/8c6f6eae47f38713aa792d88f683c5716eb0087d))

### Code Style

- **api**: Added exception for host
  ([`99422b4`](https://github.com/fleer/cistern_monitor/commit/99422b4e4ea031d8233127017e74216022a1632a))

- **api**: Ignore S104
  ([`bce7874`](https://github.com/fleer/cistern_monitor/commit/bce7874dccd0f394ef632b5844b363e17f97a4e0))

### Documentation

- **readme**: Updated styel
  ([`efb26ac`](https://github.com/fleer/cistern_monitor/commit/efb26ac8f785dd4e08207bdd3e3811ca15af6332))

### Refactoring

- **api**: Set host to 0.0.0.0
  ([`136e98a`](https://github.com/fleer/cistern_monitor/commit/136e98a2c65e5010b6afd40001937a10e402e422))


## v1.1.9 (2025-10-26)

### Bug Fixes

- **cistern_dashboard**: Fixed unexpected argument
  ([`d8a14f5`](https://github.com/fleer/cistern_monitor/commit/d8a14f50918bf7109839e65bdf1db76a2ac12309))


## v1.1.8 (2025-10-26)

### Bug Fixes

- **service**: Fixed get days rout
  ([`514a009`](https://github.com/fleer/cistern_monitor/commit/514a0093668adfb25978cebb312a8f2307796ee8))

- **ui**: Updated packages and fixed histogram
  ([`e0a2860`](https://github.com/fleer/cistern_monitor/commit/e0a286094462505bc38aa2e67293e39af8139d84))

### Chores

- **ui**: Adde example_env
  ([`606a598`](https://github.com/fleer/cistern_monitor/commit/606a598c40f0aaeef63322e7225c0d7dba8ce51c))

### Code Style

- **service**: Fixed ruff eroor
  ([`7ddb19b`](https://github.com/fleer/cistern_monitor/commit/7ddb19b05c5783f684703da7f99f818a6e0386bc))

- **service**: Fixed ruff issues
  ([`e73219f`](https://github.com/fleer/cistern_monitor/commit/e73219f0873d3136dcd3d45674ede63ca49d2364))

### Testing

- **service**: Fixed db session error
  ([`c347532`](https://github.com/fleer/cistern_monitor/commit/c3475328f0cb3decd648b8985c8f0edca4aceb07))


## v1.1.7 (2025-10-19)


## v1.1.6 (2025-10-19)

### Build System

- **github actions**: Fixed missing commit in build
  ([`587f813`](https://github.com/fleer/cistern_monitor/commit/587f8136baa2084c2efb8242154ef45c2cbb659d))

### Code Style

- **ruff**: Fixed ruff error
  ([`beef2ba`](https://github.com/fleer/cistern_monitor/commit/beef2ba4f6404e9c9566dc3878dcc3a0ab11641e))


## v1.1.5 (2025-10-19)

### Build System

- **pyproject.toml**: Moved dev dependencies to dependency-groups
  ([`aba7592`](https://github.com/fleer/cistern_monitor/commit/aba7592d9d5cc060ee1b006b371575514ee979a0))

### Refactoring

- **ruff**: Added security checks "S"
  ([`18d9c6f`](https://github.com/fleer/cistern_monitor/commit/18d9c6f7f63e8f3f40f9d64218039ec0ce888458))


## v1.1.4 (2025-08-12)


## v1.1.3 (2025-08-12)

### Bug Fixes

- **ui**: Fixed JSX namespace error
  ([`880fc24`](https://github.com/fleer/cistern_monitor/commit/880fc247406e159c3eee8d25c6ec2bfc262f4b21))

### Build System

- **dockerfile**: Updated node base image to 22
  ([`6c65787`](https://github.com/fleer/cistern_monitor/commit/6c65787c6e2d7af57ecf297f80211be1ca6690b8))

- **ui**: Updated package.json
  ([`091ecdb`](https://github.com/fleer/cistern_monitor/commit/091ecdbbf1c187d619adaaa51aca44b533505367))


## v1.1.2 (2025-07-11)

### Bug Fixes

- **ui**: Fixed date sorting in histogram
  ([`6c76ef5`](https://github.com/fleer/cistern_monitor/commit/6c76ef520f6177849a71464c58bff0bbe8aed9b4))

### Build System

- **server**: Updated python dependencies
  ([`3935782`](https://github.com/fleer/cistern_monitor/commit/39357827c294046c1979f7be03670596a208e3f4))

- **ui**: Node Module Update
  ([`32a43b5`](https://github.com/fleer/cistern_monitor/commit/32a43b5ce994a9bfaa9e8d0efe5d97f26568d493))

### Chores

- **makefile**: Improved makefile
  ([`be93e18`](https://github.com/fleer/cistern_monitor/commit/be93e18f5c30028b3bbad319f66b58a34d5ad371))


## v1.1.1 (2025-07-10)

### Bug Fixes

- **github actions**: Fixed broken docker images
  ([`1b025cd`](https://github.com/fleer/cistern_monitor/commit/1b025cdc9d7b91f8434d37d38ce27540566b1f95))


## v1.1.0 (2025-07-10)

### Bug Fixes

- **github actions**: Fixed docker image name and tag
  ([`5a758f3`](https://github.com/fleer/cistern_monitor/commit/5a758f3056e7324ced24cced191d8ffe2c9306ad))

### Features

- **readme**: Added Badge
  ([`6554f58`](https://github.com/fleer/cistern_monitor/commit/6554f587fe946efaa85be1de7c59aaa7b5b110b9))

### Refactoring

- **github actions**: Changed delimiter
  ([`12353a1`](https://github.com/fleer/cistern_monitor/commit/12353a1267381f6735ab9b50ccca5c4b417b6ddc))


## v1.0.4 (2025-07-06)

### Continuous Integration

- **github actions**: Added image tag
  ([`e4a1643`](https://github.com/fleer/cistern_monitor/commit/e4a1643ac2448098559c99f02bde409c314ff538))


## v1.0.3 (2025-07-06)

### Build System

- **github actions**: Separate creation of docker images
  ([`a7adcf5`](https://github.com/fleer/cistern_monitor/commit/a7adcf5781c2d809aa2fa3dcffcc7c03045ce794))


## v1.0.2 (2025-07-06)

### Build System

- Fixed typo
  ([`974bb5c`](https://github.com/fleer/cistern_monitor/commit/974bb5cf4a4d33e1b0ede32b72cfc23e6d4d3d66))

- **github actions**: Fixed tags on docker build
  ([`38e49b0`](https://github.com/fleer/cistern_monitor/commit/38e49b0fa58a66d171e84de6d23a8ab00f33c119))

- **github actions**: Removed some build tags for docker images
  ([`12b06ed`](https://github.com/fleer/cistern_monitor/commit/12b06ed02fab3df3b7cc7dd8c495b053f13cc5cd))

- **semver**: Added correct path to config file for semver
  ([`7d32f4e`](https://github.com/fleer/cistern_monitor/commit/7d32f4ea29bcede07dfa9e14b0962e5eca22d3ef))


## v1.0.1 (2025-07-06)

### Bug Fixes

- **github action**: Fixed creation of docker image name
  ([`2d2d4e0`](https://github.com/fleer/cistern_monitor/commit/2d2d4e03fc0245763a4c02943cf5e76e3c7a759b))

- **github action**: Fixed typo in build workflow
  ([`07d540a`](https://github.com/fleer/cistern_monitor/commit/07d540a04fa2a1b1471e1555b3629375f4328fbf))


## v1.0.0 (2025-07-06)

### Bug Fixes

- **ui**: Fixed fetch of too few rows from db
  ([`fe7b1fc`](https://github.com/fleer/cistern_monitor/commit/fe7b1fc4487f859e4a3f79af7d2192ac95fed7ea))

### Build System

- **github actions**: Improved release actions
  ([`9d4591a`](https://github.com/fleer/cistern_monitor/commit/9d4591a1f0cffbfc88bd83c27cfeb659deb13d80))

- **service**: Package update
  ([`7e0e918`](https://github.com/fleer/cistern_monitor/commit/7e0e918ca5b79c423f70537f121a66f2de3215d1))

### Chores

- **service**: Added Makefile
  ([`b673c6a`](https://github.com/fleer/cistern_monitor/commit/b673c6a8194bd25fc72d832ff1c047646001e42f))

### Continuous Integration

- **github actions**: Added missing permissions
  ([`bcf9f1d`](https://github.com/fleer/cistern_monitor/commit/bcf9f1d58d439d1c5570d3925a8dc60c32cfe476))

- **github actions**: Added version to semver action
  ([`c1a7a2b`](https://github.com/fleer/cistern_monitor/commit/c1a7a2b343429643b39929f0a81e1b738c84f395))

- **github actions**: Fixed build workflow and semver
  ([`90aec42`](https://github.com/fleer/cistern_monitor/commit/90aec4262958ac3c5c7ee3acbc72419ab3eb1211))

- **github actions**: Fixed path
  ([`2c8370b`](https://github.com/fleer/cistern_monitor/commit/2c8370b6b69ab9a5f0ce1cbdedf793bae5208982))

- **github actions**: Fixed typo
  ([`3502e06`](https://github.com/fleer/cistern_monitor/commit/3502e0603cd4ba2ed20c0ae167c4a8f6f6518465))


## v0.5.6 (2025-05-17)


## v0.5.5 (2025-05-17)

### Bug Fixes

- **github actions**: Intermediate fix: workflow dispatch
  ([`da0013e`](https://github.com/fleer/cistern_monitor/commit/da0013e1d555d199ac6a2d210014d03b174eb56d))

- **service**: Fixed distance computation
  ([`4b03454`](https://github.com/fleer/cistern_monitor/commit/4b03454d3f40f34d8faedbb1b72b878f1b5df71e))

### Refactoring

- **ui**: Fixed style
  ([`54f88f9`](https://github.com/fleer/cistern_monitor/commit/54f88f9524151f02f43ae6ede58765c9cec9051e))


## v0.5.4 (2025-05-17)

### Bug Fixes

- **esp**: Fixed missing pin definition and added avg
  ([`a266549`](https://github.com/fleer/cistern_monitor/commit/a266549300a016a3412d128717e9566fd2f14f41))

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

- **github workflows**: Fixed build of Docker Images
  ([`da6f338`](https://github.com/fleer/cistern_monitor/commit/da6f338e79b5d6d44f7b763eac7160d5db8cdd9d))

### Refactoring

- **arduino**: Small refactoring
  ([`4f70eb6`](https://github.com/fleer/cistern_monitor/commit/4f70eb6e48737d5390835a697ffec858af5ee761))


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

### Features

- **api/v1**: New endpoint for fetching all entries
  ([`f69bca0`](https://github.com/fleer/cistern_monitor/commit/f69bca0d96826a31921dc73ffc4ef8b9f4058ad6))

- **routes**: Added query parameters
  ([`ff21246`](https://github.com/fleer/cistern_monitor/commit/ff21246b9bed40ec94ae4ad852c45ed13f11c2de))


## v0.0.1 (2024-07-12)

### Bug Fixes

- **database**: Fixed database issues
  ([`7bf04db`](https://github.com/fleer/cistern_monitor/commit/7bf04db73628eb21817bd7a62c161e44c1c9293d))

### Build System

- **poetry**: Updated packages
  ([`60ae2d3`](https://github.com/fleer/cistern_monitor/commit/60ae2d3c4cbb1b528046e5af64b3be6c019fa2f8))

### Continuous Integration

- **github workflow**: Fixed semantic release script
  ([`8ae715c`](https://github.com/fleer/cistern_monitor/commit/8ae715cc2a8d3661b73b4d04c9d4201b4186661a))

- **pre-commit**: Moved pre-commit config
  ([`f3f1eff`](https://github.com/fleer/cistern_monitor/commit/f3f1effaf940336a255725f260f06f2d1f6f4f0d))

### Refactoring

- **service**: Extensive refactoring
  ([`192ee50`](https://github.com/fleer/cistern_monitor/commit/192ee50b883df00b490abd5056b6166265a98245))


## v0.0.0 (2024-07-01)

### Refactoring

- **service**: Moved service to service folder
  ([`3ca4d63`](https://github.com/fleer/cistern_monitor/commit/3ca4d63c9eb3d39128e41fd87184cffe0e826a61))
