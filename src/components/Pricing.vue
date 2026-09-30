<template>
  <section id="pricing" class="pricing">
    <div class="container">

      <!-- Section label -->
      <div class="section-tag" v-reveal>
        <div class="section-tag__bar"></div>
        <span class="section-tag__label">Pricing</span>
      </div>

      <!-- Heading -->
      <h2 class="pricing-heading" v-reveal="80">Invest In <span>Yourself</span></h2>
      <p class="pricing-sub" v-reveal="160">Online coaching or in person with Zac</p>

      <!-- Cards -->
      <div class="pricing-grid" v-reveal="200">

        <!-- Tier 1: Foundation (free) -->
        <div class="pricing-card">
          <div class="pricing-card__top">
            <span class="pricing-tier">Foundation</span>
            <div class="pricing-amount">
              <span class="pricing-amount__free">Free</span>
            </div>
            <p class="pricing-tagline">The perfect starting point</p>
          </div>

          <ul class="pricing-features">
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Free consultation with Zac
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              30-minute taster session
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Goal &amp; programme discussion
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Exercise form coaching
            </li>
          </ul>

          <a href="#contact" class="pricing-cta pricing-cta--outline">Get Started Free</a>
        </div>

        <!-- Tier 2: Online Coaching -->
        <div class="pricing-card pricing-card--featured">
          <div class="pricing-card__badge">Online Coaching</div>

          <div class="pricing-card__top">
            <span class="pricing-tier">Online Coaching</span>
            <div class="pricing-amount">
              <span class="pricing-amount__free">£80</span>
              <span class="pricing-amount__per">/ month</span>
            </div>
            <p class="pricing-tagline">Your training plan with weekly check-ins — everything you need to transform</p>
          </div>

          <ul class="pricing-features">
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Bespoke training programme
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Access to the coaching app
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Video demonstrations for every exercise
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Weekly check-ins &amp; progress tracking
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Macronutrient recommendations for cut or bulk
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Around-the-clock messaging via the app
            </li>
            <li>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Programme updated as you progress
            </li>
          </ul>

          <!-- TODO: add the £80/mo Stripe payment link — until then "Join Now" goes to the contact section -->
          <div class="pricing-option__buttons">
            <a
              :href="onlineStripeUrl || '#contact'"
              :target="onlineStripeUrl ? '_blank' : null"
              :rel="onlineStripeUrl ? 'noopener noreferrer' : null"
              class="pricing-option__cta"
            >Join Now</a>
            <a href="#contact" class="pricing-option__chat">Chat first</a>
          </div>
        </div>

      </div>

      <!-- In-Person Training -->
      <div class="inperson">
        <div class="inperson__intro" v-reveal>
          <div class="section-tag">
            <div class="section-tag__bar"></div>
            <span class="section-tag__label">In-Person Training</span>
          </div>
          <h3 class="inperson__heading">Train With Zac, <span>In Person</span></h3>
          <p class="inperson__body">
            One-to-one sessions at Total Fitness, Wilmslow, with full online coaching included. Billed monthly by direct debit, in 4-week blocks.
          </p>
        </div>

        <div class="inperson-grid" v-reveal="120">
          <div
            v-for="plan in inPersonPlans"
            :key="plan.name"
            class="inperson-card"
            :class="{ 'inperson-card--luxe': plan.luxe }"
          >
            <div class="inperson-card__head">
              <span class="inperson-card__name">{{ plan.name }}</span>
              <span class="inperson-card__freq">{{ plan.frequency }}</span>
            </div>

            <div class="inperson-card__price">
              <span class="inperson-card__amount">{{ plan.price }}</span>
              <span class="inperson-card__per">/ 4 weeks</span>
            </div>
            <span class="inperson-card__billing">Monthly direct debit</span>

            <ul class="inperson-card__features">
              <li v-for="feature in plan.features" :key="feature">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feature }}
              </li>
            </ul>

            <div class="inperson-card__ctas">
              <!-- TODO: add Stripe payment links to inPersonPlans below -->
              <a
                :href="plan.stripeUrl || '#contact'"
                :target="plan.stripeUrl ? '_blank' : null"
                :rel="plan.stripeUrl ? 'noopener noreferrer' : null"
                class="inperson-card__cta"
              >Join Now</a>
              <a href="#contact" class="inperson-card__chat">Chat first</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Online coaching (£80/mo) Stripe link — fill in once created
const onlineStripeUrl = ''

// Stripe links not set up yet — until stripeUrl is filled in, "Join Now" goes to the contact section
const inPersonPlans = [
  {
    name: 'Signature',
    frequency: '1 session weekly + online coaching',
    price: '£200',
    stripeUrl: '',
    luxe: false,
    features: [
      '1 one-to-one session with Zac per week',
      'Full online coaching package included',
      'Live technique & form coaching',
      'In-depth nutrition strategy',
      'Lifestyle & habit coaching',
      'Priority booking & flexible scheduling',
    ],
  },
  {
    name: 'Elite',
    frequency: '2 sessions weekly + online coaching',
    price: '£400',
    stripeUrl: '',
    luxe: true,
    features: [
      '2 one-to-one sessions with Zac per week',
      'Full online coaching package included',
      'Live technique & form coaching',
      'In-depth nutrition strategy',
      'Lifestyle & habit coaching',
      'Priority booking & flexible scheduling',
    ],
  },
]
</script>

<style scoped>
/* =============================================
   SECTION
============================================= */
.pricing {
  position: relative;
  padding: 5.5rem 0;
  background: var(--color-bg);
}

/* =============================================
   SECTION LABEL
============================================= */
.section-tag {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-tag__bar {
  width: 36px;
  height: 2px;
  background: var(--color-red);
  flex-shrink: 0;
}

.section-tag__label {
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  color: var(--color-red);
}

/* =============================================
   HEADING
============================================= */
.pricing-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.9;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.pricing-heading span {
  color: var(--color-red);
}

.pricing-sub {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  margin-bottom: 4rem;
}

/* =============================================
   GRID
============================================= */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1.65fr;
  gap: 1.5rem;
  align-items: stretch;
}

/* =============================================
   CARD
============================================= */
.pricing-card {
  position: relative;
  background: var(--color-bg-soft);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 2px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  border-color: rgba(192, 57, 43, 0.25);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
}

/* Featured card */
.pricing-card--featured {
  background: var(--color-bg-mute);
  border-color: rgba(192, 57, 43, 0.45);
  box-shadow: 0 0 0 1px rgba(192, 57, 43, 0.12), 0 16px 48px rgba(0, 0, 0, 0.5);
  padding-top: 3rem;
}

.pricing-card--featured:hover {
  border-color: rgba(192, 57, 43, 0.7);
  box-shadow: 0 0 0 1px rgba(192, 57, 43, 0.2), 0 20px 60px rgba(192, 57, 43, 0.15);
}

/* Red top bar on featured */
.pricing-card--featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--color-red);
  border-radius: 2px 2px 0 0;
}

/* "Full Package" badge */
.pricing-card__badge {
  position: absolute;
  top: -1px;
  right: 1.75rem;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.62rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 0.3rem 0.85rem;
  border-radius: 0 0 3px 3px;
}

/* =============================================
   CARD TOP
============================================= */
.pricing-card__top {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.pricing-tier {
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: var(--color-red);
}

.pricing-amount {
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  line-height: 1;
}

.pricing-amount__free {
  font-family: var(--font-display);
  font-size: 3.5rem;
  color: var(--color-text);
  letter-spacing: 0.02em;
}

.pricing-tagline {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 300;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  padding-top: 0.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* =============================================
   FEATURES
============================================= */
.pricing-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(240, 240, 240, 0.8);
  letter-spacing: 0.03em;
}

.pricing-features li svg {
  color: var(--color-red);
  flex-shrink: 0;
}

/* =============================================
   CTA (free card)
============================================= */
.pricing-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  text-decoration: none;
  padding: 0.9rem 1.5rem;
  border-radius: 2px;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.pricing-cta--outline {
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.pricing-cta--outline:hover {
  border-color: rgba(192, 57, 43, 0.4);
  color: var(--color-text);
  background: rgba(192, 57, 43, 0.06);
  transform: translateY(-2px);
}

/* =============================================
   CTAs (online coaching card)
============================================= */
.pricing-amount__per {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
  margin-left: 0.3rem;
}

.pricing-option__buttons {
  display: flex;
  gap: 0.6rem;
}

.pricing-option__cta,
.pricing-option__chat {
  flex: 1;
  text-align: center;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding: 0.9rem 1rem;
  border-radius: 2px;
  text-decoration: none;
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
}

.pricing-option__cta {
  background: var(--color-red);
  color: #fff;
  border: 1px solid var(--color-red);
}

.pricing-option__cta:hover {
  background: var(--color-red-hover);
  border-color: var(--color-red-hover);
}

.pricing-option__chat {
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.pricing-option__chat:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--color-text);
}


/* =============================================
   RESPONSIVE
============================================= */
@media (max-width: 900px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 540px;
    margin: 0 auto;
  }

  .pricing-card {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 600px) {
  .pricing {
    padding: 3.5rem 0;
  }
}

/* =============================================
   IN-PERSON TRAINING
============================================= */
.inperson {
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.inperson__intro {
  margin-bottom: 4rem;
}

.inperson__heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.9;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.inperson__heading span {
  color: var(--color-red);
}

.inperson__body {
  max-width: 640px;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0.03em;
  color: var(--color-text-muted);
}

/* Grid */
.inperson-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

/* Card */
.inperson-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.75rem 2.5rem 2.25rem;
  background: linear-gradient(180deg, #151515 0%, #0d0d0d 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.inperson-card:hover {
  border-color: rgba(192, 57, 43, 0.3);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  transform: translateY(-3px);
}

/* Luxury card */
.inperson-card--luxe {
  background:
    radial-gradient(ellipse at top, rgba(192, 57, 43, 0.14) 0%, transparent 60%),
    linear-gradient(180deg, #181010 0%, #0c0c0c 100%);
  border-color: rgba(192, 57, 43, 0.5);
  box-shadow: 0 0 0 1px rgba(192, 57, 43, 0.12), 0 24px 64px rgba(0, 0, 0, 0.6);
}

.inperson-card--luxe:hover {
  border-color: rgba(192, 57, 43, 0.8);
  box-shadow: 0 0 0 1px rgba(192, 57, 43, 0.25), 0 24px 64px rgba(192, 57, 43, 0.18);
}

.inperson-card--luxe::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-red), transparent);
}

/* Head */
.inperson-card__head {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;
  margin-bottom: 1.75rem;
}

.inperson-card__name {
  font-family: var(--font-display);
  font-size: 2.6rem;
  line-height: 1;
  letter-spacing: 0.08em;
  color: var(--color-text);
}

.inperson-card__freq {
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-red);
}

/* Price */
.inperson-card__price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1;
}

.inperson-card__amount {
  font-family: var(--font-display);
  font-size: 4.5rem;
  color: var(--color-text);
  letter-spacing: 0.02em;
}

.inperson-card__per {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.inperson-card__billing {
  display: block;
  text-align: center;
  margin-top: 0.6rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  font-family: var(--font-heading);
  font-size: 0.66rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--color-text-muted);
}

/* Features */
.inperson-card__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.75rem 0 2rem;
  flex: 1;
}

.inperson-card__features li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 300;
  line-height: 1.4;
  color: rgba(240, 240, 240, 0.82);
  letter-spacing: 0.03em;
}

.inperson-card__features li svg {
  color: var(--color-red);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

/* CTAs */
.inperson-card__ctas {
  display: flex;
  gap: 0.6rem;
}

.inperson-card__cta,
.inperson-card__chat {
  flex: 1;
  text-align: center;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  text-decoration: none;
  padding: 0.9rem 1rem;
  border-radius: 2px;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.inperson-card__cta {
  background: var(--color-red);
  color: #fff;
  border: 1px solid var(--color-red);
}

.inperson-card__cta:hover {
  background: var(--color-red-hover);
  border-color: var(--color-red-hover);
}

.inperson-card__chat {
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.inperson-card__chat:hover {
  border-color: rgba(255, 255, 255, 0.35);
  color: var(--color-text);
}

@media (max-width: 900px) {
  .inperson {
    margin-top: 3.5rem;
    padding-top: 3rem;
  }

  .inperson-grid {
    grid-template-columns: 1fr;
    max-width: 540px;
    margin: 0 auto;
    gap: 2rem;
  }

  .inperson-card {
    padding: 2.75rem 1.5rem 2rem;
  }
}
</style>
