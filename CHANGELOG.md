# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-06-16

### Added
- **Framer Motion Integration**: Installed `framer-motion` to implement smooth, hardware-accelerated scroll reveals, entry transitions, card hovering, and floating navigation pills.
- **Glassmorphism CSS Theme**: Redefined core styling variables (`src/index.css`) with premium dark/neon custom property colors, floating indicators, and responsive glass blur grids.
- **New Project Cards**: Added custom showcases for:
  - **Interconnecter** (Student Networking Platform)
  - **Alpha-Pay** (Distributed Digital Wallet System)
  - **Chitrakosh** (Movie Database SPA)
  - **VoxPulse** (Python Wake Word Detection)
- **High-Fidelity AI Previews**: Added premium visual mockups for all project showcase components under `src/assets`.
- **Dedicated Footer**: Structured a clean `Footer.jsx` component to hold copyright details and unified social pills.

### Changed
- **Migration to Vite**: Booted out `react-scripts` and migrated the build environment to Vite 8 for fast HMR (Hot Module Replacement) and optimized output.
- **Vite Config File**: Added `vite.config.js` and moved `index.html` to the project root directory.
- **Folder Correction**: Renamed `src/assests` typo folder to `src/assets` and updated all asset paths.
- **React 18 Upgrade**: Converted application entry point to `src/index.jsx` and updated DOM rendering logic to use `createRoot`.
- **Form Layout**: Redesigned contact input fields using glowing focus indicators and custom outline borders.

---

## [1.0.0] - 2026-06-15

### Added
- Initial release of the portfolio built with Create React App.
- Core component layout: Header, Nav, About, Skills, Projects, Contact, and Footer.
- Integrations with EmailJS for submitting messages directly from the page contact card.
- Basic responsive styles for desktop, tablets, and smartphones.
