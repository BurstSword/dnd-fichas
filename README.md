# DnD Fichas (Ionic + Angular + Firebase)

## Requisitos
- Node.js 18+ (recomendado LTS)
- Ionic CLI (`npm i -g @ionic/cli`)
- Cuenta y proyecto de Firebase

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run start
```

## Build
```bash
npm run build
```

## Firebase
La configuración de Firebase vive en:
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`
- `src/environments/firebaseconfig.ts`

Asegúrate de colocar ahí tus credenciales de Firebase antes de ejecutar la app.

## Estructura de carpetas
```
src/app
├── core
│   └── services
├── shared
│   ├── data
│   ├── models
│   └── utils
└── features
    ├── characters
    ├── combat
    └── dices
```

### Descripción rápida
- **core**: servicios globales (Firebase, data orchestration).
- **shared**: modelos, utilidades y data reutilizable.
- **features**: módulos por funcionalidad (personajes, combate, dados).

## Deployment (Capacitor)
```bash
ionic build
npx cap sync
```

## Notas
- El comportamiento actual se mantiene; los cambios son principalmente estructurales y de calidad.
- Si agregas nuevas colecciones de Firestore, centraliza el acceso en `core/services`.
