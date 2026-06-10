# Blog

A personal blog built with Astro and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

The workflow publishes to your GitHub Pages origin:

```yaml
SITE_URL: https://Starshone-shiyin.github.io
```

The default `BASE_PATH` is `/Blog`, matching a repository named `Blog`.
