---
name: Build Modern Astro Landing Page
description: A comprehensive skill for generating high-conversion, responsive, animated, and internationalized landing pages using Astro and pure CSS.
---

# Build Modern Astro Landing Page

This skill provides the comprehensive best practices, design constraints, and implementation steps for building a premium modern landing page using the Astro framework with full internationalization (i18n) support.

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
1. **Navbar**: Fixed header with blur effect (`backdrop-filter: blur()`) and language switcher.
2. **Hero**: High-impact H1, subtitle, dual CTA buttons, and social proof (avatars + stars).
3. **Features**: Grid layout (e.g., `repeat(2, 1fr)` turning to `1fr` on mobile), icon wraps with tailored background/foreground colors.
4. **How It Works**: Interactive tabbed panels or step-by-step visual breakdowns.
5. **Testimonials**: Marquee or masonry grid of user cards. Prioritize "Featured" cards spanning multiple columns.
6. **Pricing**: Clear tiers with scaling effects (`transform: scale(1.05)`) for the recommended tier.
7. **FAQ**: Accordion or grid list of questions.
8. **CTA / Footer**: Final push to action inside a vibrant, gradient-heavy `.island`.
9. **LanguageSwitcher**: Dropdown component for toggling between supported languages.

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

## 5. Internationalization (i18n) Implementation

All landing pages built with this skill MUST support internationalization for Chinese (zh) and English (en) languages.

### Translation System Architecture

Create a type-safe translation system in `src/i18n/`:

```
src/i18n/
├── types.ts    # TypeScript interface for all translation keys
├── zh.ts       # Chinese translations (default)
├── en.ts       # English translations
└── index.ts    # Export utilities: getTranslations(), getLocales()
```

### Translation Interface Pattern

Define a comprehensive `Translations` interface in `types.ts` that groups translations by component:

```typescript
export interface Translations {
  navbar: { logo: string; features: string; howItWorks: string; ... };
  hero: { title: string; description: string; cta: string; ... };
  features: { eyebrow: string; title: string; items: Array<...>; ... };
  // ... all other components
}
```

### Component Integration Pattern

Every component MUST follow this pattern:

```astro
---
import { getTranslations } from '../i18n';

// Detect locale from URL path
const path = Astro.url.pathname;
const currentLocale = path.startsWith('/en') ? 'en' : 'zh';
const t = getTranslations(currentLocale);
---

<!-- Use translations in template -->
<h1>{t.hero.title}</h1>
<button>{t.hero.cta}</button>
```

### Language Routing

- **Default (Chinese)**: `/` → `src/pages/index.astro`
- **English**: `/en/` → `src/pages/en/index.astro`

### Layout Integration

Update `Layout.astro` to set dynamic `lang` attribute:

```astro
---
const path = Astro.url.pathname;
const currentLocale = path.startsWith('/en') ? 'en' : 'zh';
---
<html lang={currentLocale}>
```

### Language Switcher Component

Create `src/components/LanguageSwitcher.astro` with:
- Dropdown menu showing available languages
- Current language highlighted
- Links to locale-prefixed paths (e.g., `/` for zh, `/en` for en)
- ARIA attributes for accessibility

### Adding New Languages

1. Create `src/i18n/[locale].ts` with translations matching the `Translations` interface
2. Create `src/pages/[locale]/index.astro`
3. Add locale option to `LanguageSwitcher.astro`
4. Update locale detection logic in components if needed

## 6. Execution Steps for Claude
When instructed to build a landing page using this skill:
1. Set up the i18n system (`src/i18n/` directory with types, zh, en, and index files).
2. Set up the base `Layout.astro` with dynamic `lang` attribute and global CSS tokens.
3. Create `LanguageSwitcher.astro` component for language toggling.
4. Create route structure: `src/pages/index.astro` (default) and `src/pages/en/index.astro`.
5. Analyze the user's business context and rewrite/tailor the copy for both languages.
6. Scaffold individual components sequentially, integrating translations from `t` object.
7. Integrate `IntersectionObserver` in each component for scroll reveals.
8. Perform an intense mobile-responsiveness pass, assuring that padded outer containers do not aggressively squash nested grid elements on devices with `375px` or `390px` width.
