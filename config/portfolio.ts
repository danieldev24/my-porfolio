export type ExperienceItem = {
  company: string
  period: string
  role: string
  summary: string
  url: string
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
}
