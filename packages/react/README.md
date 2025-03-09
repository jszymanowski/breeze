# Breeze React

_Primitive React components, built with Tailwind CSS_

[![codecov](https://codecov.io/gh/jszymanowski/breeze/branch/main/graph/badge.svg)](https://codecov.io/gh/jszymanowski/breeze)

**Resources**

- [Github repo](https://github.com/jszymanowski/breeze)
- Distribution
  - [npm registry](https://www.npmjs.com/package/@jszymanowski/breeze-react)
- Building blocks
  - [TailwindCSS](https://tailwindcss.com/docs)
  - [shadcn-ui](https://ui.shadcn.com/docs/)
    - [color themes](https://ui.shadcn.com/colors)
  - [Vite](https://vite.dev/guide/)
  - [Vitest](https://vitest.dev/guide/)
- Documentation via Storybook
  - [Github Pages](https://jszymanowski.github.io/breeze/) - docs only
  - [Chromatic](https://67ccefd8fafa91b1c6c38501-dubbfpsqzi.chromatic.com/) - full suite of stories
- Development
  - [Chromatic builds](https://www.chromatic.com/builds?appId=67ccefd8fafa91b1c6c38501)
  - [CodeCov](https://app.codecov.io/gh/jszymanowski/breeze)
  - [Renovate](https://developer.mend.io/github/jszymanowski/breeze)
- [Changelog](CHANGELOG.md)
- [Roadmap](ROADMAP.md)

---

## Usage

### Installation

When using Vite, Breeze must be included in your primary `.css` file in order to ensure the necessary CSS classes are included in the build. For more details, read the Tailwind CSS documentation on [explicitly registering sources](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).

Example `index.css`:

```css
@import "tailwindcss";
@source "../node_modules/@jszymanowski/breeze-react/dist";

@layer base {
  /* your usual CSS definitions */
}
```

---

### Publishing

Automatic:

```bash
pnpm version patch -m "Release %s"
git push && git push --tags
```

Manual:

```bash
git tag react@0.4.1
git push origin react@0.4.1
```
