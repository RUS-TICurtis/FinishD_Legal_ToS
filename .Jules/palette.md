# UX Journal - Finishd Redesign

## Accessibility Insights
- Switched to a high-contrast light mode palette to improve readability for users with low vision.
- Maintained a 60% opacity for secondary text to ensure sufficient contrast while distinguishing it from primary headings.
- Interactive elements (buttons, links) use the brand's vibrant green with clear focus states (`focus-visible:ring-vibrant-green`).

## Design Patterns
- **Light Mode Glassmorphism**: Used `bg-white/40` with `backdrop-blur(20px)` for cards to create a sense of depth on light backgrounds without losing legibility.
- **Color Blocking**: Utilized `deep-black` for high-impact structural elements (like footer buttons or app frames) to ground the otherwise light interface.
- **Mesh Gradients**: Subtle radial gradients (`rgba(45, 214, 14, 0.08)`) provide a modern, energetic feel without being distracting.
