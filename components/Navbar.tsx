
'use client'
import { useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-sand/70 bg-cream/70 backdrop-blur">
      <nav className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img src="/logo.png" alt="Your Café Logo" className="h-8 w-8 object-contain" />
          <div className="h-serif text-xl font-semibold">Your Café</div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium hover:text-accent">
              {l.label}
            </button>
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-cocoa mb-1"/><div className="w-6 h-0.5 bg-cocoa"/>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sand bg-cream">
          <div className="px-4 py-3 flex flex-col">
            {links.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="py-2 text-left hover:text-accent">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
