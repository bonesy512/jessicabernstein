# Legacy Integrations & Critical Links
**Client:** Law Office of Jessica Bernstein  
**Purpose:** Ensure no critical third-party integrations, payment portals, or review widgets are lost during the Next.js rebuild.

## 1. Payment Portal (LawPay & Affirm)
* **Direct Payment Link:** `https://secure.lawpay.com/pages/law-office-of-jessica-bernstein/operating`
* **Note:** This link supports Visa, MasterCard, American Express, Discover, and Affirm financing. Ensure all `shadcn` "Make a Payment" buttons route here.

## 2. Review Links & Widgets
**CRITICAL THEME NOTE:** Third-party injected iframes and widgets (like Avvo and grwapi) often break visually or become unreadable in Dark Mode. If the widgets do not support native dark mode via CSS media queries, place them inside a `shadcn` Card component with a forced light background (`bg-white dark:bg-slate-100`) to ensure legibility across all themes.

### Direct Links
* **Avvo Profile:** `https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html`
* **Google Reviews:** `https://reviewthis.biz/lawoffice-jessicabernstein`

### Avvo Badges (Raw HTML)
**Rating Badge:**
<script type="text/javascript" src="https://www.avvo.com/assets/badges-v2.js"></script>
<div class="avvo_badge" data-type="rating" data-specialty="55" data-target="https://www.avvo.com/professional_badges/4093085" data-version="1">
  <div class="avvo_content">
    <a rel="me" target="_blank" href="https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html?utm_campaign=avvo_rating&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo">Lawyer Jessica Bernstein</a> | 
    <a target="_blank" href="https://www.avvo.com/criminal-defense-lawyer/tx/austin.html?utm_campaign=avvo_rating&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo">Featured Attorney Criminal Defense</a>
  </div>
</div>

**Reviews Badge:**
<script type="text/javascript" src="https://www.avvo.com/assets/badges-v2.js"></script>
<div class="avvo_badge" data-type="reviews" data-specialty="55" data-target="https://www.avvo.com/professional_badges/4093085">
  <div class="avvo_content">
    <a rel="me" target="_blank" href="https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html?utm_campaign=avvo_review_badge&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo">Lawyer Jessica Bernstein</a> | 
    <a target="_blank" href="https://www.avvo.com/criminal-defense-lawyer/tx/austin.html?utm_campaign=avvo_review_badge&utm_content=4093085&utm_medium=avvo_badge&utm_source=avvo">Lawyer Criminal Defense</a>
  </div>
</div>

### Google Review Widget (grwapi.net)
<div class="review-widget_net" data-uuid="38b47d71-a483-4678-a5d2-caf138ef3541" data-template="9" data-filter="" data-lang="en" data-theme="light">
  <center>
    <a href="https://www.review-widget.net/" target="_blank" rel="noopener">
      <img src="https://grwapi.net/assets/spinner/spin.svg" title="Google Review Widget" alt="Review Widget">
    </a>
  </center>
</div>
<script async type="text/javascript" src="https://grwapi.net/widget.min.js"></script>

## 3. Social Media Links
* **Facebook:** `https://www.facebook.com/atxcrimdefense`
* **Instagram:** `https://www.instagram.com/atx_criminal_defense`

## 4. Hardcoded Contact Information
* **Email:** `jessica@atxcrimdefense.com`
* **Phone:** `(512) 887-2028`
* **Address:** `820 W 10th St. Austin, TX 78701`
* **Hours:** Monday - Friday, 9am - 5pm (Closed Weekends)