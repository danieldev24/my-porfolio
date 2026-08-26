export type ExperienceItem = {
  company: string
  period: string
  role: string
  summary: string
  url: string
}

export type ProjectItem = {
  description: string
  image: string
  name: string
  tags: string[]
  url: string
}

export type CraftItem = {
  code: string
  detail: string
  label: string
  note: string
}

export const portfolio = {
  identity: {
    name: 'Hoang Son',
    fullName: 'Le Tran Hoang Son',
    role: 'Mobile Engineer',
    location: 'Ho Chi Minh City, Vietnam',
    email: 'hoangson.shawn@gmail.com',
    cv: '/LeTranHoangSonCV.pdf',
    statement: 'I make complex mobile systems feel clear.',
    introduction:
      'A mobile engineer shaping reliable product experiences from the component API to the final interaction. I care about the details teams reuse and the moments customers remember.',
    about: [
      'I have been building mobile products since 2019, working across Android, iOS, Flutter, React Native, and backend services. That range taught me to look beyond a single screen and understand how product decisions, platform constraints, and engineering systems shape the complete experience.',
      'Today, my focus is Android and Jetpack Compose at TymeX. I help turn design language into reusable components, practical guidance, and quality loops that let teams ship consistently across products and markets.',
      'I enjoy the space between design and engineering: simplifying a component API, refining an interaction, or building tooling that removes repeated work. The goal is always the same—make complex systems easier for both the people building them and the people using them.',
    ],
    profileFacts: [
      { label: 'Based in', value: 'Ho Chi Minh City' },
      { label: 'Building since', value: '2019' },
      { label: 'Current focus', value: 'Compose design systems' },
      { label: 'Working across', value: 'Product · Design · Engineering' },
    ],
  },
  social: [
    {
      label: 'GitHub',
      shortLabel: 'GH',
      url: 'https://github.com/danieldev24',
    },
    {
      label: 'LinkedIn',
      shortLabel: 'LI',
      url: 'https://www.linkedin.com/in/hoangsonshawn/',
    },
    { label: 'Dev.to', shortLabel: 'DEV', url: 'https://dev.to/sondaniel' },
  ],
  experience: [
    {
      company: 'TymeX',
      period: '2021—NOW',
      role: 'Software Engineer · Android Design Systems',
      summary:
        'Building GoTyme Bank experiences and leading a Compose design system used across teams and markets. Introduced component guidance, a playground app, and snapshot testing for safer releases.',
      url: 'https://tyme.com/',
    },
    {
      company: 'Atmaneuler',
      period: '2020—2021',
      role: 'Mobile Developer',
      summary:
        'Delivered Kotlin and Flutter warehouse products for manufacturing clients, turning complex inventory workflows into focused mobile tools.',
      url: 'https://atmaneuler.com/',
    },
    {
      company: 'THLOne',
      period: '2019—2020',
      role: 'R&D Developer',
      summary:
        'Worked across iOS, macOS, Android, and backend services—from remote desktop software to commerce systems and beacon-based mobile prototypes.',
      url: 'https://www.thlone.vn/',
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: 'Crypto Wallet',
      description:
        'A React Native market companion for tracking coins, balances, and changing crypto data in one focused surface.',
      image: '/works/cryptowallet.png',
      tags: ['React Native', 'Redux'],
      url: 'https://github.com/danieldev24/Crypto_Wallet_React_Native',
    },
    {
      name: 'Poro',
      description:
        'A Kotlin productivity timer that turns focused sessions into a calm, repeatable daily rhythm.',
      image: '/works/poro.png',
      tags: ['Android', 'Kotlin'],
      url: 'https://github.com/danieldev24/Poro',
    },
    {
      name: 'Currency',
      description:
        'A cryptocurrency research project built with Jetpack Compose and clean architecture.',
      image: '/works/currency.png',
      tags: ['Compose', 'Clean Architecture'],
      url: 'https://github.com/danieldev24/CryptoCurrency',
    },
    {
      name: 'Tesla Connect',
      description:
        'A Flutter concept for monitoring and controlling the essential parts of a connected car.',
      image: '/works/tesla.png',
      tags: ['Flutter', 'Concept'],
      url: 'https://github.com/danieldev24/Tesla-Connect',
    },
  ] as ProjectItem[],
  craft: [
    {
      code: '01',
      label: 'Compose systems',
      note: 'Reusable UI with a product point of view.',
      detail:
        'Component APIs, tokens, variants, guidance, previews, and snapshot tests that let feature teams move without losing consistency.',
    },
    {
      code: '02',
      label: 'Mobile architecture',
      note: 'Boundaries that survive real product pressure.',
      detail:
        'Kotlin, clean architecture, predictable state, and pragmatic module boundaries designed for change rather than diagrams.',
    },
    {
      code: '03',
      label: 'Cross-platform',
      note: 'Share decisions, not every line.',
      detail:
        'Hands-on work across React Native, Flutter, and Kotlin Multiplatform with platform fit kept in the foreground.',
    },
    {
      code: '04',
      label: 'Quality loops',
      note: 'Confidence built into the workflow.',
      detail:
        'Visual regression checks, release diagnostics, production support, and automation that shorten the distance from signal to fix.',
    },
  ] as CraftItem[],
}
