# Breeze React

_Primitive React components, built with Tailwind CSS_

[![codecov](https://codecov.io/gh/jszymanowski/breeze/branch/main/graph/badge.svg)](https://codecov.io/gh/jszymanowski/breeze)

**Resources**

- [Changelog](CHANGELOG.md)
- [Roadmap](ROADMAP.md)

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
