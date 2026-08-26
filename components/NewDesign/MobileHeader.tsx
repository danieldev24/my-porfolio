import { useEffect, useRef, useState } from 'react'
import { navigationItems } from './NavigationRail'
import ThemeControl from './ThemeControl'
import styles from './portfolio.module.css'

const MobileHeader = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !isOpen) {
        return
      }
      setIsOpen(false)
      toggleRef.current?.focus()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={styles.mobileHeader}>
      <a
        className={styles.mobileBrand}
        href="#top"
        aria-label="Hoang Son, home"
      >
        HS<span>/24</span>
      </a>
      <button
        ref={toggleRef}
        className={styles.menuToggle}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">{isOpen ? '×' : '≡'}</span>
      </button>

      {isOpen && (
        <div id="mobile-navigation" className={styles.mobileMenu}>
          <nav aria-label="Mobile navigation">
            <ol>
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    <span>{item.index}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className={styles.mobileTheme}>
            <span>Theme</span>
            <ThemeControl />
          </div>
        </div>
      )}
    </header>
  )
}

export default MobileHeader
