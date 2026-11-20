# AuraFizz website

A responsive React + Vite storefront concept for AuraFizz.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Push this folder to a GitHub repository.
2. In `vite.config.js`, set `base` to `"/YOUR-REPOSITORY-NAME/"` (or set the `BASE_PATH` environment variable in the workflow).
3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the deployment source.
4. Add the workflow below as `.github/workflows/deploy.yml`.
5. Push to the `main` branch.

The included workflow builds the site and publishes `dist/` using GitHub Pages.

## Product data to verify before launch
The 250 ml can and 20 g protein are supplied as the current product direction. Treat the 20 g quantity as provisional until the final formulation and nutrition panel are verified. Prices, stock, ingredients, nutrition facts, contact details and payment processing are placeholders.

## Commerce limitations
The cart is a working frontend demo and persists in local storage. It does not accept real payments or create orders. Connect a trusted commerce backend/payment provider before taking orders.
