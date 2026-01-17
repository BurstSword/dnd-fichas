# Angular Web Client (DnD Fichas)

This folder contains a standalone Angular web version of the Ionic app. The goal is to keep the same core features and Firebase data model while providing a clean, scalable web architecture.

## Requirements
- Node.js 18+ (recommended LTS)
- Firebase project (Firestore + Auth + Storage)

## Installation
```bash
cd angular-web
npm install
```

## Firebase Configuration
Update the environment files with your Firebase credentials:
- `src/environments/environment.ts`
- `src/environments/environment.development.ts`

## Run locally
```bash
npm start
```

## Project Structure
```
src/app
├── core
│   └── services       # Firebase, auth, storage
├── shared
│   ├── data           # static data like spell library
│   ├── models         # domain models (Character, CombatEntity)
│   ├── ui             # reusable UI like toast
│   └── utils          # pure utilities
└── features
    ├── characters     # pages + services
    ├── combat         # pages + services
    └── dices          # dice roller
```

## Routes
- `/characters` list and management
- `/characters/new` create
- `/characters/:id` view
- `/characters/:id/edit` edit
- `/combat` combat manager
- `/dices` dice roller

## Notes
- Firestore listeners remain real-time via `collectionData` streams.
- Toasts are handled through a shared `ToastService` for consistent feedback.
- Offline support is provided by Firestore caching. Configure persistence if needed.
