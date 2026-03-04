<template>
  <section id="about" class="about" ref="sectionRef">

    <!-- Parallax decorative text -->
    <div class="about-bg-text" :style="parallaxStyle" aria-hidden="true">BOX</div>

    <div class="container about-inner">

      <!-- Section label -->
      <div class="section-tag">
        <div class="section-tag__bar"></div>
        <span class="section-tag__label">About</span>
      </div>

      <!-- Main grid -->
      <div class="about-grid">

        <!-- Photo column -->
        <div class="about-photo-wrap">
          <div class="about-photo-frame">
            <img src="../assets/images/Zac-profile-image.jpeg" alt="Zac Box Personal Trainer" class="about-photo__img" />
          </div>
          <!-- Offset red bracket accent behind the photo -->
          <div class="about-photo-accent" aria-hidden="true"></div>
        </div>

        <!-- Content column -->
        <div class="about-content">
          <h2 class="about-heading">Meet <span>Zac</span></h2>

          <p class="about-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="about-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <!-- Certifications -->
          <div class="certs">
            <p class="certs-label">Certifications</p>
            <div class="certs-grid">

              <!-- Card 1: BA Degree -->
              <div
                class="cert-card"
                :class="{ 'cert-card--flipped': flipped[0] }"
                @click="toggle(0)"
                role="button"
                tabindex="0"
                @keydown.enter="toggle(0)"
                @keydown.space.prevent="toggle(0)"
                aria-label="B.A Sports Business and Management — tap to learn more"
              >
                <div class="cert-card__inner">
                  <div class="cert-card__face cert-card__front">
                    <div class="cert-card__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    </div>
                    <span class="cert-card__title">B.A Sports Business &amp; Management</span>
                    <span class="cert-card__hint">Tap to learn more</span>
                  </div>
                  <div class="cert-card__face cert-card__back">
                    <p>University-level degree combining sports science foundations with business strategy, marketing, and management — bringing a professional edge to every programme.</p>
                  </div>
                </div>
              </div>

              <!-- Card 2: PT Level 3 -->
              <div
                class="cert-card"
                :class="{ 'cert-card--flipped': flipped[1] }"
                @click="toggle(1)"
                role="button"
                tabindex="0"
                @keydown.enter="toggle(1)"
                @keydown.space.prevent="toggle(1)"
                aria-label="Personal Trainer Level 3 — tap to learn more"
              >
                <div class="cert-card__inner">
                  <div class="cert-card__face cert-card__front">
                    <div class="cert-card__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="8" r="6"/>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                    <span class="cert-card__title">Personal Trainer Level 3</span>
                    <span class="cert-card__hint">Tap to learn more</span>
                  </div>
                  <div class="cert-card__face cert-card__back">
                    <p>REPs &amp; CIMSPA recognised Level 3 qualification — certified to design and deliver bespoke, results-driven training programmes tailored to individual goals.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Cert card flip
const flipped = ref([false, false])
function toggle(i) {
  flipped.value[i] = !flipped.value[i]
}

// Parallax
const sectionRef = ref(null)
const parallaxOffset = ref(0)
let rafId = null

const parallaxStyle = computed(() => ({
  transform: `translateX(-50%) translateY(${parallaxOffset.value}px)`
}))

function updateParallax() {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  parallaxOffset.value = rect.top * -0.25
}

function onScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(updateParallax)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateParallax()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* =============================================
   SECTION
============================================= */
.about {
  position: relative;
  padding: 5.5rem 0;
  background: var(--color-bg);
  overflow: hidden;
}

/* Parallax bg letterform */
.about-bg-text {
  position: absolute;
  top: 20%;
  left: 63%;
  /* transform set via :style — translateX(-50%) + parallax Y */
  font-family: var(--font-display);
  font-size: clamp(14rem, 32vw, 30rem);
  line-height: 1;
  color: rgba(192, 57, 43, 0.06);
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  will-change: transform;
}

/* =============================================
   SECTION LABEL
============================================= */
.section-tag {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4.5rem;
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
   GRID
============================================= */
.about-inner {
  position: relative;
  z-index: 1;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 5rem;
  align-items: start;
}

/* =============================================
   PHOTO
============================================= */
.about-photo-wrap {
  position: relative;
}

.about-photo-frame {
  position: relative;
  aspect-ratio: 3 / 4;
  background: var(--color-bg-soft);
  border: 1px solid rgba(255, 255, 255, 0.07);
  overflow: hidden;
  border-radius: 2px;
  z-index: 1;
}

/* Swap this div for an <img> when the photo is ready */
.about-photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.12);
  font-family: var(--font-heading);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.about-photo__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Decorative red bracket behind/offset from photo */
.about-photo-accent {
  position: absolute;
  bottom: -14px;
  right: -14px;
  width: 75%;
  height: 75%;
  border-right: 2px solid rgba(192, 57, 43, 0.28);
  border-bottom: 2px solid rgba(192, 57, 43, 0.28);
  z-index: 0;
  pointer-events: none;
}

/* =============================================
   CONTENT
============================================= */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.9;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.about-heading span {
  color: var(--color-red);
}

.about-body {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

/* =============================================
   CERTIFICATIONS
============================================= */
.certs {
  margin-top: 2.75rem;
}

.certs-label {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: var(--color-text-muted);
  margin-bottom: 1.1rem;
}

.certs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Flip card */
.cert-card {
  perspective: 1000px;
  height: 155px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.cert-card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.cert-card:hover .cert-card__inner,
.cert-card--flipped .cert-card__inner {
  transform: rotateY(180deg);
}

.cert-card__face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 2px;
  padding: 1.25rem;
}

/* Front */
.cert-card__front {
  background: var(--color-bg-soft);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.25s ease;
}

.cert-card:hover .cert-card__front {
  border-color: rgba(192, 57, 43, 0.3);
}

.cert-card__icon {
  color: var(--color-red);
}

.cert-card__title {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-text);
  line-height: 1.35;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
}

.cert-card__hint {
  font-family: var(--font-heading);
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.2);
}

/* Back */
.cert-card__back {
  background: #501611;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-card__back p {
  font-size: 0.78rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  text-align: center;
}

/* =============================================
   RESPONSIVE
============================================= */
@media (max-width: 900px) {
  .about-bg-text {
    top: 45%;
    left: 50%;
    font-size: clamp(8rem, 40vw, 16rem);
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .about-photo-frame {
    max-width: 340px;
    margin: 0 auto;
  }

  .about-photo-accent {
    right: calc(50% - 340px / 2 - 14px);
  }
}

@media (max-width: 480px) {
  .about {
    padding: 3.5rem 0;
  }

  .certs-grid {
    grid-template-columns: 1fr;
  }

  .cert-card {
    height: 140px;
  }
}
</style>
