let bound = false

export function usePageScroll() {
  const scrollY = useState('page-scroll-y', () => 0)
  const loaded = useState('page-scroll-loaded', () => false)
  const reduceMotion = useState('page-reduce-motion', () => false)
  const menuOpen = useState('page-menu-open', () => false)
  const scrolled = computed(() => scrollY.value > 0)

  onMounted(() => {
    reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion.value)
      loaded.value = true
    else if (!loaded.value)
      window.setTimeout(() => { loaded.value = true }, 100)

    if (bound)
      return
    bound = true
    const onScroll = () => { scrollY.value = window.pageYOffset }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  function scrollToId(id: string) {
    menuOpen.value = false
    nextTick(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduceMotion.value ? 'auto' : 'smooth',
      })
    })
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: reduceMotion.value ? 'auto' : 'smooth' })
  }

  return { scrollY, loaded, reduceMotion, menuOpen, scrolled, scrollToId, scrollTop }
}
