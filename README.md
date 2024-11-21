# Planetary Gallery with Layout Animations

A demonstration application showcasing Layout Animations and Intercepting Routes in Next.js for creating smooth transitions between pages.

## Key Features

- **Layout Animations** - smooth transitions between views
- **Intercepting Routes** - route interception for modal views
- **Parallel Routes** - simultaneous display of multiple pages
- **Shared Layout** - common elements between different views

## Tech Stack

- Next.js 15.0
- Framer Motion for animations
- Zustand for state management
- TypeScript
- Tailwind CSS

## Routing Structure

```
app/
├── page.tsx                    # Main page with planet list
├── layout.tsx                  # Root layout
├── @modal                      # Parallel route for modals
│   ├── default.tsx
│   └── (.)planets
│       └── [name]
│           ├── modal.tsx      # Modal component
│           └── page.tsx       # Intercepted route
└── planets
    └── [name]
        └── page.tsx           # Full-screen planet page
```

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## How It Works

1. **Layout Animations**
   - Uses Framer Motion for transition animations
   - Shared elements between different views
   - Smooth element appearance/disappearance

2. **Intercepting Routes**
   - Intercepts `/planets/[name]` to show modal view
   - Direct navigation to full-screen version available
   - Preserves navigation context

3. **Application State**
   - Animation state management through Zustand
   - Synchronization between modal and full-screen modes
   - Animation timing control

## Production Build

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Development Features

- TypeScript for type safety
- ESLint configuration for code quality
- Tailwind CSS for styling
- Hot reload during development
- Built-in optimization for images and fonts

## Project Structure

- `/app` - Main application pages and components
- `/components` - Reusable React components
- `/hooks` - Custom React hooks
- `/store` - Application state management (Zustand)
- `/types` - TypeScript types and interfaces
- `/constants` - Application constants

## Useful Links

- [Next.js Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [Framer Motion](https://www.framer.com/motion/)
- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

## Requirements

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

## License

MIT
