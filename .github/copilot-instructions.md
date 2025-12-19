# Copilot Instructions for Next Pizza App

## Project Overview
This is a Next.js 16 application using the App Router, built for a pizza ordering system. The app is primarily in Russian, with UI components from shadcn/ui and Tailwind CSS v4 for styling.

## Architecture
- **Framework**: Next.js 16 with App Router (`app/` directory)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Library**: shadcn/ui components in `components/ui/`
- **Utilities**: `lib/utils.ts` provides `cn()` function for merging Tailwind classes
- **Fonts**: Geist Sans and Mono loaded in `app/layout.tsx`

## Key Patterns
- Use shadcn/ui components for consistent UI (e.g., `Button` from `components/ui/button.tsx`)
- Merge classes with `cn()`: `className={cn("base-classes", variantClasses)}`
- Color scheme uses CSS variables (e.g., `--primary`, `--background`) defined in `app/globals.css`
- Components follow variant patterns with `class-variance-authority` (cva)

## Component Structure
- UI components in `components/ui/` (e.g., button.tsx with variants: default, outline, secondary)
- Import path: `@/components/ui/button`
- Use `asChild` prop with Radix Slot for flexible composition

## Styling Conventions
- Tailwind utilities with custom properties: `bg-primary`, `text-foreground`
- Scrollbar custom styles in `globals.css`
- Responsive container with `theme.container` in `tailwind.config.ts`

## Development Workflows
- Start dev server: `npm run dev` (opens on localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint` (uses ESLint config in `eslint.config.mjs`)
- No tests configured yet; add with Jest or similar if needed

## File Organization
- Pages/routes: `app/` (e.g., `page.tsx` for home)
- Shared components: `components/`
- Utilities: `lib/`
- Public assets: `public/`

## Dependencies
- React 19, Next.js 16
- Radix UI for primitives
- Lucide React for icons
- Class Variance Authority for component variants

When adding features, follow shadcn/ui patterns and use existing utilities for consistency.</content>
<parameter name="filePath">/Users/ayaseven/Desktop/next_pizza/.github/copilot-instructions.md