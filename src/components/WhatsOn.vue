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

        <!-- Card 1: HIT Class -->
        <div class="class-card">
          <div class="class-card__day">
            <span class="class-card__every">every</span>
            Thu
          </div>
          <div class="class-card__body">
            <span class="class-card__name">Strength & Conditioning</span>
            <span class="class-card__time">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              5:30 PM · Studio 2
            </span>
          </div>
          <span class="class-card__badge">Free</span>
        </div>

        <!-- Card 2: Coming Soon -->
        <div class="class-card class-card--soon">
          <div class="class-card__day class-card__day--muted">—</div>
          <div class="class-card__body">
            <span class="class-card__name class-card__name--muted">Coming Soon</span>
            <span class="class-card__time">More classes being added</span>
          </div>
          <span class="class-card__badge class-card__badge--soon">Soon</span>
        </div>

        <!-- Card 3: Coming Soon -->
        <div class="class-card class-card--soon">
          <div class="class-card__day class-card__day--muted">—</div>
          <div class="class-card__body">
            <span class="class-card__name class-card__name--muted">Coming Soon</span>
            <span class="class-card__time">More classes being added</span>
          </div>
          <span class="class-card__badge class-card__badge--soon">Soon</span>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  padding-right: 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
}

.class-card__every {
  font-family: var(--font-heading);
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
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

/* Coming soon card */
.class-card--soon {
  opacity: 0.45;
  pointer-events: none;
  border-style: dashed;
}

.class-card__day--muted {
  color: var(--color-text-muted);
  font-size: 2rem;
}

.class-card__name--muted {
  color: var(--color-text-muted);
}

.class-card__badge--soon {
  color: var(--color-text-muted);
  border-color: rgba(255, 255, 255, 0.12);
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
