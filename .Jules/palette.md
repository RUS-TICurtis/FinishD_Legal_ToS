## 2026-04-28 - [Modal & Form Accessibility Overhaul]
**Learning:** Modern dark-mode interfaces often omit clear focus indicators for a "clean" look, which severely hinders keyboard accessibility. Additionally, custom-built modals often lack the necessary ARIA attributes to be identified as dialogs by screen readers.
**Action:** Always ensure interactive elements have `focus-visible:ring-2` (using the theme's primary/accent color) and that modals use `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
>>>>>>> REPLACE
