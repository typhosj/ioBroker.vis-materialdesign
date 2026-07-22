// Ambient declarations for non-code imports handled by Vite at build time.
// These let `tsc --noEmit` type-check the widget sources without a bundler.

// Side-effect CSS imports (Vite injects the stylesheet).
declare module '*.css';

// Font asset imports resolved to URLs by Vite; imported for side effects only.
declare module '*.woff2';
declare module '*.woff';
