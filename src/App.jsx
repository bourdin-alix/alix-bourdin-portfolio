import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Quiz from './components/Quiz'
import Contact from './components/Contact'

export default function App() {
  // Scroll reveal + skill bar animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
              bar.classList.add('animated')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    // Stagger siblings within each section
    document.querySelectorAll('section').forEach((sec) => {
      sec.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`
      })
    })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Hobbies />
        <Quiz />
        <Contact />
      </main>
    </>
  )
}
