<template>
  <section id="reviews" class="reviews">

    <!-- Decorative oversized quote mark -->
    <span class="reviews-bg-quote" aria-hidden="true">&rdquo;</span>

    <div class="container reviews-inner">

      <!-- Section label -->
      <div class="section-tag">
        <div class="section-tag__bar"></div>
        <span class="section-tag__label">Reviews</span>
      </div>

      <!-- Heading -->
      <h2 class="reviews-heading">Real People. <span>Real Results.</span></h2>
      <p class="reviews-sub">Don't just take my word for it</p>

      <!-- Rating summary -->
      <div class="reviews-rating">
        <div class="reviews-rating__stars" aria-hidden="true">
          <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.94 7.1.62-5.4 4.7 1.64 7.24L12 17.6l-6.24 3.9 1.64-7.24-5.4-4.7 7.1-.62L12 2z"/>
          </svg>
        </div>
        <span class="reviews-rating__text">Trusted by clients who've put in the work</span>
      </div>

      <!-- Review cards -->
      <div class="reviews-grid" :class="{ 'reviews-grid--even': !expanded.includes(true) }">

        <!-- Card 1: Anonymous client -->
        <div class="review-card">
          <span class="review-card__quote" aria-hidden="true">&ldquo;</span>

          <div class="review-card__stars" aria-hidden="true">
            <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.94 7.1.62-5.4 4.7 1.64 7.24L12 17.6l-6.24 3.9 1.64-7.24-5.4-4.7 7.1-.62L12 2z"/>
            </svg>
          </div>

          <p
            class="review-card__body"
            :class="{ 'review-card__body--clamped': !expanded[0] }"
            :ref="el => setBodyRef(el, 0)"
          >
            After an indulgent festive period and a tough start to 2025, I knew it was time to get back on track and hit the gym. I hadn't trained consistently since before university - four years of excuses like &ldquo;I don't have time&rdquo; or &ldquo;playing football is enough exercise.&rdquo; How wrong I was.
            <br><br>
            At the end of January, I reached out to Zac about my poor eating habits and hectic schedule. He put together a tailored plan that included swapping out unhealthy snacks, eating nutritious meals, and fitting in four gym sessions a week. The results are already showing, and I'm excited to see how much progress I can make before summer.
            <br><br>
            If you're looking to kick-start your fitness journey, I can't recommend Zac enough. He's been there every step of the way - offering advice on nutrition, training form, and even adjusting my plan to fit my gym's limited equipment. If you're serious about making a change, Zac is the man.
          </p>

          <button v-if="overflowing[0]" type="button" class="review-card__toggle" @click="toggle(0)">
            {{ expanded[0] ? 'Show less' : 'Show more' }}
          </button>

          <div class="review-card__footer">
            <span class="review-card__name">Verified Client</span>
          </div>
        </div>

        <!-- Card 2: Fabio -->
        <div class="review-card">
          <span class="review-card__quote" aria-hidden="true">&ldquo;</span>

          <div class="review-card__stars" aria-hidden="true">
            <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.94 7.1.62-5.4 4.7 1.64 7.24L12 17.6l-6.24 3.9 1.64-7.24-5.4-4.7 7.1-.62L12 2z"/>
            </svg>
          </div>

          <p
            class="review-card__body"
            :class="{ 'review-card__body--clamped': !expanded[1] }"
            :ref="el => setBodyRef(el, 1)"
          >
            You really helped me bro. I was working 10+ hours a day and could never find the time for working out and eating my meals. I thought I wouldn't be able to gain weight.
            <br><br>
            But after a few weeks of working with you, you really helped me dial in the consistency. You made it effortless. So thank you Zac. I can't thank you enough.
          </p>

          <button v-if="overflowing[1]" type="button" class="review-card__toggle" @click="toggle(1)">
            {{ expanded[1] ? 'Show less' : 'Show more' }}
          </button>

          <div class="review-card__footer">
            <span class="review-card__name">Fabio</span>
          </div>
        </div>

        <!-- Card 3: Anonymous client -->
        <div class="review-card">
          <span class="review-card__quote" aria-hidden="true">&ldquo;</span>

          <div class="review-card__stars" aria-hidden="true">
            <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.94 7.1.62-5.4 4.7 1.64 7.24L12 17.6l-6.24 3.9 1.64-7.24-5.4-4.7 7.1-.62L12 2z"/>
            </svg>
          </div>

          <p
            class="review-card__body"
            :class="{ 'review-card__body--clamped': !expanded[2] }"
            :ref="el => setBodyRef(el, 2)"
          >
            Zac is a very knowledgeable and expert PT. I've been following his advice and strength training plan and I have noticed significant results already. I'm feeling stronger and fitter each session.
          </p>

          <button v-if="overflowing[2]" type="button" class="review-card__toggle" @click="toggle(2)">
            {{ expanded[2] ? 'Show less' : 'Show more' }}
          </button>

          <div class="review-card__footer">
            <span class="review-card__name">Verified Client</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'

const expanded = reactive([false, false, false])
const overflowing = reactive([false, false, false])
const bodyEls = []

function setBodyRef(el, i) {
  if (el) bodyEls[i] = el
}

function toggle(i) {
  expanded[i] = !expanded[i]
}

onMounted(async () => {
  await nextTick()
  bodyEls.forEach((el, i) => {
    if (el && el.scrollHeight > el.clientHeight + 1) {
      overflowing[i] = true
    }
  })
})
</script>

<style scoped>
/* =============================================
   SECTION
============================================= */
.reviews {
  position: relative;
  padding: 5.5rem 0;
  background: var(--color-bg-soft);
  overflow: hidden;
}

/* Oversized decorative quote mark */
.reviews-bg-quote {
  position: absolute;
  top: -4rem;
  right: -1rem;
  font-family: var(--font-display);
  font-size: clamp(16rem, 30vw, 26rem);
  line-height: 1;
  color: rgba(192, 57, 43, 0.05);
  pointer-events: none;
  user-select: none;
}

.reviews-inner {
  position: relative;
  z-index: 1;
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
.reviews-heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.9;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.reviews-heading span {
  color: var(--color-red);
}

.reviews-sub {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
}

/* =============================================
   RATING SUMMARY
============================================= */
.reviews-rating {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 3.5rem;
}

.reviews-rating__stars {
  display: flex;
  gap: 0.2rem;
  color: var(--color-red);
}

.reviews-rating__text {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
}

/* =============================================
   GRID
============================================= */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

/* Equal-height cards while all are collapsed; once one expands the others
   keep their own height instead of stretching with empty space */
.reviews-grid--even {
  align-items: stretch;
}

/* =============================================
   CARD
============================================= */
.review-card {
  position: relative;
  background: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-left: 2px solid var(--color-red);
  border-radius: 2px;
  padding: 2.5rem 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.review-card:hover {
  border-color: rgba(192, 57, 43, 0.3);
  border-left-color: var(--color-red);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  transform: translateY(-3px);
}

.review-card__quote {
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  font-family: var(--font-display);
  font-size: 5rem;
  line-height: 1;
  color: rgba(192, 57, 43, 0.16);
  pointer-events: none;
  user-select: none;
}

.review-card__stars {
  display: flex;
  gap: 0.2rem;
  color: var(--color-red);
}

.review-card__body {
  font-size: 0.92rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  flex: 1;
}

/* flex: none stops the clamped text stretching to fill the card when its
   neighbour in the row is expanded (which revealed the hidden lines) */
.review-card__body--clamped {
  flex: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}

.review-card__toggle {
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-red);
  cursor: pointer;
  transition: color 0.2s ease;
}

.review-card__toggle:hover {
  color: var(--color-red-hover);
}

.review-card__footer {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.review-card__name {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text);
}

/* =============================================
   RESPONSIVE
============================================= */
@media (max-width: 900px) {
  .reviews-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }

  .reviews-bg-quote {
    top: -2rem;
    right: -2rem;
    font-size: clamp(10rem, 40vw, 16rem);
  }
}

@media (max-width: 480px) {
  .reviews {
    padding: 3.5rem 0;
  }

  .review-card {
    padding: 2.25rem 1.5rem 1.75rem;
  }

  .review-card__quote {
    font-size: 4rem;
    right: 1.25rem;
  }
}
</style>
