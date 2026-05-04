import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#hero" className="font-head font-extrabold text-lg text-dark no-underline">AB.</a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {['About', 'Experience', 'Projects', 'Quiz'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-500 hover:text-accent transition-colors no-underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
          Let's talk
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-dark rounded" />
          <span className="block w-5 h-0.5 bg-dark rounded" />
          <span className="block w-5 h-0.5 bg-dark rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-bg px-6 py-4 flex flex-col gap-3">
          {['About', 'Experience', 'Projects', 'Quiz', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors no-underline"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
