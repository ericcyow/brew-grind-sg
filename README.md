# Brew & Grind SG — Coffee to Craft

A responsive React homepage for Brew & Grind Coffee Bar, Singapore. The selected
design pairs a charcoal-and-amber coffee/beer hero with daytime and evening panels.

## Current status

Implementation and deployment configuration are prepared. See `design-qa.md` for
the current verification status. No remote GitHub repository or public deployment
has been created. Confirm visual QA before publishing the site.

The review archive includes `brew-grind-sg-preview.html` at its top level. Open it
directly in a browser to review the actual production React page without installing
dependencies. It embeds all fonts and images; directions, Instagram and the
delivery menu open their external websites. Browser visual verification remains
pending because this environment could not launch Chromium.

## Develop

Use Node 22 (see `.nvmrc`).

```bash
npm ci
npm run dev
```

The site includes mobile navigation, menu category filters, anchor navigation,
directions, Instagram and a delivery-menu link. Fonts and images are local. There
is no account system, booking service, backend or payment flow.

## Build and check

```bash
npm run build
npm test
npm run test:sites
npm run preview
```

The static output is `dist/client`. The starter also retains Sites-compatible
worker and hosting metadata at `dist/server` and `dist/.openai`.

`npm test` runs four React interaction tests in jsdom. They check category changes,
navigation selection and Escape dismissal with focus return. They do not render
CSS or substitute for browser visual QA.

## Repository structure

```text
src/App.jsx                   Page sections and interactions
src/content.js                Verified content and external links
src/styles.css                Visual system and responsive styles
public/images/                Optimized WebP photography
.github/workflows/             GitHub Pages build/deployment workflow
docs/brand-sources.md          Source and imagery provenance
docs/deployment.md             Publishing instructions
design-qa.md                  Verification status
```

## Content and imagery

The name, address, founder and menu positioning are grounded in the company-issued
24 August 2026 announcement supplied through The Straits Times. That page is a
paid press release, not an editorial endorsement. Signature item names are sourced;
marketing descriptions are paraphrases. Current prices and opening hours are not
shown because they have not been confirmed with the business.

The founder image is the actual press-release photograph. The three product images
are generated illustrations of the selected direction, explicitly identified as
illustrative on the page. Replace them with actual menu photography when supplied.
The header uses text consistent with the visible counter lettering; no official
logo vector or definitive brand style guide was available.

## Publish

See `docs/deployment.md`. GitHub Pages is configured; Netlify deployment and manual
static hosting can also use `dist/client`. No paid hosting service is required.

This repository contains business-specific content and images. No blanket license
is asserted for supplied business assets. Font and icon packages retain their
upstream licenses in their packages.
