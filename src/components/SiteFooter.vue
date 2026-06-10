<template>
  <footer class="site-footer">
    <div class="container footer-inner">

      <div class="footer-brand">
        <span class="footer-logo">Zac Box</span>
        <span class="footer-tagline">Personal Training · Wilmslow</span>
      </div>

      <nav class="footer-legal" aria-label="Legal links">
        <button @click="$emit('open-legal', 'privacy')">Privacy Policy</button>
        <button @click="$emit('open-legal', 'terms')">Terms &amp; Conditions</button>
        <button @click="$emit('open-legal', 'disclaimer')">Disclaimer</button>
      </nav>

    </div>

    <div class="footer-bottom">
      <p>&copy; {{ year }} Zac Box Personal Training. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

defineEmits(['open-legal'])

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  background: var(--color-bg-soft);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 2rem;
  align-items: start;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.6rem;
  letter-spacing: 0.08em;
  color: var(--color-text);
}

.footer-tagline {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.footer-legal button {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.footer-legal button:hover {
  color: var(--color-red);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-family: var(--font-body);
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.25rem;
  }

  .footer-legal {
    align-items: flex-start;
  }
}
</style>
