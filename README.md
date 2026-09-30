# ADVTOOLS

Static marketing site for attribution / tracking / data-engineering consulting.
No build step, no framework, no dependencies. Three pages, one stylesheet, one script.

```
index.html      services + offer + lead form
tools.html      internal tooling (capability proof)
cases.html      findings (the audit, demonstrated)
assets/
  styles.css    dark tech theme, mobile-first
  app.js        Kit lead capture + click attribution
CAMPAIGNS.md    Google Ads structure, bids, negatives, ad copy
```

## Positioning

Built on the measured keyword cluster from 2026-09-30 — the only US consulting
segment that cleared both gates: entry bids under $10 **and** high top-of-page
bids ($18–149) proving buyers with budget.

Three fixed-fee engagements: attribution audit **$2,500 / 10 days**, server-side
tracking build **$8,000 / 3 weeks**, warehouse pipeline **$12,000 / 4–6 weeks**.
The $8,000 anchors deliberately against published DIY server-side cost of
$8,000–25,000 in year one.

Vertical emphasis: travel/OTA, hospitality, EdTech — where measurement breaks in
ways a generalist will not find in five working days.

## Design

Deliberately **single-theme dark**. This is a developer-tool register and a
half-committed light mode reads worse than one theme done properly. Every colour
is painted explicitly, so the page holds regardless of the host background.

- **JetBrains Mono** carries structure, labels, data and headlines
- **Inter** carries reading copy
- **Mobile-first**: base CSS is the phone layout; `min-width` queries scale up at
  640px and 1000px

## Kit setup — do this before spending anything

The form posts directly to Kit rather than using the iframe embed. The iframe
cannot see the page URL, so **gclid never reaches the subscriber record** — and for
a funnel that closes offline weeks later, gclid is what lets you upload the real
won/lost outcome back to Google Ads. Without it, Smart Bidding learns to find
people who fill in forms rather than people who sign contracts.

1. Set `KIT_FORM_ID` at the top of `assets/app.js`.
2. **Create these custom fields in Kit first.** Kit silently drops fields that do
   not already exist — the submission returns success and the data is gone:
   `company` · `service` · `vertical` · `monthly_spend` · `note` · `gclid` ·
   `msclkid` · `utm_source` · `utm_campaign` · `landing_page`
3. Set `ADS_CONVERSION.send_to` and add the Google Ads global tag to each page's
   `<head>` where the comment marks it.
4. **Submit the form yourself** and verify two separate things: the subscriber
   appears in Kit **with the custom fields populated**, and the conversion
   registers in Google Ads. These fail independently — a 200 is not proof the
   data landed.

⚠️ **Two things to check on the account.** The Kit trial on file lapsed
**2026-07-29** — confirm the account is active before launch. And the endpoint in
`app.js` (`https://app.kit.com/forms/{id}/subscriptions`) was **not** verified
against a live account at build time; step 4 is how you confirm it.

⚠️ **Kit is an email tool, not a CRM.** It is fine for capture, but these leads
need a human reply within a day, not a nurture sequence. Set a notification, or
forward to an inbox you actually read.

## Deploy

Static files — any host works. Recommended: **Netlify** or **Cloudflare Pages**,
drag-and-drop the folder, then point a subdomain at it.

```
CNAME  audit.advtools.net → <host>
```

Subdirectory on the apex domain is marginally better for organic (the domain has
history since 2015), but a subdomain costs essentially nothing for paid search —
Google Ads' landing-page experience score evaluates the page, not domain age.

## Campaigns

See `CAMPAIGNS.md`. Two campaigns, **$14/day, ~$600 over three weeks**, which buys
roughly **55 clicks** at a blended $11 CPC. That is enough to read ad CTR and
search-term quality. It is **not** enough to measure a conversion rate — the whole
plan is designed around that limit rather than pretending otherwise.
