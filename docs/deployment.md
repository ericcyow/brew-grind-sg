# Deployment

Workflow structure checked against the official documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## GitHub Pages

The GitHub integration was declined for this request, so these steps run under
your own GitHub account. No repository has been created remotely.

1. Create an empty GitHub repository named `brew-grind-sg`.
2. Push the project to its `main` branch. Do not upload `node_modules` or `dist`.
3. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
4. The included `deploy-pages.yml` workflow installs locked dependencies, builds,
   checks React interactions and the hosting contract, and publishes `dist/client`.
5. Open the deployment URL reported by the workflow. Verify navigation, filters,
   images and external links on desktop and mobile.

For a public repository, the default URL is
`https://YOUR_ACCOUNT.github.io/brew-grind-sg/`. Hosting eligibility for private
repositories depends on your GitHub plan.

Vite uses `base: './'`; images use `import.meta.env.BASE_URL`. This prevents broken
paths when the site lives below a repository subpath. There are no client routes
requiring a server rewrite.

## Netlify

Import your repository, or build locally and upload the contents of `dist/client`
to a manual static deployment. `netlify.toml` sets the build command and publish
directory. Account authentication and public publishing happen in your account.

## Other static hosts

Run `npm ci` and `npm run build`, then publish `dist/client`. A host needs only
static-file serving. Keep hashed assets and their relative paths intact.

## Domain and search metadata

When the final domain is known, add a canonical URL and absolute `og:url`/`og:image`
metadata to `index.html`. Configure the domain in the hosting account and retain
HTTPS. No domain name or hosting account is assumed by this project.

Before public launch, complete the pending visual QA, confirm the final wordmark
and product images with the business, and verify any new prices/hours before adding
them. The current site makes no opening-hours or pricing assertions.
