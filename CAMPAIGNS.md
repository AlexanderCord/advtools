# ADVTOOLS — campaign structure

Built on the only US consulting cluster that cleared both gates in the 2026-09-30
screen: entry bids inside $10, **and** high top-of-page bids proving budget sits
behind the click.

## The measured cluster

| Keyword | Vol/mo | Low ToP | High ToP | Read |
|---|---:|---:|---:|---|
| `analytics consultant` | 480 | **$7.73** | $18.66 | cheapest entry |
| `server side tracking` | 390 | **$8.23** | $39.99 | best skill fit |
| `data engineering consultant` | 390 | **$7.80** | **$148.85** | biggest budget signal |
| `google analytics consultant` | 260 | **$8.66** | $68.70 | strong commercial intent |
| `ga4 consultant` | 30 | $12.00 | **$103.50** | tiny but expensive |
| **~1,550/mo** | | **$7.73–12.00** | **$18–149** | |

**Why the high bid matters more than the low one.** Nobody pays $148 for a
`data engineering consultant` click unless it closes implementation work. The
September screen found the inverse case — `management consulting firm` at 4,400/mo
with a $15.21 top-of-page bid: enormous volume, nobody paying. In B2B consulting a
cheap click is the symptom of a dead market, not a bargain.

---

## Campaigns

Two only. Splitting a small budget across more cells produces nothing readable.

### 1 · `ADV-Attribution-US` → `/index.html`

Geo US, presence-only. Search network only. Manual CPC. **$8/day.**

| Keyword | Match | Max CPC |
|---|---|---:|
| server side tracking | EXACT | $12.00 |
| server side tracking | PHRASE | $11.00 |
| google analytics consultant | EXACT | $13.00 |
| google analytics consultant | PHRASE | $12.00 |
| analytics consultant | EXACT | $11.00 |
| ga4 consultant | EXACT | $15.00 |

### 2 · `ADV-DataEng-US` → `/index.html`

Geo US, presence-only. **$6/day.**

| Keyword | Match | Max CPC |
|---|---|---:|
| data engineering consultant | EXACT | $14.00 |
| data engineering consultant | PHRASE | $13.00 |
| analytics consultant | PHRASE | $10.00 |

**Bids sit between the low and high top-of-page bid deliberately.** Position 1 at
$40–149 would burn the whole test on six clicks. We are buying impressions for a
CTR read first, clicks second.

**Total: $14/day → ~$100/week → $600 over three weeks.** At a blended ~$11 CPC
that is roughly **55 clicks.** Enough to read CTR and search-term quality. **Not**
enough to measure a conversion rate — do not try.

---

## Negatives (campaign level — new campaigns do NOT inherit shared lists)

**Base:** jobs · job · salary · career · hiring · recruiter · resume · intern ·
internship · course · courses · training · certification · certificate · tutorial ·
how to · what is · free · remote · udemy · coursera · reddit · youtube

**Tool-shopping** — the biggest risk on this cluster. `analytics consultant` and
`ga4 consultant` both pull people comparing software:
vs · alternative · alternatives · pricing · price · review · reviews · best · top 10 ·
comparison · cheapest · trial · demo · download · plugin · extension

**DIY / documentation:** setup · setup guide · step by step · documentation · docs ·
example · template · github · stack overflow

**Competitor brands** (start excluded; consulting brand-bidding converts poorly):
stape · taggrs · cometly · elevar · segmentstream · cookiebot · cookieyes

---

## Ad copy

Headlines ≤30 chars, descriptions ≤90. **Pre-flight before any mutate** — a length
violation fails mid-run and leaves a campaign and ad group created with no ad.

### Attribution

Headlines: `Your ROAS Is Probably Wrong` · `Attribution Audit, 10 Days` ·
`Fixed Fee. No Retainer.` · `Spend vs Revenue Reconciled` · `Server Side Tracking Build` ·
`We Check Tracking First` · `Built On GCP. You Own It.` · `Ad Data Since 2015` ·
`Read Only Access` · `Priced Before We Start`

Descriptions:
- `Ten days to reconcile ad spend against orders, not platform reported conversions.`
- `Same fee whether you hire us for the fix or not. No discount for the rebuild.`
- `Read only access. Fixed fee agreed up front. Report plus walkthrough call.`
- `Travel, hospitality and EdTech funnels. Twenty years inside these platforms.`

### Data engineering

Headlines: `BigQuery Pipeline, 4 Weeks` · `Spend Joined To Margin` · `Fixed Fee Data Build` ·
`One Source Of Truth` · `GA4 Export To Warehouse` · `Documented. Handover Ready.` ·
`No Retainer Required` · `Ad Data Engineering 2015`

Descriptions:
- `Ad spend joined to orders joined to margin, refreshed nightly in BigQuery.`
- `Documented and handover ready. Your team runs it, or we do. Same fee.`
- `GA4 export, ad platform connectors, margin join, BI layer. Fixed price.`
- `Read only access. Priced before we start. No day rates, no scope creep.`

---

## Before enabling — in this order

1. **Deploy the site.** Dead final URLs get campaigns disapproved.
2. **Set `KIT_FORM_ID` in `assets/app.js`** and create the custom fields in Kit
   (see README). Kit silently drops fields that do not already exist.
3. **Submit the form yourself.** Confirm two separate things: the subscriber
   appears in Kit **with custom fields populated**, and the conversion registers in
   Google Ads. These fail independently.
4. Enable in the UI. **Read the search terms report on day 2**, not day 7 — the
   tool-shopping traffic will show up immediately and it is the main budget risk.
5. Use `TODAY` when checking same-day delivery. `LAST_7_DAYS` excludes today.

## What $600 answers

- ✅ Which offer gets clicked (CTR — impressions are free, this is the real signal)
- ✅ Whether search terms are buyers or people shopping for software
- ✅ Whether any lead arrives at all
- ❌ Conversion rate, CPL, or whether the business works

**Zero leads at 55 clicks means the test was underpowered, not that the market is
absent.** The CTR comparison is the part that survives being underpowered.
