# Changelog

## [0.7.0](https://github.com/jszymanowski/breeze/compare/react-v0.6.0...react@0.7.0) (2025-03-20)


### Features

* Add display options to Box ([#110](https://github.com/jszymanowski/breeze/issues/110)) ([ae97704](https://github.com/jszymanowski/breeze/commit/ae977043043087fe066db0ce35d6a1dd8bca94de))
* Add inherit variant to Text, Heading ([#118](https://github.com/jszymanowski/breeze/issues/118)) ([e73146d](https://github.com/jszymanowski/breeze/commit/e73146dc799091ccdc7b83497fde23ecb7f1f2f1))
* Add numeric size scales to Box ([#109](https://github.com/jszymanowski/breeze/issues/109)) ([b702718](https://github.com/jszymanowski/breeze/commit/b702718712ca7c9417aa0de9433dd5de159ac207))
* Add overflow and position options to Box ([#108](https://github.com/jszymanowski/breeze/issues/108)) ([f0b2be5](https://github.com/jszymanowski/breeze/commit/f0b2be521246b222cd76a0c90dc606c7757ccaa3))
* Add rounded corner options to Box ([#111](https://github.com/jszymanowski/breeze/issues/111)) ([7c40f31](https://github.com/jszymanowski/breeze/commit/7c40f3166d9f807b9cd44a3651edfae763521ea7))
* Add size options to Box ([#106](https://github.com/jszymanowski/breeze/issues/106)) ([969a0ef](https://github.com/jszymanowski/breeze/commit/969a0efc361aeab7264fc17c07c8137efbad7481))
* Add variant option to Box, enabling simple color theming ([#115](https://github.com/jszymanowski/breeze/issues/115)) ([23206bb](https://github.com/jszymanowski/breeze/commit/23206bb239070ec452a9f17f42260a11616b4ebd))


### Minor tweaks

* Remove redundant default typography styles ([#121](https://github.com/jszymanowski/breeze/issues/121)) ([28bc374](https://github.com/jszymanowski/breeze/commit/28bc374372798af87ecf20bfce6e3d7e6006d274))

## [0.6.0](https://github.com/jszymanowski/breeze/compare/react@0.5.2...react-v0.6.0) (2025-03-19)


### Features

* **flex:** Add grow option to Flex ([#99](https://github.com/jszymanowski/breeze/issues/99)) ([81ba10f](https://github.com/jszymanowski/breeze/commit/81ba10f747b9371e89e3502157ac0cd74cfc63eb))


## [0.5.2](https://github.com/jszymanowski/breeze/compare/react@0.5.1...react@0.5.2) (2025-03-10)

### Bug Fixes

- **typography:** Remove default leading style ([#61](https://github.com/jszymanowski/breeze/issues/61)) ([e7fc725](https://github.com/jszymanowski/breeze/commit/e7fc7257a39e513ba48b9d9e66d4eae0b0b6e262))

### Other things, pre-semantic-release

- Add missing options for Flex justify, Heading alignment, Text color/variants
- Add tracking to Text
- Add leading, truncate to Heading
- Extend Grid rows to 24. Anything more than that should really just be a table.
- Filled in...gaps...between gaps, ensuring a continuous set of options.
- Developer improvements:
  - code coverage monitoring added
  - Storybook cleaned up
  - Documentation (Storybook) deployments to Github, Chromatic added

## 0.5.1

- Added support for extraordinary large text sizes (`6xl`, `7xl`, `8xl`, `9xl`).
- Added `md` typography size, as an alias to the existing `base`.

## 0.5.0

- Initial version suitable for downstream integration.
