# Website User Guide
**Law Office of Jessica Bernstein**

This guide provides a plain-English, non-technical overview of how your new digital platform functions, where your data is stored, and how third-party integrations are structured.

---

## 1. Hosting & Performance (Vercel & Next.js)

Your website is built on **Next.js 16**, the industry standard for modern, high-performance web development. It is hosted on **Vercel**, a cloud platform that deploys websites to a global "Edge Network."

### Key Benefits of Your Infrastructure:
* **Extreme Speed:** Instead of loading database contents from a single far-away server every time a user visits, Vercel pre-builds (prerenders) your web pages. When a potential client in Austin visits your site, the page loads instantly from the nearest Texas-based data center.
* **Automatic Security (SSL):** Your site is secured with an industry-standard SSL certificate (HTTPS), which automatically renews.
* **Mobile Optimization:** The site automatically adjusts images and assets to match the visitor’s device screen, ensuring fast loading times even over cellular data at the Travis County Courthouse.
* **99.9% Uptime:** Hosting at the edge means your site is highly resilient to traffic spikes and server outages.

---

## 2. Lead Capture & "24-Hour Jail Release" Form Routing

Capturing client inquiries securely and quickly is the most critical function of your website.

### How the Contact Form Works:
Visitors submit case details via the **Free Case Evaluation Form** on the [Contact Page](file:///src/app/contact/page.tsx). 

* **Local Verification (Mock Mode):** To allow for rapid visual adjustments and testing during development without generating spam email/SMS, the form currently operates in a local test mode. When a user clicks "Submit," it validates the fields, displays a success card, and logs the response.
* **Production Routing:** In the live environment, these submissions are routed directly to your inbox and notification systems using secure server configurations. This logic is handled securely in the backend to protect the client's information.
* **Attorney-Client Privilege:** A disclaimer is prominently displayed, ensuring potential clients know their digital submissions are treated with strict confidentiality.

### The "Urgent: In Jail" Workflow:
If a user checks the checkbox labeled **"Urgent: Is the individual currently in jail?"**:
1. **Visual Warning:** The page displays a high-visibility message advising the user that electronic submissions are not instant and that they should call your direct 24/7 line at **(512) 887-2028** immediately.
2. **Prioritized Routing:** In production, checking this box automatically flags the submission with an `[URGENT: JAIL RELEASE]` email header and triggers an automated SMS notification to your office line, ensuring you are alerted immediately even outside standard office hours.

---

## 3. Third-Party Integrations

Your website natively embeds key business tools to handle payments, reviews, and badges.

### A. Payment Portal (LawPay & Affirm)
All **"Make a Payment"** links and buttons throughout the website route directly to your secure LawPay page:
* **Direct Payment Link:** `https://secure.lawpay.com/pages/law-office-of-jessica-bernstein/operating`
* **Features Supported:** This portal securely processes client payments via Visa, MasterCard, American Express, Discover, and Affirm financing option plans.

### B. Avvo Badges & Rating Widgets
Your professional rating is displayed using Avvo’s official badge scripts. 
* **The Challenge:** Third-party widgets like Avvo inject HTML that does not support Dark Mode. If viewed in a dark theme, these badges become unreadable.
* **Our Solution:** We have wrapped these badges in a custom container card with a forced light background (`bg-white` / `bg-slate-100`). This ensures that whether a client views your site in dark mode at night or light mode in the office, the Avvo badges are crisp and legible.
* **Avvo Profile Link:** `https://www.avvo.com/attorneys/78701-tx-jessica-bernstein-4093085.html`

### C. Google Reviews Widget
Reviews are fetched and rendered dynamically via the `grwapi` widget, giving prospective clients immediate proof of your excellent track record.
* **Direct Google Review Link:** `https://reviewthis.biz/lawoffice-jessicabernstein`
* **Placement:** The widget is embedded in the [Reviews Page](file:///src/app/reviews/page.tsx) and features the same styling precautions as Avvo to guarantee perfect readability across all device themes.

---

## 4. Hardcoded Office Contact Details

For consistency, the following details are embedded in the site layout:
* **Phone:** (512) 887-2028 *(Office & 24/7 Jail Line)*
* **Email:** `jessica@atxcrimdefense.com`
* **Address:** 820 W 10th St. Austin, TX 78701
* **Office Hours:** Monday - Friday, 9:00 AM - 5:00 PM (Closed Weekends)
