# Prototype Instructions

## Brew & Grind SG project decisions

- The selected visual target is Coffee to Craft: charcoal, ivory and amber,
  a coffee-and-beer hero and paired daytime/evening sections.
- Build with React and Vite. Keep repository and deployment configuration portable.
- Preserve the Singapore address, all-day coffee/craft beer positioning and
  verified signature items. Product imagery is illustrative; the founder portrait
  comes from the company-issued release. Do not claim a press endorsement.
- GitHub was declined for this request. Prepare files and workflow without
  suggesting the connector again or claiming that a remote repository exists.
- Local Playwright/Chromium download and use were authorized on 14 October 2026.
  Do not request that permission again. Browser launch currently fails in this
  runtime; visual QA remains blocked and must not be reported as passed.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
