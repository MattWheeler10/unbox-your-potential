<template>
  <section id="contact" class="contact">
    <div class="container contact-inner">

      <!-- Section label -->
      <div class="section-tag">
        <div class="section-tag__bar"></div>
        <span class="section-tag__label">Contact</span>
      </div>

      <!-- Headline -->
      <h2 class="contact-heading">
        Ready To Unbox<br><span>Your Potential?</span>
      </h2>

      <p class="contact-body">
        The first step is the hardest — but it starts with a message.
        Drop Zac a DM on Instagram and he'll get back to you to discuss your goals,
        answer any questions, and get you started on your journey.
      </p>

      <!-- Instagram CTA -->
      <a
        href="https://www.instagram.com/zacbox_pt/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-cta"
        aria-label="Message Zac on Instagram"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
        <span>DM on Instagram</span>
        <span class="contact-cta__handle">@zacbox_pt</span>
      </a>


    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* =============================================
   SECTION
============================================= */
.contact {
  position: relative;
  padding: 8rem 0;
  background: var(--color-bg-soft);
  overflow: hidden;
}

/* Large background letterform */
.contact::before {
  content: 'Get In Touch';
  position: absolute;
  bottom: -8%;
  right: -2%;
  font-family: var(--font-display);
  font-size: clamp(12rem, 28vw, 26rem);
  line-height: 1;
  color: rgba(192, 57, 43, 0.04);
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
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
   CONTENT
============================================= */
.contact-inner {
  position: relative;
  z-index: 1;
}

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.92;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.contact-heading span {
  color: var(--color-red);
}

.contact-body {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  max-width: 560px;
}

/* =============================================
   CTA BUTTON
============================================= */
.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  text-decoration: none;
  padding: 1.1rem 2.2rem;
  border-radius: 2px;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.contact-cta:hover {
  background: var(--color-red-hover);
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(192, 57, 43, 0.45);
}

.contact-cta:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(192, 57, 43, 0.3);
}

.contact-cta__handle {
  font-weight: 300;
  opacity: 0.8;
  font-size: 0.82rem;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}



/* =============================================
   RESPONSIVE
============================================= */
@media (max-width: 480px) {
  .contact {
    padding: 5rem 0;
  }

  .contact-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
