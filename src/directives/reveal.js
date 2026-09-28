// v-reveal: fades/slides an element in the first time it scrolls into view.
// Optional value is a delay in ms, e.g. v-reveal="150", for staggering siblings.
const observer =
  typeof window !== 'undefined' && 'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
    : null

export default {
  mounted(el, binding) {
    if (!observer) return
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    el.classList.add('reveal')
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
