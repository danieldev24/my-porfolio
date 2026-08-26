import { useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styles from './portfolio.module.css'

type ThemeChoice = 'system' | 'light' | 'dark'

const choices: { label: string; value: ThemeChoice }[] = [
  { label: 'Auto', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]

const getSystemMode = (): 'light' | 'dark' =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const ThemeControl = (): JSX.Element => {
  const { setColorMode } = useColorMode()
  const [choice, setChoice] = useState<ThemeChoice>('system')

  useEffect(() => {
    const saved = window.localStorage.getItem('hs-theme-mode') as ThemeChoice
    const initial = choices.some((item) => item.value === saved)
      ? saved
      : 'system'
    setChoice(initial)
    setColorMode(initial === 'system' ? getSystemMode() : initial)
  }, [setColorMode])

  useEffect(() => {
    if (choice !== 'system') {
      return undefined
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncMode = () => setColorMode(media.matches ? 'dark' : 'light')
    media.addEventListener?.('change', syncMode)
    return () => media.removeEventListener?.('change', syncMode)
  }, [choice, setColorMode])

  const selectTheme = (nextChoice: ThemeChoice) => {
    setChoice(nextChoice)
    window.localStorage.setItem('hs-theme-mode', nextChoice)
    setColorMode(nextChoice === 'system' ? getSystemMode() : nextChoice)
  }

  return (
    <div className={styles.themeControl} role="group" aria-label="Color theme">
      {choices.map((item) => (
        <button
          key={item.value}
          type="button"
          aria-pressed={choice === item.value}
          onClick={() => selectTheme(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default ThemeControl
