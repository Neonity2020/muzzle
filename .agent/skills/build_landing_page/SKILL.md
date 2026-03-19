---
name: Build Modern Astro Landing Page
description: A comprehensive skill for generating high-conversion, responsive, and animated landing pages using Astro and pure CSS.
---

# Build Modern Astro Landing Page

This skill provides the comprehensive best practices, design constraints, and implementation steps for building a premium modern landing page using the Astro framework.

## 1. Project Initialization & Philosophy
- **Framework**: Use Astro to generate ultra-fast, static landing pages.
- **Styling**: Use pure CSS (Vanilla CSS) with CSS Variables for theme management, instead of Tailwind, to ensure highly readable and customizable component-level styles.
- **Aesthetic**: Aim for "Mizu-theme" or "Linear-like" aesthetics: deep contrasts, subtle borders (`rgba(0,0,0,0.08)`), heavy drop shadows for hover states, and smooth micro-interactions.

## 2. Global CSS & Layout Architecture
Every landing page needs a robust foundation in `src/layouts/Layout.astro`.
- **CSS Variables**: Define `--primary`, `--white`, `--black`, `--gray-50` to `--gray-900`, `--radius-md`, `--radius-lg`, `--radius-xl`.
- **Typography**: Inter or system fonts.
- **Containers**: 
  - `.container`: Limits max-width (e.g., `1200px`) and centers content horizontally.
  - `.island`: A signature design pattern representing floating, rounded sections with their own background color, completely detached from the screen edges on desktop, but elegantly adapting to mobile.

### Mobile Optimization Rule
Always meticulously refine `.island` and `.container` horizontal paddings on smaller screens.
```css
  /* Example of tight responsive constraints */
  @media (max-width: 768px) {
    .container { padding: 0 12px; }
    .island { padding: 32px 12px; }
    .card { padding: 20px; }
  }
```

## 3. Standard Component Suite
Implement the following standard Astro components in `src/components/`, ensuring each has its own `<style>` block and responsive logic:
1. **Navbar**: Fixed header with blur effect (`backdrop-filter: blur()`).
2. **Hero**: High-impact H1, subtitle, dual CTA buttons, and social proof (avatars + stars).
3. **Features**: Grid layout (e.g., `repeat(2, 1fr)` turning to `1fr` on mobile), icon wraps with tailored background/foreground colors.
4. **How It Works**: Interactive tabbed panels or step-by-step visual breakdowns.
5. **Testimonials**: Marquee or masonry grid of user cards. Prioritize "Featured" cards spanning multiple columns.
6. **Pricing**: Clear tiers with scaling effects (`transform: scale(1.05)`) for the recommended tier.
7. **FAQ**: Accordion or grid list of questions.
8. **CTA / Footer**: Final push to action inside a vibrant, gradient-heavy `.island`.

## 4. Animation & Interactivity
- Never use heavy JS frameworks for scroll animations.
- Use `IntersectionObserver` paired with CSS transitions.
```javascript
  // Standard pattern for fade-up on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```
- **CSS setup**:
```css
  [data-animate] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease var(--delay, 0ms), transform 0.5s ease var(--delay, 0ms);
  }
  [data-animate].visible {
    opacity: 1;
    transform: translateY(0);
  }
```

## 5. Execution Steps for Claude
When instructed to build a landing page using this skill:
1. Set up the base `Layout.astro` and global CSS tokens.
2. Analyze the user's business context and rewrite/tailor the copy.
3. Scaffold individual components sequentially.
4. Integrate `IntersectionObserver` in each component for scroll reveals.
5. Perform an intense mobile-responsiveness pass, assuring that padded outer containers do not aggressively squash nested grid elements on devices with `375px` or `390px` width.
