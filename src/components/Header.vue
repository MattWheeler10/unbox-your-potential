<template>
  <header>

    <!-- ===== NAVIGATION ===== -->
    <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
      <div class="container nav-inner">

        <a href="/" class="nav-brand">
          Unbox <span>Your</span> Potential
        </a>

        <ul class="nav-links" :class="{ 'nav-links--open': menuOpen }">
          <li><a href="#" class="nav-link" @click="closeMenu">Home</a></li>
          <li><a href="#about" class="nav-link" @click="closeMenu">About</a></li>
          <li><a href="#whats-on" class="nav-link" @click="closeMenu">What's On</a></li>
          <li><a href="#pricing" class="nav-link" @click="closeMenu">Pricing</a></li>
          <li><a href="#contact" class="nav-link" @click="closeMenu">Contact</a></li>
        </ul>

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
          <span class="hero-title__word">Unbox</span>
          <span class="hero-title__word hero-title__word--red">Your</span>
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

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
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

.nav-link:hover::after {
  width: 100%;
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

.hero-title__word {
  color: var(--color-text);
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
</style>
