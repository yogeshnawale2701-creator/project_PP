# Nexus3D — Immersive Web Experience

An immersive Next.js 3D web application featuring a stunning cyberpunk hero section, interactive 3D elements, and a modular architecture.

## Features

- **Next.js 16 (App Router)**: Blazing fast server-side rendered application.
- **Immersive 3D Experience (Three.js & React Three Fiber)**: Complex cyberpunk scene with dynamic lighting, glowing geometric shapes, particle fields, and a neon grid floor.
- **Smooth Animations (Framer Motion)**: Page transitions, hover effects, and scroll-triggered parallax.
- **Responsive Design (TailwindCSS v4)**: Fully responsive layouts with glassmorphism UI components.
- **Advanced Camera Rig**: Mouse-reactive 3D camera with scrolling depth parallax effects.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture & Folder Structure

- `src/app/` — Next.js routing, global styles, and layout.
- `src/components/` — Reusable UI and 3D components (e.g., `CyberpunkScene`, `CameraRig`, `AnimatedCard`, `Navbar`).
- `src/sections/` — Main page sections composing the landing page.
- `src/hooks/` — Custom React hooks for animations and interactivity (`useMousePosition`, `useScrollAnimation`).
- `src/styles/` & `src/utils/` — Design tokens, fonts, and animation variants.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/)
