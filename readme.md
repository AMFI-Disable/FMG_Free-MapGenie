# 🧩 FMG - Free [Mapgenie](https://mapgenie.io) PRO

<div align="center">

<img src="./assets/logo.png" alt="FMG Logo" />

<p>🚧 FMG V3 - Work In Progress 🚧</p>

[![Browser: Chrome / Firefox](https://img.shields.io/badge/Browser-Chrome%20%7C%20Firefox-blue.svg?style=flat-square&logo=googlechrome)](https://google.com/chrome)
[![Framework: WXT](https://img.shields.io/badge/Framework-WXT-orange.svg?style=flat-square)](https://wxt.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](license)
[![Privacy: Client-Side Dexie](https://img.shields.io/badge/Privacy-100%25%20Client--Side%20Dexie-purple.svg?style=flat-square)](#about)

</div>

---

## ⚖️ Educational & Fair-Play Disclaimer

> [!CAUTION]
> **IMPORTANT NOTICE & DISCLAIMER**:
> This codebase is provided strictly for educational, research, and personal productivity testing purposes.
> Always comply with target platform terms of service and acceptable use policies.
> The developers and contributors accept no responsibility or liability for account penalties or platform policy violations.

---

## About

FMG (Free Map Genie) is a browser extension that enhances the [Mapgenie.io](https://mapgenie.io) experience by unlocking PRO features for free. Version 3 is a complete rewrite from scratch.

> [!WARNING]
> FMG V3 is actively under development and uses a new data saving approach. Do not clone and use this branch without a backup as there is a possibility of data corruption or loss.

## ✨ Pro Features Unlock State

| Feature               | Unlocked |
| --------------------- | -------- |
| **locations**         | ✔️       |
| **track categories**  | ✔️       |
| **presets**           | ✔️       |
| **notes**             | ✔️       |
| **tarkov quest tool** | ✔️       |
| **pro maps**          | ✔️       |
| **heatmaps**          | ✔️       |
| **guides**            | ✔️       |

## 🚀 What's New In V3 For Developers

### Build System & Development

- **Modern Build System**: Migrated from [Webpack](https://webpack.js.org/) to [WXT](https://wxt.dev/)
  - WXT is specifically designed for web extensions, making development and building much cleaner
- **End-to-End Testing**: Integrated [Playwright](https://playwright.dev/) for comprehensive E2E testing

### Architecture Improvements

- **Enhanced Request Interceptor**: New [request interceptor](./src/common/axios/interceptor.ts) using [Axios Interceptors](https://axios-http.com/docs/interceptors)
- **Modern Messaging System**: Complete rewrite of the [messaging system](./src/common/messaging/) with type safety and memoization
  - Organized into [services](./src/services) for better grouping of functionality
  - Each service has a `use` and `provide` method.
  - Services behave like normal JavaScript objects, with automatic conversion to invoke requests

### Backend Simulation

- **Simulated Backend**: FMG now includes a backend simulation for cleaner page scripts
  - Page scripts only forward API requests to the backend
  - Page scripts are no longer responsible for data saving

### Database & Storage

- **Modern Database**: Switched to [Dexie](https://dexie.org/) using IndexedDB under the hood
  - More similar to traditional backend databases
  - Comes with a challenge we need to migrate legacy localStorage data to our new dexie database
- **Client**: New [Client class](./src/common/client.ts) automatically intercepts and forwards requests
  - Handles locations, categories, presets, and notes automatically
  - Cleaner map and guide scripts

## 📁 Project Structure

```text
├── src/
│   ├── common/          # Shared utilities and modules
│   │   ├── axios/       # Axios related utils and interceptor
│   │   └── messaging/   # Type-safe messaging system
│   ├── contexts/        # Extension contexts (background, content, popup)
│   ├── services/        # Services using the message system
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper utilities
│   └── assets/          # Static assets
├── modules/             # Wxt modules
├── icons/               # icons for fmg-icon font
├── e2e/                 # End-to-end tests
└── public/              # Public assets
```

---

## 📄 License And Terms

Licensed under the [MIT License](license). Copyright (c) 2026 AMFI-Disable.

---

<p align="center">
    Made with ❤️ by <a href="https://github.com/V1P3R-FMG">V1P3R</a>
</p>
