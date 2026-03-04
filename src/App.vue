<template>
  <!-- Full-page mouse fx overlay — fixed, pointer-events none, behind all content -->
  <div class="page-fx" ref="fxRef"></div>
  <AppHeader />
  <main>
    <AppAbout />
    <AppWhatsOn />
    <AppPricing />
    <AppContact />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppAbout from './components/AppAbout.vue'
import AppPricing from './components/AppPricing.vue'
import AppWhatsOn from './components/AppWhatsOn.vue'
import AppContact from './components/AppContact.vue'

const fxRef = ref(null)
let rafId = null

function onMouseMove(e) {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    if (!fxRef.value) return
    fxRef.value.style.setProperty('--mouse-x', `${e.clientX}px`)
    fxRef.value.style.setProperty('--mouse-y', `${e.clientY}px`)
  })
}

function onMouseLeave() {
  if (rafId) cancelAnimationFrame(rafId)
  fxRef.value?.style.setProperty('--mouse-x', '-9999px')
  fxRef.value?.style.setProperty('--mouse-y', '-9999px')
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  document.documentElement.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.documentElement.removeEventListener('mouseleave', onMouseLeave)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.page-fx {
  --mouse-x: -9999px;
  --mouse-y: -9999px;
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

/* Red glow follows cursor */
.page-fx::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 520px at var(--mouse-x) var(--mouse-y),
    rgba(192, 57, 43, 0.18) 0%,
    rgba(192, 57, 43, 0.06) 40%,
    transparent 70%
  );
}

/* Grid revealed around cursor */
.page-fx::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(
    circle 260px at var(--mouse-x) var(--mouse-y),
    black 0%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    circle 260px at var(--mouse-x) var(--mouse-y),
    black 0%,
    transparent 100%
  );
}
</style>
