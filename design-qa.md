# Design QA — Coffee to Craft

final result: blocked

## Target and state

- Source visual truth: `/workspace/scratch/dcdd278cd44f/generated_images/exec-743f9189-d68b-4aea-bec7-64e6fa27c5a0.png`.
- Source pixels: 1374 × 1145. Intended desktop comparison: 1440 × 1200 CSS
  pixels, homepage initial state, density 1. Normalize source proportionally
  to 1440 × 1200 before comparing.
- Required responsive checks: 390 × 844, 768 × 1024, 1024 × 768 and 1440 × 1200.
- Implementation screenshot: unavailable; not captured.
- Full-view and focused-region comparison evidence: unavailable.

## Blocker

Work's cloud browser and preview service are not available in this conversation.
The user authorized local Playwright/Chromium on 14 October 2026. The normal
Playwright browser download returned an invalid archive. A Chromium binary was
then acquired through its packaged distribution, decompressed and launched from
the workspace. Both Chromium 153 and Chromium 131 exited with SIGTRAP before a
page opened, including a minimal direct launch. Browser-rendered QA and console
review therefore remain blocked by the execution environment, not by missing
user approval. A production build or DOM-only test does not satisfy this gate.

A self-contained `brew-grind-sg-preview.html` is included in the review archive for
manual browser inspection. It embeds the production React bundle, CSS, local fonts
and images. It does not require Node or a server.

## Completed nonvisual verification

- Production build succeeded.
- Four provided hosting/worker tests passed.
- All four images decode successfully and are present in the production output.
- Four React interaction tests pass in jsdom: initial signature-coffee menu,
  switching all four categories, navigation open/selection close, and Escape
  dismissal with focus return. The Escape test initially failed, exposing a real
  keyboard issue; it passed after adding dismissal and button-focus restoration.
- These checks do not replace browser-rendered QA.

## Required fidelity surfaces

- Fonts/typography: Manrope and Barlow Condensed are locally bundled; rendered
  weights, wrapping and hierarchy await comparison.
- Spacing/layout rhythm: desktop hero and paired panels target the selected
  proportions; responsive overflow and alignment await browser inspection.
- Colours/tokens: charcoal, ivory and amber follow the selected direction;
  image-background text contrast awaits visual verification.
- Image quality: all three optimized WebP assets were opened and inspected. They
  follow the selected subjects/palette and use no placeholder artwork.
- Copy/content: selected hero and panel copy retained. Brand/menu facts are grounded
  in the supplied issuer release. Prices/hours and editorial endorsements omitted.

## Interaction checks still required

DOM-only tests cover navigation open/close, category changes and Escape focus.
Browser-specific checks still required: mobile menu opens, closes and navigates;
all four menu categories show their items;
hero CTA reaches menu; Visit reaches address; external directions/Instagram/menu
links are correct; keyboard focus and skip link are visible; reduced-motion mode
is respected; image requests succeed at root and repository-subpath hosting;
no console/page errors; no horizontal overflow at listed viewport sizes.

## Comparison history

No browser comparison has run. No pass is asserted.

## Manual review procedure

Open the self-contained preview in a browser and compare its initial desktop view
at 1440 × 1200 with Coffee to Craft. Then inspect 390, 320, 768 and 1024 px widths.
Check text contrast, image crops, wraps, focus states, menu visibility, scroll
anchors, external links, overflow and console errors. Capture evidence and record
fidelity findings before changing `final result` to `passed`.

## Follow-up polish

Replace illustrative product imagery with actual images when supplied. Add final
canonical/social image metadata when a deployment domain is selected.
