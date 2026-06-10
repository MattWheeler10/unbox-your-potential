<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="page" class="legal-overlay" @click.self="$emit('close')" role="dialog" :aria-label="title" aria-modal="true">
        <div class="legal-panel">

          <div class="legal-header">
            <div class="legal-label">Legal</div>
            <h2 class="legal-title">{{ title }}</h2>
            <button class="legal-close" @click="$emit('close')" aria-label="Close">
              <span></span><span></span>
            </button>
          </div>

          <div class="legal-body">

            <!-- PRIVACY POLICY -->
            <template v-if="page === 'privacy'">
              <p class="last-updated">Last updated: June 2025</p>

              <h3>Who we are</h3>
              <p>Zac Box Personal Training ("we", "us") is a sole trader operating from Total Fitness, Wilmslow, Cheshire. This policy explains how we collect and use your personal data when you use this website or contact us about our services.</p>

              <h3>What data we collect</h3>
              <p>We may collect the following when you contact us or book a session:</p>
              <ul>
                <li>Name, email address, and phone number (via contact form or direct message)</li>
                <li>Health information you choose to share for training purposes</li>
                <li>Basic website analytics data (pages visited, approximate location, device type) via cookies</li>
              </ul>

              <h3>How we use your data</h3>
              <p>Your data is used to:</p>
              <ul>
                <li>Respond to enquiries and arrange training sessions</li>
                <li>Process payments via Stripe (see their privacy policy for details)</li>
                <li>Improve the website through anonymised analytics</li>
              </ul>
              <p>We do not sell your data or share it with third parties except where required to deliver the service (e.g. payment processing).</p>

              <h3>Lawful basis</h3>
              <p>We process your data on the basis of <strong>legitimate interests</strong> (running our training business and responding to enquiries) and <strong>contract performance</strong> (delivering booked sessions). Where we use analytics cookies, we rely on your <strong>consent</strong>.</p>

              <h3>How long we keep your data</h3>
              <p>We retain your contact details for as long as necessary to provide our services, or for up to 2 years after your last interaction with us. Payment records are kept for 7 years as required by HMRC.</p>

              <h3>Your rights</h3>
              <p>Under UK GDPR you have the right to access, correct, delete, or export your personal data. To exercise any of these rights, contact us at <a href="mailto:zacboxpt@gmail.com">zacboxpt@gmail.com</a>. You also have the right to lodge a complaint with the <a href="https://ico.org.uk" target="_blank" rel="noopener">ICO</a>.</p>

              <h3>Cookies</h3>
              <p>This website uses cookies for analytics purposes. You can accept or decline non-essential cookies via the banner shown on your first visit. Essential cookies required for the site to function are always active.</p>

              <h3>Contact</h3>
              <p>For any data-related queries: <a href="mailto:zacboxpt@gmail.com">zacboxpt@gmail.com</a></p>
            </template>

            <!-- TERMS & CONDITIONS -->
            <template v-if="page === 'terms'">
              <p class="last-updated">Last updated: June 2025</p>

              <h3>Services</h3>
              <p>Zac Box Personal Training provides one-to-one and group personal training sessions at Total Fitness, Wilmslow. By booking a session, you agree to these terms.</p>

              <h3>Booking</h3>
              <p>Sessions are confirmed only once payment has been received or an explicit written agreement has been made. Bookings can be made via the website contact form, email, or Instagram.</p>

              <h3>Cancellation policy</h3>
              <p>We require a minimum of <strong>24 hours' notice</strong> to cancel or reschedule a session without charge. Cancellations made with less than 24 hours' notice will be charged in full. No-shows are charged in full.</p>
              <p>If Zac cancels a session, you will be offered a full reschedule at a mutually convenient time, or a full refund if rescheduling is not possible.</p>

              <h3>Payment</h3>
              <p>Payments are processed securely via Stripe. Session packages must be paid in full before sessions commence unless otherwise agreed in writing. All prices are in GBP and are inclusive of any applicable tax.</p>

              <h3>Health and safety</h3>
              <p>You are responsible for disclosing any relevant medical conditions, injuries, or physical limitations before training begins. We reserve the right to refuse or modify a session if we believe it poses a risk to your health or safety.</p>

              <h3>Liability</h3>
              <p>To the fullest extent permitted by law, Zac Box Personal Training shall not be liable for any injury, loss, or damage arising from participation in training sessions, except where caused by our gross negligence.</p>

              <h3>Changes to terms</h3>
              <p>We reserve the right to update these terms at any time. The current version will always be published on this website.</p>

              <h3>Governing law</h3>
              <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

              <h3>Contact</h3>
              <p><a href="mailto:zacboxpt@gmail.com">zacboxpt@gmail.com</a> · Total Fitness, Wilmslow, Cheshire</p>
            </template>

            <!-- DISCLAIMER -->
            <template v-if="page === 'disclaimer'">
              <p class="last-updated">Last updated: June 2025</p>

              <h3>Not medical advice</h3>
              <p>The information on this website is provided for general informational purposes only and does not constitute medical or health advice. Nothing on this site should be taken as a substitute for professional medical advice, diagnosis, or treatment.</p>

              <h3>Consult your GP</h3>
              <p>Always seek the advice of your doctor or a qualified health professional before starting any new exercise programme, particularly if you have any pre-existing medical conditions, are recovering from injury, are pregnant, or have not exercised regularly in the past 12 months.</p>

              <h3>Results</h3>
              <p>Any results, testimonials, or progress examples shown on this website reflect individual experiences. Results will vary depending on individual effort, body composition, fitness level, and other factors. No specific outcome is guaranteed.</p>

              <h3>Exercise risk</h3>
              <p>Physical exercise carries inherent risks including but not limited to muscle soreness, injury, and cardiovascular strain. By participating in any training session, you acknowledge and accept these risks.</p>

              <h3>External links</h3>
              <p>This website may contain links to third-party websites. We have no control over the content of those sites and accept no responsibility for them.</p>

              <h3>Contact</h3>
              <p>If you have questions about any content on this site: <a href="mailto:zacboxpt@gmail.com">zacboxpt@gmail.com</a></p>
            </template>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  page: {
    type: String,
    default: null
  }
})

defineEmits(['close'])

const title = computed(() => {
  if (props.page === 'privacy') return 'Privacy Policy'
  if (props.page === 'terms') return 'Terms & Conditions'
  if (props.page === 'disclaimer') return 'Disclaimer'
  return ''
})

// Lock body scroll while modal is open
watch(() => props.page, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
.legal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
}

.legal-panel {
  background: var(--color-bg-soft);
  border-top: 2px solid var(--color-red);
  width: 100%;
  max-width: 860px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
}

.legal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.legal-label {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-red);
  background: rgba(192, 57, 43, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}

.legal-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  flex: 1;
}

.legal-close {
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: border-color 0.2s;
}

.legal-close:hover {
  border-color: var(--color-red);
}

.legal-close span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 1.5px;
  background: var(--color-text-muted);
  display: block;
}

.legal-close span:first-child {
  transform: translate(-50%, -50%) rotate(45deg);
}

.legal-close span:last-child {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.legal-body {
  overflow-y: auto;
  padding: 2rem;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
}

.legal-body h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-red);
  margin: 1.75rem 0 0.6rem;
}

.legal-body h3:first-of-type {
  margin-top: 0.5rem;
}

.legal-body p {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.legal-body ul {
  margin: 0 0 0.75rem 1.25rem;
}

.legal-body ul li {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin-bottom: 0.3rem;
}

.legal-body a {
  color: var(--color-red);
  text-decoration: none;
}

.legal-body a:hover {
  text-decoration: underline;
}

.last-updated {
  font-size: 0.78rem !important;
  color: var(--color-text-muted);
  opacity: 0.6;
  margin-bottom: 1.5rem !important;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .legal-panel,
.modal-leave-active .legal-panel {
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .legal-panel,
.modal-leave-to .legal-panel {
  transform: translateY(100%);
}

@media (max-width: 768px) {
  .legal-header {
    padding: 1rem 1.25rem;
  }

  .legal-body {
    padding: 1.25rem;
  }
}
</style>
