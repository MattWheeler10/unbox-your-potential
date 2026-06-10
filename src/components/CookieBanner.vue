<template>
  <Teleport to="body">
    <Transition name="cookie">
      <div v-if="visible" class="cookie-banner" role="region" aria-label="Cookie consent">
        <div class="cookie-inner">
          <div class="cookie-text">
            <span class="cookie-label">Cookies</span>
            <p>We use cookies for analytics to improve this site. You can accept or decline non-essential cookies.</p>
          </div>
          <div class="cookie-actions">
            <button class="btn-decline" @click="decline">Decline</button>
            <button class="btn-accept" @click="accept">Accept</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'cookie_consent'
const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    // Small delay so it doesn't flash immediately on load
    setTimeout(() => { visible.value = true }, 1200)
  }
})

function accept() {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  visible.value = false
}

function decline() {
  localStorage.setItem(STORAGE_KEY, 'declined')
  visible.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  width: calc(100% - 3rem);
  max-width: 720px;
}

.cookie-inner {
  background: var(--color-bg-mute);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-red);
  border-radius: 6px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.cookie-text {
  flex: 1;
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.cookie-label {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-red);
  flex-shrink: 0;
}

.cookie-text p {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.cookie-actions {
  display: flex;
  gap: 0.6rem;
  flex-shrink: 0;
}

.btn-decline,
.btn-accept {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-decline {
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}

.btn-decline:hover {
  border-color: var(--color-text-muted);
  color: var(--color-text);
}

.btn-accept {
  background: var(--color-red);
  border: 1px solid var(--color-red);
  color: #fff;
}

.btn-accept:hover {
  background: var(--color-red-hover);
  border-color: var(--color-red-hover);
}

/* Transition */
.cookie-enter-active,
.cookie-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.cookie-enter-from,
.cookie-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(1rem);
}

@media (max-width: 600px) {
  .cookie-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .cookie-text {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
