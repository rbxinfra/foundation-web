# FoundationWeb

FoundationWeb (`Roblox/foundation-web`, formerly known as `Portal`) is Roblox's Tailwind CSS-based UI library for web, wrapping and restyling Radix UI primitives with Roblox's design system. It's owned by Creator Resources Foundation.

## Packages

### @rbx/foundation-tailwind

Roblox Foundation design tokens and utilities for Tailwind CSS.

`@rbx/foundation-tailwind` is a Tailwind CSS v3 preset that maps Foundation design tokens to semantic utilities for layout, color, typography, spacing, borders, responsive breakpoints, and icons. It also includes generated TypeScript class-name unions for code that builds class names dynamically.

#### Installation

```bash
pnpm add @rbx/foundation-tailwind tailwindcss
```

See [packages/foundation-tailwind/README.md](./packages/foundation-tailwind/README.md) for the full setup guide, feature list, and API reference.

### @rbx/foundation-ui

Roblox Foundation React UI framework.

`@rbx/foundation-ui` is the React component library for web, built on Radix UI and styled with Foundation design tokens and the utilities from `@rbx/foundation-tailwind`.

> **Notice:** This documentation came from a tree-shaken source and may not include all available components.

#### Installation

```bash
pnpm add @rbx/foundation-ui @rbx/foundation-tailwind tailwindcss react
```

See [packages/foundation-ui/README.md](./packages/foundation-ui/README.md) for component usage, accessibility guidance, and package-specific conventions.

## Key Links

- **Repo:** `github.rbx.com/Roblox/foundation-web`
- **CODEOWNERS:** `github.rbx.com/Roblox/foundation-web/blob/master/CODEOWNERS`
- **Jira:** [FNDN](https://roblox.atlassian.net/browse/FNDN), [CREATOR](https://roblox.atlassian.net/browse/CREATOR)
- **Confluence:** [Creator Success](https://roblox.atlassian.net/wiki/display/CREATORSUCCESS)
- **Figma:**
  - [Foundation Design Kit](https://www.figma.com/design/vy6X3AU6LqxIhdQGoMPOh7/Foundation-Design-Kit)
  - [Foundation Design Tokens](https://www.figma.com/design/17pK8lmQyCS3R01dMIXIR9/Foundation-Design-Tokens-Extended)

## Getting Started

```bash
git clone github.rbx.com/Roblox/foundation-web
cd foundation-web
pnpm install
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch naming, commit format, and the PR workflow.

## Scripts

```bash
pnpm build         # build all packages
pnpm build:clean   # remove all packages' dist/
pnpm lint          # lint all packages
pnpm test          # test all packages
pnpm changeset     # record a change for release notes/versioning
```

## Workspace structure

- [packages/foundation-tailwind](./packages/foundation-tailwind) — Tailwind preset, generated CSS, typed class definitions, and build scripts.
- [packages/foundation-ui](./packages/foundation-ui) — React component library built on Radix UI and Foundation design tokens.
- [scripts](./scripts) — repository tooling and validation helpers.

## Development

The repository uses pnpm workspaces. To work on the packages locally:

```bash
pnpm install
pnpm --filter @rbx/foundation-tailwind build
pnpm --filter @rbx/foundation-ui build
```

Each package README includes the package-specific build commands and usage examples.
