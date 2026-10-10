# Changelog

All notable changes, architectural updates, and release history for FMG (Free Map Genie) are documented in this file.

---

## [3.0.0] - Modern Extension Architecture Rewrite (V3)

### Added

#### Build System And Developer Tooling
- **WXT Framework Migration**: Migrated from Webpack to WXT (Next-Gen Web Extension Framework) for faster compilation and modern HMR.
- **End-To-End Testing**: Integrated Playwright test suites for automated E2E browser extension verification.
- **TypeScript Architecture**: Strict type checking across content scripts, background workers, and service layers.

#### Architecture And Messaging
- **Modern Messaging System**: Type-safe messaging layer organized into reactive service providers.
- **Request Interception**: Enhanced Axios request interceptors to seamlessly handle Mapgenie API traffic.
- **Simulated Backend**: Decoupled page scripts from data persistence by introducing an isolated backend simulation engine.

#### Database And Local Storage
- **Dexie.js IndexedDB Migration**: Replaced legacy localStorage storage with structured IndexedDB schemas via Dexie.js.
- **Client Synchronization**: Automated client state management for custom pins, notes, tracked categories, and custom presets.

#### Feature Capabilities
- **Comprehensive Feature Support**: Support for unlimited locations, track categories, custom presets, notes, heatmaps, guides, Tarkov quest tool, and pro maps.

---

## [2.0.0] - Cross-Browser Extension Engine (V2)

### Added
- **Multi-Browser Support**: Manifest V3 compatibility across Chromium and Firefox browsers.
- **Client-Side Storage**: In-memory caching layer to eliminate network latency during map exploration.
- **Interactive UI Overlays**: Injected HUD widgets to control map tracking directly within game maps.

---

## [1.0.0] - Initial Extension Release (V1)

### Added
- **Initial Core Implementation**: Content script injection unlocking fundamental Mapgenie location tracking.
- **Custom Location Persistence**: Basic persistence for completed quest items and map pins.
