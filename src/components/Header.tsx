'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n'
import { useTheme } from '@/lib/theme-provider'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const { lang, setLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group min-w-0">
            <svg viewBox="0 0 60 60" className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
              <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
              <text x="8" y="40" fontSize="26" fill="currentColor" className="text-foreground" style={{fontFamily: 'Georgia, serif'}}>21</text>
              <line x1="12" y1="48" x2="48" y2="48" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
            </svg>
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-tight text-foreground group-hover:text-muted transition-colors truncate">
              21Stable
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/produkte" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors duration-200 whitespace-nowrap">
              {lang === 'de' ? 'Produkte' : 'Services'}
            </Link>
            <Link href="/blog" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors duration-200 whitespace-nowrap">
              Blog
            </Link>
            <Link href="/team" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors duration-200 whitespace-nowrap">
              {lang === 'de' ? 'Team' : 'Team'}
            </Link>
            <Link href="/kontakt" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors duration-200 whitespace-nowrap">
              {lang === 'de' ? 'Kontakt' : 'Contact'}
            </Link>
            
            {/* Theme Toggle */}
            <div className="w-px h-4 bg-border" />
            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {!mounted ? <span className="w-4 h-4 block" /> : theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')} 
              className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors duration-200 border border-border px-2 py-1 rounded whitespace-nowrap"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:bg-surface rounded-lg transition-colors flex-shrink-0 z-50 relative"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation - Full Screen Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="md:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-background z-50 shadow-2xl border-l border-border">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <span className="font-serif text-lg text-foreground">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:bg-surface rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-6 py-8 flex flex-col gap-4 overflow-y-auto">
                <Link 
                  href="/produkte" 
                  className="text-base font-medium text-foreground hover:text-muted transition-colors py-3 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === 'de' ? 'Produkte' : 'Services'}
                </Link>
                <Link 
                  href="/blog" 
                  className="text-base font-medium text-foreground hover:text-muted transition-colors py-3 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/team" 
                  className="text-base font-medium text-foreground hover:text-muted transition-colors py-3 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === 'de' ? 'Team' : 'Team'}
                </Link>
                <Link 
                  href="/kontakt" 
                  className="text-base font-medium text-foreground hover:text-muted transition-colors py-3 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === 'de' ? 'Kontakt' : 'Contact'}
                </Link>
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="py-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted uppercase tracking-wider">
                      {lang === 'de' ? 'Modus' : 'Mode'}
                    </span>
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-all duration-200"
                      aria-label="Switch theme"
                    >
                      {!mounted ? <span className="w-5 h-5 block" /> : theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                {/* Language Switcher */}
                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-xs text-muted uppercase tracking-wider mb-3">
                    {lang === 'de' ? 'Sprache' : 'Language'}
                  </p>
                  <button 
                    onClick={() => setLang(lang === 'de' ? 'en' : 'de')} 
                    className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-surface rounded-lg transition-colors border border-border"
                  >
                    {lang === 'de' ? 'English (EN)' : 'Deutsch (DE)'}
                  </button>
                </div>
              </nav>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border bg-surface">
                <p className="text-xs text-muted text-center">
                  © 2025 21Stable
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}