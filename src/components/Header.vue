<template>
  <header>

    <!-- ===== NAVIGATION ===== -->
    <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
      <div class="container nav-inner">

        <a href="/" class="nav-brand">
          Unbox <span>Your</span> Potential
        </a>

        <ul class="nav-links" :class="{ 'nav-links--open': menuOpen }">
          <li v-for="link in links" :key="link.id">
            <a
              :href="link.id ? `#${link.id}` : '#'"
              class="nav-link"
              :class="{ 'nav-link--active': activeId === link.id }"
              :aria-current="activeId === link.id ? 'true' : null"
              @click="closeMenu"
            >{{ link.label }}</a>
          </li>
        </ul>

        <a href="#pricing" class="nav-cta" @click="closeMenu">Book Now</a>

        <button
          class="nav-toggle"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen.toString()"
          aria-label="Toggle navigation menu"
        >
          <span class="bar" :class="{ 'bar--1-open': menuOpen }"></span>
          <span class="bar" :class="{ 'bar--2-open': menuOpen }"></span>
          <span class="bar" :class="{ 'bar--3-open': menuOpen }"></span>
        </button>

      </div>
    </nav>

    <!-- ===== HERO ===== -->
    <section class="hero">

      <!-- Ambient glow + grain texture -->
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grain" aria-hidden="true"></div>

      <!-- Subtle corner bracket decorations -->
      <div class="hero-deco hero-deco--tl" aria-hidden="true"></div>
      <div class="hero-deco hero-deco--br" aria-hidden="true"></div>

      <div class="container hero-inner">

        <!-- Location badge -->
        <a
          class="hero-badge"
          href="https://www.google.com/maps/place/Total+Fitness+Wilmslow/@53.3503012,-2.1998469,15.75z/data=!4m6!3m5!1s0x487a4cde3efcc8c9:0x8784bdf993ebf0f!8m2!3d53.3502027!4d-2.1966272!16s%2Fg%2F1tdfh6rv?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Total Fitness Wilmslow on Google Maps"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Total Fitness, Wilmslow</span>
        </a>

        <!-- Main title -->
        <h1 class="hero-title">
          <span class="hero-title__line">
            <span class="hero-title__word">Unbox</span>
            <span class="hero-title__word hero-title__word--red">Your</span>
          </span>
          <span class="hero-title__word">Potential</span>
        </h1>

        <!-- Red accent divider -->
        <div class="hero-divider" aria-hidden="true"></div>

        <!-- Subtitle -->
        <p class="hero-subtitle">Zac Box &nbsp;&middot;&nbsp; Personal Training</p>

        <!-- CTA -->
        <a href="#pricing" class="hero-cta">
          <span>Book a Session</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

      </div>

    </section>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

function closeMenu() {
  menuOpen.value = false
}

const links = [
  { id: '', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'whats-on', label: "What's On" },
  { id: 'reviews', label: 'Reviews' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
]

// Highlights the nav link for whichever section sits in the middle of the viewport
const activeId = ref('')
let sectionObserver = null

function onScroll() {
  scrolled.value = window.scrollY > 20
  if (window.scrollY < 200) activeId.value = ''
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  if (!('IntersectionObserver' in window)) return
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  links.forEach(({ id }) => {
    const el = id && document.getElementById(id)
    if (el) sectionObserver.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
})
</script>

<style scoped>
/* =============================================
  NAV
============================================= */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(8, 8, 8, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.nav--scrolled {
  background: rgba(8, 8, 8, 0.97);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Brand */
.nav-brand {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text);
  text-decoration: none;
  white-space: nowrap;
}

.nav-brand span {
  color: var(--color-red);
}

/* Nav links */
.nav-links {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-red);
  transition: width 0.25s ease;
}

.nav-link:hover {
  color: var(--color-text);
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

.nav-link--active {
  color: var(--color-text);
}

/* Nav CTA */
.nav-cta {
  margin-left: 2.5rem;
  font-family: var(--font-heading);
  font-size: 0.74rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  background: var(--color-red);
  border: 1px solid var(--color-red);
  padding: 0.6rem 1.15rem;
  border-radius: 2px;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;
}

.nav-cta:hover {
  background: var(--color-red-hover);
  border-color: var(--color-red-hover);
  box-shadow: 0 8px 24px rgba(192, 57, 43, 0.35);
}

/* Hamburger button */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  flex-shrink: 0;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.bar--1-open { transform: translateY(7px) rotate(45deg); }
.bar--2-open { opacity: 0; transform: scaleX(0); }
.bar--3-open { transform: translateY(-7px) rotate(-45deg); }

/* Mobile nav */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-cta {
    margin-left: auto;
    margin-right: 1rem;
    padding: 0.5rem 0.85rem;
    font-size: 0.68rem;
  }

  .nav-link--active {
    background: rgba(192, 57, 43, 0.06);
    box-shadow: inset 2px 0 0 var(--color-red);
  }

  .nav-links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: #0a0a0a;
    border-bottom: 1px solid var(--color-border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
  }

  .nav-links--open {
    max-height: 320px;
  }

  .nav-link {
    display: block;
    padding: 1.1rem 1.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    border-bottom: 1px solid var(--color-border);
  }

  .nav-link::after {
    display: none;
  }

  .nav-link:hover {
    background: rgba(192, 57, 43, 0.06);
  }
}

/* =============================================
   HERO
============================================= */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #080808;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: calc(var(--nav-height) + 4rem);
  padding-bottom: 5rem;
}

/* Location badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: var(--color-text-muted);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.45rem 1.1rem;
  margin-bottom: 3rem;
  border-radius: 2px;
  text-decoration: none;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.hero-badge:hover {
  border-color: rgba(192, 57, 43, 0.35);
  background: rgba(192, 57, 43, 0.08);
}

.hero-badge svg {
  color: var(--color-red);
  flex-shrink: 0;
}

/* Title */
.hero-title {
  display: flex;
  flex-direction: column;
  line-height: 0.88;
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 11vw, 10.5rem);
  letter-spacing: 0.02em;
  margin-bottom: 1.75rem;
}

.hero-title__line {
  display: flex;
  justify-content: center;
  gap: 0.25em;
}

.hero-title__word {
  color: var(--color-text);
}

/* Stack back to three lines on mobile */
@media (max-width: 768px) {
  .hero-title__line {
    flex-direction: column;
    gap: 0;
  }
}

.hero-title__word--red {
  color: var(--color-red);
}

/* Divider */
.hero-divider {
  width: 60px;
  height: 3px;
  background: var(--color-red);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

/* Subtitle */
.hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(0.78rem, 1.8vw, 1.05rem);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.34em;
  color: var(--color-text-muted);
  margin-bottom: 3.5rem;
}

/* CTA button */
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  text-decoration: none;
  padding: 1rem 2.2rem;
  border-radius: 2px;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.hero-cta:hover {
  background: var(--color-red-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(192, 57, 43, 0.4);
}

.hero-cta:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(192, 57, 43, 0.3);
}

/* Corner bracket decorations */
.hero-deco {
  position: absolute;
  z-index: 1;
  width: 55px;
  height: 55px;
  pointer-events: none;
}

.hero-deco--tl {
  top: calc(var(--nav-height) + 1.5rem);
  left: 2.5rem;
  border-top: 2px solid rgba(192, 57, 43, 0.35);
  border-left: 2px solid rgba(192, 57, 43, 0.35);
}

.hero-deco--br {
  bottom: 2.5rem;
  right: 2.5rem;
  border-bottom: 2px solid rgba(192, 57, 43, 0.35);
  border-right: 2px solid rgba(192, 57, 43, 0.35);
}

/* Ambient red glow behind the title */
.hero-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 60% 45% at 50% 48%, rgba(192, 57, 43, 0.16) 0%, transparent 70%),
    radial-gradient(ellipse 90% 60% at 50% 110%, rgba(192, 57, 43, 0.08) 0%, transparent 70%);
}

/* Fine film grain for texture */
.hero-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Staggered entrance — animates `translate` (not `transform`) so the
   CTA's hover lift still works once the animation has finished */
@keyframes hero-rise {
  from {
    opacity: 0;
    translate: 0 24px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

.hero-inner > * {
  animation: hero-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-inner > :nth-child(1) { animation-delay: 0.05s; }
.hero-inner > :nth-child(2) { animation-delay: 0.15s; }
.hero-inner > :nth-child(3) { animation-delay: 0.3s; }
.hero-inner > :nth-child(4) { animation-delay: 0.4s; }
.hero-inner > :nth-child(5) { animation-delay: 0.5s; }

@media (max-width: 480px) {
  .hero-deco {
    width: 36px;
    height: 36px;
  }

  .hero-deco--tl {
    top: calc(var(--nav-height) + 1rem);
    left: 1rem;
  }

  .hero-deco--br {
    bottom: 1.5rem;
    right: 1rem;
  }
}

@media (max-width: 360px) {
  .nav-cta {
    display: none;
  }
}
</style>
