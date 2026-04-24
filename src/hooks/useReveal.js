import { useEffect, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // animate skill bars inside
            entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
              bar.classList.add('animated')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    // stagger children inside sections
    document.querySelectorAll('section').forEach((sec) => {
      sec.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`
      })
    })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
