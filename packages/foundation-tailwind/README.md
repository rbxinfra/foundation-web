# @rbx/foundation-tailwind

Roblox Foundation design tokens and utilities for Tailwind CSS.

`@rbx/foundation-tailwind` is a Tailwind CSS v3 preset that maps Foundation design tokens to semantic utilities for layout, color, typography, spacing, borders, responsive breakpoints, and icons. It also provides TypeScript class-name unions for components and other code that builds class names dynamically.

This package is part of a pnpm workspace.

`@rbx/foundation-ui` builds on this package for React components. Applications using Foundation UI should configure this preset, import `@rbx/foundation-ui/style` once from the application's global entrypoint, and load this package's CSS before Tailwind's base layer. See [`@rbx/foundation-ui`](../foundation-ui) for the component API.

## Installation

```bash
pnpm add @rbx/foundation-tailwind tailwindcss
```

`tailwindcss` is a required peer dependency.

## Usage

### 1. Add the preset to Tailwind

Import the preset in `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import foundationPreset from "@rbx/foundation-tailwind/preset";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@rbx/foundation-ui/dist/**/*.{js,jsx}",
  ],
  presets: [foundationPreset],
};

export default config;
```

When using `@rbx/foundation-ui`, include its distribution in `content` so Tailwind's JIT compiler emits the Foundation utility classes used internally by the components.

The preset uses the system color scheme for dark mode (`darkMode: 'media'`) and does not enable Tailwind preflight. Add any project-specific presets or configuration alongside it as needed.

### 2. Load Foundation CSS before Tailwind base

Import the package CSS at the top of the application's stylesheet, before Tailwind's base layer:

```css
@import "@rbx/foundation-tailwind/css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

This provides the generated Foundation token variables, light and system-dark theme values, and the base styles required by icon utilities. Tailwind generates the semantic utility rules from the preset. The CSS follows `prefers-color-scheme` for color mode.

When using `@rbx/foundation-ui`, import its standalone component stylesheet once from the application's global entrypoint, such as Next.js `pages/_app.tsx`:

```tsx
// Without this global import, components are missing elevation, stacking, and theme variables.
import "@rbx/foundation-ui/style";
```

### 3. Use semantic Foundation utilities

```tsx
export function Example() {
  return (
    <section className="bg-surface-0 content-default padding-medium radius-medium">
      <h1 className="text-heading-large">Foundation</h1>
      <div className="display-flex gap-small">
        <span className="icon-regular-check" aria-hidden="true" />
        <span className="text-body-medium">Ready to build.</span>
      </div>
    </section>
  );
}
```

Foundation utilities intentionally use full property names such as `padding-medium`, `width-1000`, and `margin-small` instead of Tailwind's shorthand forms. This avoids conflicts with existing Tailwind classes. The preset also replaces or disables several conflicting core utilities, including `text-*` color, `border-*`, `overflow-*`, and `border-radius` utilities.

## API

### Preset

| Export                                           | Description                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `default` from `@rbx/foundation-tailwind/preset` | Tailwind preset containing Foundation theme values, core-plugin configuration, and custom utility plugins. |

### CSS entrypoint

| Import                         | Description                                                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `@rbx/foundation-tailwind/css` | Generated CSS containing token variables, light and system-dark color-mode values, and icon base styles. |

### Utility groups

| Group                  | Examples                                                         | Description                                                                                         |
| ---------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Colors                 | `content-default`, `bg-surface-100`, `border-emphasis`           | Semantic foreground, background, and border colors.                                                 |
| Responsive breakpoints | `small:`, `medium:`, `large:`, `xlarge:`                         | Breakpoints based on Foundation values: 361px, 601px, 1141px, and 1521px.                           |
| Spacing                | `gap-medium`, `padding-small`, `margin-large`                    | Foundation spacing values. `gap-x-*` and `gap-y-*` are also available.                              |
| Size                   | `width-1000`, `height-600`, `max-width-full`                     | Foundation size values and intrinsic size values such as `auto`, `full`, `min`, `max`, and `fit`.   |
| Aspect ratio           | `aspect-1-1`, `aspect-16-9`, `aspect-4-3`                        | Foundation aspect-ratio utilities.                                                                  |
| Borders                | `stroke-standard`, `stroke-thin`, `radius-medium`                | Border width/style and radius utilities. `stroke-*` can also be combined with a border color value. |
| Text                   | `text-body-medium`, `text-heading-large`, `text-align-x-center`  | Foundation typography, horizontal text alignment, and vertical alignment.                           |
| Layout and overflow    | `wrap`, `no-wrap`, `clip`, `scroll-x`                            | Custom flex-wrap and overflow utilities.                                                            |
| Text truncation        | `text-truncate-end`, `text-truncate-split`, `text-truncate-none` | Text overflow behavior utilities.                                                                   |
| Icons                  | `icon-regular-check`, `icon-filled-check`                        | Generated regular and filled Foundation icon utilities.                                             |

The preset does not provide Tailwind's preflight or unrelated core utilities disabled by the package configuration. Continue to enable or implement project-specific behavior in your own Tailwind configuration when required.

### TypeScript class types

Import the generated types from the `/classes` subpath:

```ts
import type {
  TTailwindBgClass,
  TTailwindContentClass,
  TTailwindIconClass,
  TTailwindClass,
} from "@rbx/foundation-tailwind/classes";

export type BadgeClassName = TTailwindBgClass | TTailwindContentClass;

export function renderIcon(
  name: TTailwindIconClass,
  className: TTailwindClass = "",
) {
  return `<span class="icon ${name} ${className}" aria-hidden="true"></span>`;
}
```

`TTailwindClass` is the union of all generated Foundation class types. More focused unions are available for aspect ratio, background, content, gap, height, icons, padding, radius, size, stroke, typography, and width classes.

## Development

Build commands run from this package directory:

```bash
pnpm build          # regenerate icons and typography, build types, JS, and CSS
pnpm build:dev      # build types, JS, and CSS for development
pnpm build:icons    # regenerate icon utilities and icon class types
pnpm build:typography # regenerate typography utilities and typography class types
pnpm build:types    # emit TypeScript declarations
pnpm build:js       # build the preset bundle
pnpm build:css      # build dist/css/index.css
pnpm build:clean    # remove dist/
```

Generated icon and typography sources are derived from the files in `icons/` and `tokens/`. Do not edit generated files directly; use the corresponding build command instead.
