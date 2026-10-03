# ADVTOOLS — campaign plan (security services)

Re-cut 2026-10-03 after the broad cybersecurity keyword round. Supersedes the
earlier compliance-led plan. Every number below is measured, not estimated;
sources in `research/`.

---

## 0. The constraint, stated once

Entry (low top-of-page) bids in this market, US:

| Term | Vol/mo | Entry | Top of page | YoY |
|---|---:|---:|---:|---:|
| `penetration testing services` | 3,600 | $25.37 | $250.00 | +52% |
| `cyber security audit service` | 880 | $24.91 | $538.34 | −64% |
| `penetration testing company` | 260 | $35.78 | $350.00 | −34% |
| `vciso services` | 170 | $18.49 | $80.00 | −57% |

At a $25 entry CPC, **$1,000/month buys about 40 clicks**. Ten conversions —
the minimum to read a conversion rate — needs roughly 300 clicks, or ~$7,500.

**Therefore: month one cannot measure a conversion rate, and no plan that
claims otherwise is honest.** What month one *can* measure is whether the
auction exists at our bid, what a click really costs against the $25 estimate,
and whether a human being ever fills the form. Those are yes/no questions and
they are answerable for a few hundred dollars.

The ladder below is built around that, one rung at a time.

---

## 1. Start offshore, not in the US

The US has the volume. It does not have the best entry price, and at this
budget entry price is the binding constraint.

`penetration testing services`, by market:

| Market | Vol/mo | Entry | Top of page | YoY |
|---|---:|---:|---:|---:|
| United States | 3,600 | $25.37 | $250.00 | +52% |
| United Kingdom | 1,000 | $42.71 | $149.37 | −46% |
| **Canada** | 390 | **$22.05** | $150.00 | **+84%** |
| **Australia** | 260 | **$15.69** | **$321.26** | **+433%** |
| **Singapore** | 140 | **$8.60** | $75.14 | **+271%** |
| United Arab Emirates | 50 | — | — | +100% |
| Maldives | *not a reportable location* | — | — | — |

Two things fall out of this table.

**Australia is the anomaly worth exploiting.** Entry costs $15.69 — 38% less
than the US — while the top-of-page bid is $321, the highest of any market
measured. Somebody there is paying a great deal for these clicks and the floor
is still cheap. Volume is up 433% year on year, and `cybersecurity services` in
Australia is up 515%. That is the signature of a market under new compulsion,
and it is the cheapest place on the list to find out whether the funnel works.

**Singapore is the cheapest click in English anywhere** at $8.60, up 271%.
Volume is thin, but at $8.60 a test is three times cheaper to run than in the US.

So: prove the funnel where clicks are cheap, then buy the expensive auction
with evidence instead of hope.

---

## 2. The ladder — one rung at a time

Each rung has one question, one budget, and a gate. Do not start the next rung
until the current one answers its question. Do not run two rungs at once.

### Rung 1 — does the auction exist?
- **Market:** Australia
- **Budget:** $15/day × 21 days = **$315**
- **Campaign:** `ADV-Pentest-AU` · Search only · Manual CPC, $18 cap
- **Match:** exact only
- **Keywords:** `[penetration testing services]` `[penetration testing company]`
  `[pen testing services]` `[penetration test provider]`
- **Landing:** `pentest.html`
- **Question:** do impressions exist at our bid, and what is the real CPC?
- **Gate:** ≥20 clicks at ≤$20 average CPC → rung 2.
  CPC >$35 → the US will be strictly worse; stop and rethink the offer, not the bid.
  <10 clicks in 21 days → the exact-match pool is too thin; add phrase match before spending more.

### Rung 2 — does anyone convert at all?
- **Markets:** Australia + Canada + Singapore
- **Budget:** $22/day × 21 days = **$462**
- **Campaigns:** `ADV-Pentest-AU` (continue) + `ADV-Pentest-CA` + `ADV-Pentest-SG`
  — separate campaigns, because budget cannot be steered within one.
- **Match:** exact + phrase
- **Question:** does a single human being complete the form?
- **Gate:** ≥1 form submit within ~60 cumulative clicks → rung 3.
  **0 in 60 clicks → stop buying traffic.** The problem is the page or the
  offer, and more clicks will only buy a more expensive version of the same no.

### Rung 3 — is the US survivable?
- **Market:** add United States
- **Budget:** $30/day × 28 days = **$840**
- **Campaign:** `ADV-Pentest-US` · exact + phrase · Manual CPC, $30 cap
- **Question:** does US CPC land near the $25.37 entry or near the $250 ceiling?
- **Gate:** CPC ≤$45 and ≥1 lead → scale this campaign and hold the others flat.
  CPC >$45 with no lead → stay offshore; the US auction is being bought by
  firms with a sales team and a budget we are not competing with this year.

### Rung 4 — second service
Only after a rung-3 result. Repeat rungs 1–3 for `security-audit.html`
(`[cyber security audit services]`, `[security audit service]`, $24.91 entry,
$538 top of page). Same ladder, same gates.

**vCISO is not a paid-search play.** Commercial volume is ~260/mo in the US and
30/mo in the UAE, and the `vciso` head term is informational. Keyword difficulty
is 4 — meaning the organic result is nearly unguarded. Build `vciso.html` for
organic and let it earn its traffic; do not bid on it.

**Total ladder cost if every rung passes: ~$1,617 over about 10 weeks.**

---

## 3. Negative keywords (shared list, attach to every campaign)

New campaigns do not inherit shared negative lists — attach explicitly.

```
salary  salaries  jobs  job  career  careers  hiring  intern  internship
course  courses  certification  certified  cert  training  bootcamp  degree
exam  tutorial  "what is"  meaning  definition  pdf  template  checklist
free  cheap  example  sample  resume  interview  reddit  quizlet  wikipedia
tools  tool  software  open source  github  kali  metasploit  burp
army  military  nfl  football  "red team go"  "atomic red team"
```

The last two lines matter more than they look. `red team` is 12,100/mo of
mostly military, sports and tooling intent at a $5.28 bid — a textbook cheap-click
trap. `penetration testing` as a head term is 18,100/mo and overwhelmingly
informational: students and practitioners, not buyers. **Never bid the head
terms broad.**

---

## 4. Targeting — who, and where they actually are

### The Maldives question, answered

Geo targeting in Google Ads keys on where the searcher's device is, not on who
they are. An executive on holiday in the Maldives is not searching for a
penetration testing vendor; they are on holiday. The Maldives is not even a
reportable location in the keyword data — volume for these terms is effectively
nil. The same holds for Monaco, Aspen and every other place the instinct points at.

**The instinct is right and the mechanism is wrong.** "Reach executives" is an
audience problem, not a geography problem. Geography should target where the
*companies* are. Audience targeting is what reaches the people.

### The mechanism that actually does this

**Microsoft Advertising LinkedIn Profile Targeting** is the only search product
that targets by company, industry and job function. It is a direct fit for this
offer, and it is a tool this account already has the expertise to run. Microsoft
also tends to clear cheaper than Google, and a corporate-Windows B2B audience
over-indexes on Bing for exactly the reason you would expect — it is the default
in the browser their IT department configured.

Recommended Microsoft layer, once rung 2 passes:
- **Job function:** Information Technology, Engineering, Operations
- **Industry:** Computer Software, Internet, Financial Services, Hospital & Health Care
- **Company size:** 50–1,000 employees — above this they have a CISO; below it they have no budget
- Bid modifier only at first (observation), not exclusive targeting — the list is small

**Google equivalents**, in order of usefulness here:
1. **Customer Match** — upload contacts at named target accounts. Works at any list size for Search observation.
2. **In-market: Business Services → Security Services** — layer as observation, read the bid modifier after 500+ impressions.
3. **Detailed demographics** — no job-title targeting on Search. Do not plan around it.

### Geography, done properly

Target the metros where the *buyer's company* is headquartered, not where
anyone holidays:

- **Australia:** Sydney, Melbourne — then national
- **Canada:** Toronto, Vancouver, Montreal
- **Singapore:** whole country
- **United States (rung 3):** SF Bay Area, NYC, Boston, Austin, Seattle, Denver
- **United Kingdom:** London only — the UK entry bid is $42.71, the highest measured, so do not buy the whole country

Set location option to **"Presence: people in or regularly in your targeted
locations"** — not "presence or interest". The default setting will otherwise
serve ads to people merely reading about Sydney.

### A note on the UAE

UAE was on the market list, so it was measured: `cybersecurity services` is
90/mo at a **$2.02** entry bid and −60% year on year; `cyber security audit` is
20/mo and −91%. A $2 entry bid in a B2B services auction means no advertiser is
making money there. **Do not spend on the UAE** — on the data, not on policy.
(Separately: the portfolio's standing owner decision excludes Gulf targeting.
The data and the rule agree here, so nothing is lost.)

---

## 5. Retargeting

### Tag on day zero, launch much later

Remarketing has audience-size floors, and at this budget they are the whole story:

| Network | Minimum list size | Reachable at ~40 clicks/mo? |
|---|---:|---|
| Display remarketing | 100 | yes, ~2–3 months |
| Search (RLSA) | 1,000 | **no — not this year** |
| YouTube | 1,000 | no |

So: **install the tag before rung 1 even starts**, because the list accrues
while you are still unable to use it. A tag installed at rung 3 throws away
everything the first two rungs saw.

### Audiences to define now

| Audience | Rule | Duration | Use |
|---|---|---:|---|
| **All visitors** | any page | 540d | the seed list; display remarketing when ≥100 |
| **Service intent** | visited `pentest.html` / `security-audit.html` / `vciso.html` | 540d | the one worth paying for |
| **Deep read** | service page + ≥60s or ≥50% scroll | 180d | highest intent, smallest list |
| **Converters** | visited `thanks.html` | 540d | **exclude from every campaign** |

The converter exclusion is why `thanks.html` exists as a separate URL with the
form redirecting to it. Without a distinct converter URL there is no way to stop
paying to re-advertise to someone who already wrote to you.

### Campaign: `ADV-RMK-Display`
- **Launch condition:** All visitors ≥ 100 — not before
- **Budget:** $5/day, capped
- **Audience:** Service intent, minus Converters
- **Frequency cap:** 3/day, 10/week — a consultancy that follows people around the
  internet reads as desperate, which is the opposite of the positioning
- **Placement exclusions:** apps, games, parked domains
- **Creative:** the finding block from `security-audit.html` — the thing that
  differentiates the offer, not a logo
- **Gate:** if CPM-driven spend produces no return visits in 6 weeks, kill it.
  Display at $5/day is a brand-presence expense, not a lead channel, and should
  be honest about that.

### RLSA, for later
Configure the Search campaigns with the audiences attached in **observation**
mode from rung 1. It costs nothing, changes no bids, and means that on the day
a list crosses 1,000 the historical data is already there.

---

## 6. Measurement — the part that usually gets skipped

Consulting closes offline, weeks after the click. Without this, Smart Bidding
optimises toward form-fillers who never become customers.

1. **gclid / msclkid capture** into the Kit record — already built in `assets/app.js`.
2. **Offline conversion upload** when a deal closes, with the real value.
3. Until that loop runs, keep campaigns on **Manual CPC**. Smart Bidding on a
   form-fill proxy at 40 clicks/month has nothing to learn from and will spend
   the budget finding it out.

---

## 7. Blockers before a single dollar is spent

- [ ] `KIT_FORM_ID` is still `REPLACE_ME` in `assets/app.js` — **the form cannot
      capture a lead.** Nothing below matters until this is set.
- [ ] Kit trial lapsed 2026-07-29 — account needs reactivating.
- [ ] Google Ads global tag not present on any page (placeholder comment only).
- [ ] Conversion action not created; `ADS_CONVERSION.send_to` still `REPLACE_ME`.
- [ ] `nginx.conf.example` not applied on the live host — pretty URLs 404,
      security headers absent, CSS/JS served uncompressed.
