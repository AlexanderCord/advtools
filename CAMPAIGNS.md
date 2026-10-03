# ADVTOOLS — campaign structure

Rebuilt 2026-10-03 around the security and compliance cluster. Supersedes the
attribution/data-engineering plan, which targeted keywords no offer matches.

Full measurement in `research/RESEARCH-2026-10-03.md`.

## Why this cluster

| Offer area | Service-intent vol/mo | Best top-of-page bid |
|---|---:|---:|
| **Security & compliance** | **~242,000** | **$766** |
| Data engineering | 1,240 | $149 |
| Process automation | 1,250 | $34 |
| Google Ads audit | ~250 | $69 |
| Software architecture | ~280 | $6 |

Under the inverted-CPC rule — in B2B consulting a cheap click means a market with
no money in it — the $250–766 bids here are the strongest budget signal measured
anywhere in this research.

---

## ⚠️ Read this before setting a budget

**Service terms in this market cost $25–43 to enter.** That is three to five times
the attribution cluster this plan replaces.

| Budget | Clicks on service terms | Verdict |
|---:|---:|---|
| $600 | ~20 | not readable, do not bother |
| $1,500 | ~50 | minimum for a CTR read |
| $3,000 | ~100 | first point a lead rate means anything |

The cheap entry is the head terms — `soc 2` at $8.22, `penetration testing` at
$8.56 — but those carry mixed intent and will pull students, job seekers and tool
shoppers. They are in campaign 3 precisely so that traffic is isolated and killable.

---

## Campaign 1 · `ADV-Pentest-US` → `/pentest.html`

Geo US, presence-only. Search network only. Manual CPC. **$14/day.**

| Keyword | Match | Max CPC | Vol/mo | Measured high ToP |
|---|---|---:|---:|---:|
| penetration testing services | EXACT | $32.00 | 3,600 | $250.00 |
| penetration testing services | PHRASE | $30.00 | — | — |
| penetration testing companies | EXACT | $34.00 | 590 | $289.22 |
| penetration testing firm | EXACT | $34.00 | 590 | $289.22 |
| penetration testing company | PHRASE | $30.00 | — | — |
| web application penetration testing | PHRASE | $28.00 | — | — |

## Campaign 2 · `ADV-Compliance-US` → `/soc2.html`

Geo US, presence-only. **$14/day.**

| Keyword | Match | Max CPC | Vol/mo | Measured high ToP |
|---|---|---:|---:|---:|
| soc 2 compliance consultant | EXACT | $34.00 | 480 | $274.27 |
| soc 2 readiness | PHRASE | $28.00 | — | — |
| soc 2 compliance | PHRASE | $22.00 | 12,100 | $98.44 |
| soc 2 type 2 audit | EXACT | $30.00 | 480 | $216.70 |
| iso 27001 consultant | EXACT | $30.00 | 170 | $272.47 |
| iso 27001 certification | PHRASE | $18.00 | — | — |

## Campaign 3 · `ADV-SecAudit-US` → `/index.html`

Geo US, presence-only. **$8/day.** Head terms: cheap, mixed intent, and the one
place search-term discovery actually happens.

| Keyword | Match | Max CPC | Vol/mo | Measured high ToP |
|---|---|---:|---:|---:|
| security audit | PHRASE | $14.00 | 880 | $67.92 |
| cyber security audit | PHRASE | $12.00 | 880 | $41.54 |
| security audit service | EXACT | $20.00 | 480 | $75.00 |
| secure code review | EXACT | $18.00 | 140 | $38.82 |
| soc 2 | PHRASE | $12.00 | 22,200 | $59.83 |
| penetration testing | PHRASE | $12.00 | 18,100 | $85.15 |

**Total $36/day → ~$250/week → ~$1,500 over six weeks**, or three weeks at double.

---

## Negatives — campaign level, and heavier than usual

New campaigns do **not** inherit shared lists. Security has the worst
junk-to-buyer ratio of any cluster measured: the category is saturated with
students, job seekers and practitioners looking for free tooling.

**Base:** job · jobs · salary · career · hiring · resume · intern · internship ·
certification · certificate · certified · course · courses · training · bootcamp ·
exam · degree · class · classes · school · tutorial · learn · roadmap · what is ·
how to · meaning · definition · example · template · checklist · free · pdf ·
reddit · youtube · udemy · coursera

**Practitioner / DIY** — people who will do it themselves:
kali · metasploit · burp · burpsuite · nmap · wireshark · owasp zap · github ·
open source · lab · labs · practice · ctf · hack the box · tryhackme · oscp ·
ceh · comptia · security+

**Product shoppers** — they want software, not a consultancy:
tool · tools · software · platform · solution · vendor · pricing · cost · price ·
vs · versus · alternative · comparison · review · reviews · best · top 10

**Compliance-automation brands** (start excluded; revisit only if you become an
implementation partner): vanta · drata · secureframe · sprinto · tugboat

**Adjacent regimes we do not sell:** cmmc · fedramp · hitrust · nist 800-171 ·
hipaa · pci dss · gdpr

---

## Ad copy

Headlines ≤30 chars, descriptions ≤90. **Pre-flight before any mutate** — a length
violation fails mid-run and leaves a campaign and ad group with no ad in them.

### Pentest

`Penetration Testing, 2-3 Wk` · `Manual, Not A Scanner Run` · `Retest Included` ·
`From $15,000 Fixed Scope` · `Web App, API, Infra Testing` · `Ranked By Exploit Risk` ·
`Built Systems At This Scale` · `Scope Agreed In Writing` · `Reproducible Findings` ·
`20 Years Building And Testing`

- `Manual testing of the apps and infrastructure you run. Not a scanner report.`
- `Findings ranked by exploitability and business impact, with reproduction steps.`
- `Retest after remediation is included, not an upsell. Fixed scope, quoted up front.`
- `Scope, timing and escalation agreed in writing before anything starts.`

### Compliance

`SOC 2 Readiness, Not Theatre` · `ISO 27001 Readiness` · `Controls That Operate` ·
`Evidence Wired Into Work` · `We Liaise With The Auditor` · `From $35,000` ·
`Type 1 First If A Deal Waits` · `Gap Assessment In 2 Weeks` · `A CPA Firm Signs It` ·
`Honest About What You Need`

- `Gap assessment, controls built and operating, evidence collected, auditor liaison.`
- `We do readiness. A licensed CPA firm does the attestation. That part is not ours.`
- `If a platform and a month of your own time is cheaper, we will say so on the call.`
- `Controls that operate, not policies nobody follows. Auditors test the former.`

### Security audit

`Security & SSDLC Audit` · `Fixed Fee, Two Weeks` · `Where Security Meets Delivery` ·
`Findings Ranked By Exposure` · `$10,000 Fixed Scope` · `Read Only Access` ·
`Remediation You Can Run` · `No Retainer Attached`

- `Secure development lifecycle and infrastructure posture, scoped to a deadline.`
- `Findings ranked by exposure, not by count. Remediation your own team can execute.`
- `Read only access. Fixed fee agreed before we start. Report plus walkthrough.`

---

## Before enabling — in order

1. **Deploy.** `/pentest.html` and `/soc2.html` must be live. Dead final URLs get
   campaigns disapproved.
2. **Fix the nginx config.** `/tools`, `/cases` currently 404 and there are no
   security headers — see `nginx.conf.example`. Ad final URLs must use `.html`.
3. **Set `KIT_FORM_ID`** in `assets/app.js` and create the custom fields in Kit.
   The form currently cannot capture a single lead.
4. **Add the Google Ads tag** and set `ADS_CONVERSION`.
5. **Submit the form yourself.** Confirm the subscriber appears in Kit *with custom
   fields populated* **and** the conversion registers. These fail independently.
6. Enable. **Read search terms on day 2**, not day 7 — in this cluster the junk
   arrives immediately and at $30 a click it is expensive.
7. Use `TODAY`, not `LAST_7_DAYS`, for same-day delivery checks.

## What this buys

At ~$1,500 and roughly 50 clicks: a readable comparison of **which of the three
offers gets clicked**, and whether the search terms are buyers or noise. It is not
enough to measure a conversion rate, and the plan is built around that limit rather
than pretending otherwise.
