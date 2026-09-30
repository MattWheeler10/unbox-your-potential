<template>
  <section id="reviews" class="reviews">

    <!-- Decorative oversized quote mark -->
    <span class="reviews-bg-quote" aria-hidden="true">&rdquo;</span>

    <div class="container reviews-inner">

      <!-- Section label -->
      <div class="section-tag" v-reveal>
        <div class="section-tag__bar"></div>
        <span class="section-tag__label">Reviews</span>
      </div>

      <!-- Heading -->
      <h2 class="reviews-heading" v-reveal="80">Real People. <span>Real Results.</span></h2>
      <p class="reviews-sub" v-reveal="160">Don't just take my word for it</p>

      <!-- Rating summary -->
      <div class="reviews-rating" v-reveal="200">
        <div class="reviews-rating__stars" aria-hidden="true">
          <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.94 7.1.62-5.4 4.7 1.64 7.24L12 17.6l-6.24 3.9 1.64-7.24-5.4-4.7 7.1-.62L12 2z"/>
          </svg>
        </div>
        <span class="reviews-rating__text">Trusted by clients who've put in the work</span>
      </div>

      <!-- Review cards -->
      <div v-reveal="240">
      <div class="reviews-grid" :class="{ 'reviews-grid--even': !expanded.includes(true) }">
        <div
          v-for="(review, i) in reviews"
          v-show="showAll || i < INITIAL_DESKTOP"
          :key="review.name + i"
          class="review-card"
          :class="{ 'review-card--extra-mobile': !showAll && i >= INITIAL_MOBILE }"
        >
          <span class="review-card__quote" aria-hidden="true">&ldquo;</span>

          <div class="review-card__stars" aria-hidden="true">
            <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.94 7.1.62-5.4 4.7 1.64 7.24L12 17.6l-6.24 3.9 1.64-7.24-5.4-4.7 7.1-.62L12 2z"/>
            </svg>
          </div>

          <p
            class="review-card__body"
            :class="{ 'review-card__body--clamped': !expanded[i] }"
            :ref="el => setBodyRef(el, i)"
          >
            <template v-for="(para, p) in review.paragraphs" :key="p">
              <template v-if="p > 0"><br><br></template>{{ para }}
            </template>
          </p>

          <button v-if="overflowing[i]" type="button" class="review-card__toggle" @click="toggle(i)">
            {{ expanded[i] ? 'Show less' : 'Show more' }}
          </button>

          <div class="review-card__footer">
            <span class="review-card__name">{{ review.name }}</span>
          </div>
        </div>
      </div>
      </div>

      <!-- Show all -->
      <div v-if="reviews.length > INITIAL_MOBILE" class="reviews-more" :class="{ 'reviews-more--mobile-only': reviews.length <= INITIAL_DESKTOP }">
        <button type="button" class="reviews-more__btn" :aria-expanded="showAll.toString()" @click="toggleAll">
          {{ showAll ? 'Show fewer reviews' : `Show all ${reviews.length} reviews` }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'

// Cards shown before "Show all" — fewer on mobile where cards stack
const INITIAL_DESKTOP = 6
const INITIAL_MOBILE = 3

// Ordered to lead with short, results-focused reviews and a spread of
// ages/backgrounds; longer stories sit further down
const reviews = [
  {
    name: 'Natasha',
    paragraphs: [
      'Since starting PT with Zac, I’m much stronger and leaner. The results I’ve seen in three months are more than the past three years of gym-going. He’s knowledgeable, dedicated to getting the best out of his clients and I would highly recommend.',
    ],
  },
  {
    name: 'Kathy H',
    paragraphs: [
      'As a 58 year old, completely new to the gym world, I would have felt completely intimidated and out of my depth if it wasn’t for Zac. He listens to what I want to achieve, plans appropriate routines that I can build on, with him, or on my own, pushing me at an acceptable pace, and all delivered with a professional, personable and friendly approach. After 2 months I already feel stronger and fitter, which is fantastic. I would definitely recommend him as a personal trainer to anyone.',
    ],
  },
  {
    name: 'Ben',
    paragraphs: [
      'Zac has helped me make a huge amount of progress with both my fitness and confidence. He created a training plan to achieve my personal goals and because of that I’ve been able to build muscle, lose body fat and gain strength.',
      'Zac is very knowledgeable and doesn’t just tell me what I need to do, he explains why I need to do it and the benefits each exercise has. He pushes me to achieve more than I think I can and the results so far have been better than I expected.',
    ],
  },
  {
    name: 'Tahera',
    paragraphs: [
      'I’ve really enjoyed my sessions with Zac and always look forward to training with him. He regularly gives me helpful feedback on my progress and tailors my programme as I improve and move forward. In just two months, I’ve already noticed great results, which is especially impressive for me in my late 40s. Zac is knowledgeable, supportive and motivating, and I’m really pleased with my progress so far!',
    ],
  },
  {
    name: 'Nick',
    paragraphs: [
      'After being very inconsistent with the gym for several years, I decided to ask Zac for some help locking in. We started using my company’s gym and Zac was able to create me a full plan using the limited equipment on offer.',
      'I eventually moved into a larger gym, and he was able to alter the plan accordingly, changing some exercises to prevent tediousness whilst also making sure I hit the right muscle groups twice a week.',
      'Zac has consistently stayed in touch with me for tips (both in and out of the gym), progress reports, and for if I had any feedback for him. We’d even sometimes train together which seriously pushed me to my limits.',
      'Over the time spent training under Zac’s guidance, my physical and mental health have reached levels I didn’t regard as possible at some points, which has also allowed my confidence to increase significantly.',
      'I can’t recommend Zac enough if you are looking for honest but efficient training advice.',
    ],
  },
  {
    name: 'Emily',
    paragraphs: [
      'I’ve been working with Zac for a few months now and the results have exceeded my expectations. He’s been great, helping me find my feet at the gym, he’s always upbeat, pushing me to do my best and sessions are always well constructed and fun.',
    ],
  },
  {
    name: 'Chris',
    paragraphs: [
      'After an indulgent festive period and a tough start to 2025, I knew it was time to get back on track and hit the gym. I hadn’t trained consistently since before university - four years of excuses like “I don’t have time” or “playing football is enough exercise.” How wrong I was.',
      'At the end of January, I reached out to Zac about my poor eating habits and hectic schedule. He put together a tailored plan that included swapping out unhealthy snacks, eating nutritious meals, and fitting in four gym sessions a week. The results are already showing, and I’m excited to see how much progress I can make before summer.',
      'If you’re looking to kick-start your fitness journey, I can’t recommend Zac enough. He’s been there every step of the way - offering advice on nutrition, training form, and even adjusting my plan to fit my gym’s limited equipment. If you’re serious about making a change, Zac is the man.',
    ],
  },
  {
    name: 'Fabio',
    paragraphs: [
      'You really helped me bro. I was working 10+ hours a day and could never find the time for working out and eating my meals. I thought I wouldn’t be able to gain weight.',
      'But after a few weeks of working with you, you really helped me dial in the consistency. You made it effortless. So thank you Zac. I can’t thank you enough.',
    ],
  },
  {
    name: 'Nick',
    paragraphs: [
      'Zac is a very knowledgeable and expert PT. I’ve been following his advice and strength training plan and I have noticed significant results already. I’m feeling stronger and fitter each session.',
    ],
  },
]

const expanded = reactive(reviews.map(() => false))
const overflowing = reactive(reviews.map(() => false))
const showAll = ref(false)
const bodyEls = []

function setBodyRef(el, i) {
  if (el) bodyEls[i] = el
}

function toggle(i) {
  expanded[i] = !expanded[i]
}

// Only visible cards can be measured, so re-check whenever more are shown
function measureOverflow() {
  bodyEls.forEach((el, i) => {
    if (el && el.offsetParent !== null && !expanded[i]) {
      overflowing[i] = el.scrollHeight > el.clientHeight + 1
    }
  })
}

async function toggleAll() {
  showAll.value = !showAll.value
  await nextTick()
  measureOverflow()
}

onMounted(async () => {
  await nextTick()
  measureOverflow()
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
  -webkit-line-clamp: 6;
  line-clamp: 6;
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
   SHOW ALL
============================================= */
.reviews-more {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.reviews-more__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 0.9rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.reviews-more__btn:hover {
  border-color: rgba(192, 57, 43, 0.6);
  background: rgba(192, 57, 43, 0.08);
}

/* Only needed on mobile when desktop already shows every review */
.reviews-more--mobile-only {
  display: none;
}

/* =============================================
   RESPONSIVE
============================================= */
@media (max-width: 900px) {
  /* Stacked cards — show fewer before "Show all" */
  .review-card--extra-mobile {
    display: none;
  }

  .reviews-more--mobile-only {
    display: flex;
  }
}

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
