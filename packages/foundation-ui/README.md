# @rbx/foundation-ui

Roblox Foundation React UI framework.

`@rbx/foundation-ui` is Roblox's React component library for web. It provides accessible, composable components built on [Radix UI](https://www.radix-ui.com/primitives), styled with Foundation design tokens and the utilities from [`@rbx/foundation-tailwind`](../foundation-tailwind).

This package is part of a pnpm workspace.

> **Notice:** This documentation came from a tree-shaken source and may not include all available components.

## Installation

```bash
pnpm add @rbx/foundation-ui @rbx/foundation-tailwind tailwindcss react
```

`react` and `@rbx/foundation-tailwind` are required peer dependencies. `tailwindcss` is also required by the Foundation Tailwind preset.

## Usage

### 1. Configure Tailwind

Add the Foundation preset to `tailwind.config.ts`:

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

The `foundation-ui` distribution contains the Foundation utility classes used by its components. Include it in `content` so Tailwind's JIT compiler emits those classes in the application stylesheet.

### 2. Import Foundation UI styles globally

Foundation UI ships its component CSS as a standalone stylesheet rather than injecting it at import time. Import it once from the application's global entrypoint, such as Next.js `pages/_app.tsx`:

```tsx
// Without this global import, components are missing elevation, stacking, and theme variables.
import "@rbx/foundation-ui/style";
```

### 3. Load Foundation Tailwind styles

Import the Tailwind package CSS at the top of the application's global stylesheet, before Tailwind's base layer. It provides the Foundation design-token variables and generated utilities:

```css
@import "@rbx/foundation-tailwind/css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Compose components

Components use a compositional API and expose typed props for Foundation variants, sizes, states, and accessibility labels:

```tsx
import { Button, Card, TextInput } from "@rbx/foundation-ui";

export function SignInForm() {
  return (
    <Card>
      <form className="flex flex-col gap-medium">
        <TextInput label="Email" size="Medium" />
        <TextInput label="Password" type="password" size="Medium" />
        <Button type="submit" variant="Emphasis" size="Large">
          Sign in
        </Button>
      </form>
    </Card>
  );
}
```

Most components accept `className` for local composition. Components that render overlays, including dialogs, sheets, menus, popovers, and tooltips, manage their own Radix portal and focus behavior.

## API

### Components

All components and their TypeScript props are exported from `@rbx/foundation-ui`.

| Category                 | Components                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Layout and surface       | `Card`, `Divider`, `Media`, `Sheet`                                                                                    |
| Actions                  | `Button`, `IconButton`, `Link`, `Toggle`                                                                               |
| Inputs                   | `TextInput`, `TextArea`, `Autocomplete`, `Checkbox`, `DateTimePicker`, `Dropdown`, `Radio`, `SearchInput`, `Slider`    |
| Selection and navigation | `Accordion`, `Menu`, `OptionSelector`, `SegmentedControl`, `Stepper`, `Table`, `Tabs`                                  |
| Feedback and status      | `Alert`, `FeedbackBanner`, `Notification`, `ProgressBar`, `Skeleton`, `StatusBadge`, `StatusIndicator`, `SystemBanner` |
| Data display             | `Avatar`, `Badge`, `Chip`, `CollectionCarousel`, `ListItem`, `ListItemAccessories`, `Timeline`                         |
| Overlay and help         | `Dialog`, `EducationalTooltip`, `Popover`, `Tooltip`, `VisuallyHidden`                                                 |
| Icons                    | `Icon`                                                                                                                 |

Components with multiple parts follow a namespaced composition pattern. For example, an accordion uses `Accordion`, `AccordionItem`, `AccordionItemTrigger`, and `AccordionItemContent`; a sheet uses `SheetRoot`, `SheetTrigger`, `SheetContent`, `SheetTitle`, `SheetBody`, and `SheetActions`.

### Utilities

| Export                     | Description                                                                    |
| -------------------------- | ------------------------------------------------------------------------------ |
| `useInverseThemeClass`     | Returns the class needed to render content with the inverse Foundation theme.  |
| `clsx`                     | Re-export of `clsx` for composing conditional class names.                     |
| `useId`                    | Generates stable IDs for component relationships and accessibility attributes. |
| `dateUtils`, `localeUtils` | Date and locale helpers used by Foundation input components.                   |
| `VisuallyHidden`           | Visually hides content while keeping it available to assistive technology.     |

### Theme modes

The generated styles use the system color scheme by default. Applications can opt into an explicit mode by adding `light-theme`, `dark-theme`, or `system-theme` to an ancestor element:

```tsx
import type { ReactNode } from "react";

export function ThemeRoot({ children }: { children: ReactNode }) {
  return <div className="dark-theme">{children}</div>;
}
```

### Accessibility

Provide accessible names for interactive controls and meaningful labels for close affordances. Use `DialogTitle` and `DialogDescription` with dialogs, `ariaLabel` for icon-only controls, and `SheetDescription` for sheet content where applicable. Foundation components preserve the accessibility behavior provided by their Radix primitives.

## Development

Build commands run from this package directory:

```bash
pnpm build       # build TypeScript declarations and the JS bundles
pnpm build:dev   # build without production minification
pnpm build:types # emit TypeScript declarations
pnpm build:js    # build ESM and CommonJS bundles plus style.css
pnpm lint        # lint src/
pnpm test        # run Jest tests
pnpm build:clean # remove dist/
```

Component styles are bundled into `dist/style.css`. Do not edit generated files in `dist`; update the source component or CSS files and rebuild the package.
