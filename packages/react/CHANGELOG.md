# Changelog

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
