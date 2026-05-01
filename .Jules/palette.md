# UX Journal - Finishd Redesign

## Accessibility Insights
- Switched to a high-contrast light mode palette to improve readability for users with low vision.
- Maintained a 60% opacity for secondary text to ensure sufficient contrast while distinguishing it from primary headings.
- Interactive elements (buttons, links) use the brand's vibrant green with clear focus states (`focus-visible:ring-vibrant-green`).

## Design Patterns
- **Light Mode Glassmorphism**: Used `bg-white/40` with `backdrop-blur(20px)` for cards to create a sense of depth on light backgrounds without losing legibility.
- **Color Blocking**: Utilized `deep-black` for high-impact structural elements (like footer buttons or app frames) to ground the otherwise light interface.
- **Mesh Gradients**: Subtle radial gradients (`rgba(45, 214, 14, 0.08)`) provide a modern, energetic feel without being distracting.

## Recent Updates
- **Modal Consistency**: Modals now feature a solid header and a white content area for maximum readability, avoiding the "ghostly" look of high transparency.
- **Shared Footer**: Standardized the footer across the main landing page and all modals to ensure consistent navigation and legal link access.
- **Enhanced Contrast**: Improved visibility of trailer titles and footer text by shifting from dark-on-dark to light-on-dark or higher-contrast variants.

## Refinement
- **Footer Depth**: Transitioned the footer from a solid black to a subtle gradient (`from-[#18181F] to-[#121217]`) to reduce the "black brick" appearance while maintaining a premium dark feel.

## Contrast Fixes (May 2026)
- Standardized FAQ text to use `text-deep-black` (#0B0B0F) for maximum readability on white backgrounds.
- Implemented a dynamic header class in `src/App.jsx` to toggle between light/dark text based on page scroll and route, preventing white-on-white text in the top navigation.
- Audit of legal and help pages revealed pervasive `text-white` usage on `bg-surface` (#FFFFFF); shifted all primary and secondary text to the dark palette.
