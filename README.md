# Tokenize App Test

## Code's structure
```
project
│   README.md (document)
│   react-native.config.js (fonts configuration)
│   .env (environment variables)
└───android (native android)
└───ios (native ios)
└───assest (fonts and images resources)
│   └───fonts
│   └───images
└───src
    └───components
        └───atoms (common generic components can be reused)
            │   BottomIcon
            │   Input
            │   ...
        └───molecules (components that combine atom components)
            │   CurrencyItem
            │   MarketButton
            │   ...
        └───template (higher order components for wrapping components inside a template)
            │   SafeScreen
    └───constants (use for storing constants)
        │   imagePath.ts
        │   storageKey.ts
    └───navigators (handling app navigation)
        │   Application.tsx (Main route)
        │   AppTabNavigation.tsx (Tab Navigation)
    └───screens (all screens)
        │   Home
        │   Login
        │   ...
    └───services (API services)
        │   auth
        │   markets
        │   instance.ts (default instance to make API calls)
    └───stores (App global state management)
        │   slices
        │   hooks.ts (common hooks to interact with global state)
        │   store.ts
    └───themes 
        │   index.ts (configuration for theme object)
    └───translations (App global state management)
        │   index.ts (configuration for app localization with i18n)
        │   [language] (defined localization strings)
    └───types (Define typescript interfaces and types)
        │   ...
    └───utilities (Define utility function to use in App)
        │   ...
    App.tsx
```

## 👉 Techstack

- **Framework:** React Native (CLI) using Typescript, Functional Components.
- **UI:** [react-native-elements](https://reactnativeelements.com/), `Roboto` fonts.
- **State management:** [redux-toolkit](https://redux-toolkit.js.org/).
- **Form Validation:** [react-hook-form](https://react-hook-form.com/) with [yup](https://www.npmjs.com/package/yup).
- **Storage:** [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv).
- **HTTP client:** [ky](https://github.com/sindresorhus/ky) with [zod](https://zod.dev/) for schema validation.
- **Localization:** [i18next](https://www.i18next.com/).


