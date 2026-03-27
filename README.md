*Read this in [English](README.md) | [简体中文](README_zh.md)*

# Muzzle - Modern Astro Landing Page

Muzzle is a high-performance, design-forward landing page built with **Astro**. It is designed to showcase enterprise-grade automation and "Open Claw" (data scraping) services with a striking, modern aesthetic.

## 🚀 Built With

- **Astro**: Ultra-fast static site generation.
- **Vanilla CSS**: Clean, dependency-free styling utilizing CSS variables and modern layout techniques (`flex`, `grid`).
- **IntersectionObserver**: For buttery-smooth, lightweight scroll animations without heavy JS libraries.

## ✨ Key Features

- **"Island" Layout Architecture**: Padded, floating content sections that create a premium, depth-rich visual experience.
- **Ultra-Responsive**: Meticulously optimized for all screen sizes, including aggressive padding reduction for narrow devices (e.g., iPhone 13).
- **Internationalization (i18n)**: Full support for Chinese (zh) and English (en) languages with:
  - Type-safe translation system using TypeScript
  - Language switcher component in navbar
  - SEO-friendly routing (`/` for Chinese, `/en/` for English)
  - Dynamic `html lang` attribute based on current locale
- **Comprehensive Sections**:
  - Hero with CTA & Social Proof
  - Grid-based Features with Iconography
  - Interactive "How It Works" Tabs
  - Featured Testimonials
  - Scalable Pricing Tiers
  - FAQ Accordions

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Neonity2020/muzzle.git
   cd muzzle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # To expose to your local network for mobile testing:
   # npm run dev -- --host
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🌐 Internationalization (i18n)

The project supports Chinese and English languages through a custom i18n system:

### Translation Structure
```
src/i18n/
├── types.ts    # TypeScript type definitions
├── zh.ts       # Chinese translations
├── en.ts       # English translations
└── index.ts    # Translation utilities
```

### Adding/Modifying Translations

1. Edit translation files in `src/i18n/zh.ts` or `src/i18n/en.ts`
2. Update `src/i18n/types.ts` if adding new translation keys
3. Components automatically use translations based on URL path

### Language Routes
- Chinese (default): `/` or `http://localhost:3000/`
- English: `/en/` or `http://localhost:3000/en/`

### Adding a New Language

1. Create `src/i18n/[locale].ts` with translations
2. Add locale to type definitions
3. Create `src/pages/[locale]/index.astro` route
4. Update LanguageSwitcher component with new locale option

## 🎨 Claude Code Skill Included
This repository includes a reusable Claude Code Skill document (`.agent/skills/build_landing_page/SKILL.md`) that details the exact prompts and design architecture used to build this project—allowing AI models to replicate this aesthetic on demand.
