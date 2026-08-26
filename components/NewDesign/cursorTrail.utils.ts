const SCRAMBLE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#*@?'

export const SPAWN_INTERVAL = 72
export const MAX_TAGS = 28

export const randomBetween = (minimum: number, maximum: number): number =>
  minimum + Math.random() * (maximum - minimum)

const randomCharacter = (): string =>
  SCRAMBLE_CHARACTERS[Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length)]

export const scrambleWord = (
  word: string,
  resolvedCharacters: number
): string =>
  word
    .split('')
    .map((character, index) => {
      if (character === ' ' || index < resolvedCharacters) {
        return character
      }

      return randomCharacter()
    })
    .join('')
