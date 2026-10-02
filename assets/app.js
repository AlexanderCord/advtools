/* ADVTOOLS — lead capture via Kit (formerly ConvertKit) + click attribution.
 *
 * Why the form is hand-built rather than Kit's iframe embed:
 * the iframe cannot see the page URL, so gclid never reaches the subscriber
 * record. For a consulting funnel that closes offline weeks later, gclid IS
 * the product — it is what lets you upload the won/lost outcome back to Google
 * Ads as an offline conversion. Without it Smart Bidding optimises toward
 * people who fill in forms rather than people who sign contracts.
 *
 * ── CONFIGURE BEFORE GOING LIVE ────────────────────────────────────────────
 *   1. KIT_FORM_ID below.
 *   2. In Kit, create the custom fields listed in KIT_FIELDS. Kit silently
 *      DROPS fields that do not already exist on the account — a submission
 *      will look successful and the data will be gone.
 *   3. Submit once yourself and confirm the subscriber appears WITH the custom
 *      fields populated. A 200 is not proof the data landed.
 *   4. Set ADS_CONVERSION and add the Google Ads global tag to each page.
 *
 * NOTE: the endpoint below is Kit's public form-subscription URL. It has NOT
 * been verified against a live account from here (no active Kit session at
 * build time) — verify step 3 before spending on ads.
 */

var KIT_FORM_ID   = 'REPLACE_ME';                 // e.g. '9693086'
var KIT_ENDPOINT  = 'https://app.kit.com/forms/' + KIT_FORM_ID + '/subscriptions';
var ADS_CONVERSION = { send_to: 'AW-REPLACE_ME/REPLACE_ME' };

// Custom fields that must exist in Kit before they will persist.
var KIT_FIELDS = ['company', 'service', 'vertical', 'monthly_spend', 'note',
                  'gclid', 'msclkid', 'utm_source', 'utm_campaign', 'landing_page'];

(function () {
  'use strict';

  var TRACKED = ['gclid', 'msclkid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  var STORE = 'advtools_attr';

  function load() { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(STORE, JSON.stringify(o)); } catch (e) {} }

  // Merge this visit's params over anything stored, so a returning visitor
  // keeps the gclid from the click that originally found us.
  var params = new URLSearchParams(location.search);
  var attr = load(), fresh = false;
  TRACKED.forEach(function (k) { var v = params.get(k); if (v) { attr[k] = v; fresh = true; } });
  if (fresh) { attr.first_seen = attr.first_seen || new Date().toISOString(); save(attr); }

  var form = document.querySelector('form[data-kit]');
  if (!form) return;

  var okBox = document.querySelector('.msg.ok');
  var errBox = document.querySelector('.msg.err');
  var btn = form.querySelector('button[type="submit"]');

  function fail(text) {
    if (!errBox) return;
    errBox.innerHTML = text;
    errBox.classList.add('show');
    if (btn) { btn.disabled = false; btn.textContent = 'Send'; }
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!form.reportValidity()) return;
    if (errBox) errBox.classList.remove('show');

    if (KIT_FORM_ID === 'REPLACE_ME') {
      fail('Form not configured yet. Set <code>KIT_FORM_ID</code> in <code>assets/app.js</code>.');
      return;
    }

    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

    var data = new FormData(form);
    var payload = {
      email_address: data.get('email'),
      first_name: data.get('name'),
      fields: {
        company:       data.get('company') || '',
        service:       data.get('service') || '',
        vertical:      data.get('vertical') || '',
        monthly_spend: data.get('monthly_spend') || '',
        note:          data.get('note') || '',
        gclid:         attr.gclid || '',
        msclkid:       attr.msclkid || '',
        utm_source:    attr.utm_source || '',
        utm_campaign:  attr.utm_campaign || '',
        landing_page:  location.pathname
      }
    };

    fetch(KIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Kit returned ' + res.status);
        // Conversion fires only after a confirmed success. Firing on submit
        // instead counts leads that never reached an inbox.
        if (typeof window.gtag === 'function' && ADS_CONVERSION.send_to.indexOf('REPLACE_ME') === -1) {
          window.gtag('event', 'conversion', ADS_CONVERSION);
        }
        form.classList.add('done');
        if (okBox) { okBox.classList.add('show'); okBox.setAttribute('tabindex', '-1'); okBox.focus(); }
      })
      .catch(function (err) {
        fail('That did not send. Reveal the contact address in the footer and mail us directly, and we will pick it up from there.');
        if (window.console) console.error('[advtools]', err);
      });
  });
})();
