<template>
  <section id="whats-on" class="whatson">
    <div class="container">

      <!-- Section label -->
      <div class="section-tag">
        <div class="section-tag__bar"></div>
        <span class="section-tag__label">What's On</span>
      </div>

      <!-- Heading -->
      <h2 class="whatson-heading">What's <span>On</span></h2>
      <p class="whatson-sub">Sign up on the Total Fitness app</p>

      <!-- Class cards -->
      <div class="class-grid">

        <!-- Card 1 -->
        <div class="class-card">
          <div class="class-card__day">Mon</div>
          <div class="class-card__body">
            <span class="class-card__name">Class Name</span>
            <span class="class-card__time">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              00:00 AM
            </span>
          </div>
          <span class="class-card__badge">Free</span>
        </div>

        <!-- Card 2 -->
        <div class="class-card">
          <div class="class-card__day">Wed</div>
          <div class="class-card__body">
            <span class="class-card__name">Class Name</span>
            <span class="class-card__time">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              00:00 PM
            </span>
          </div>
          <span class="class-card__badge">Free</span>
        </div>

        <!-- Card 3 -->
        <div class="class-card">
          <div class="class-card__day">Sat</div>
          <div class="class-card__body">
            <span class="class-card__name">Class Name</span>
            <span class="class-card__time">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              00:00 AM
            </span>
          </div>
          <span class="class-card__badge">Free</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* =============================================
   SECTION
============================================= */
.whatson {
  position: relative;
  padding: 5.5rem 0;
  background: var(--color-bg-soft);
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
.whatson-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.9;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.whatson-heading span {
  color: var(--color-red);
}

.whatson-sub {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  margin-bottom: 3.5rem;
}

/* =============================================
   GRID
============================================= */
.class-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* =============================================
   CARD
============================================= */
.class-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 2px;
  padding: 1.75rem 2rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.class-card:hover {
  border-color: rgba(192, 57, 43, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

/* Day block */
.class-card__day {
  font-family: var(--font-display);
  font-size: 2.8rem;
  line-height: 1;
  color: var(--color-red);
  letter-spacing: 0.02em;
  flex-shrink: 0;
  width: 3.5ch;
}

/* Divider between day and body */
.class-card::before {
  content: '';
  position: absolute;
  left: calc(2rem + 3.5ch + 0.75rem);
  top: 1.5rem;
  bottom: 1.5rem;
  width: 1px;
  background: rgba(255, 255, 255, 0.07);
}

.class-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
  padding-left: 0.75rem;
}

.class-card__name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text);
}

.class-card__time {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 300;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}

.class-card__time svg {
  flex-shrink: 0;
}

/* Free badge */
.class-card__badge {
  font-family: var(--font-heading);
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-red);
  border: 1px solid rgba(192, 57, 43, 0.35);
  padding: 0.25rem 0.6rem;
  border-radius: 2px;
  flex-shrink: 0;
}

/* =============================================
   RESPONSIVE
============================================= */
@media (max-width: 900px) {
  .class-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .whatson {
    padding: 3.5rem 0;
  }
}
</style>
