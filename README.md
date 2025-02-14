x


# Client Handoff Checklist

## Building for Production
1. Install dependencies: `pnpm install`
2. Build the app: `pnpm build`
3. Upload contents of `dist` folder to WordPress

- [ ] Build for Production WP

## Before Handoff
- [ ] Remove all test API keys and payment links
- [ ] Update configuration template with client's pricing structure
- [ ] Test build process works with `pnpm build`
- [ ] Verify all links are configurable
- [ ] Remove any development-only code
- [ ] Update README with client-specific information
- [ ] Create production build to verify everything works
- [ ] Document WordPress embedding instructions

## Client Requirements
- [ ] Client's Stripe account access
- [ ] Client's WordPress admin access
- [ ] Confirmation of pricing structure
- [ ] Confirmation of plan features
- [ ] Client's preferred URLs for success/cancel pages
- [ ] Client's branding requirements (colors, fonts, etc.)

## Handoff Package
- [ ] Source code (cleaned and documented)
- [ ] Built files ready for WordPress
- [ ] README.md with setup instructions
- [ ] Configuration template
- [ ] Support contact information

## Post-Handoff
- [ ] Schedule walkthrough with client
- [ ] Document any specific customizations
- [ ] Remove any sensitive data from development environment


# Boilerplate - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
