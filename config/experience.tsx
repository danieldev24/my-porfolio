import { Link } from '@chakra-ui/react'

export type Company = 'TYME' | 'ATMAN' | 'THL'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  TYME: {
    name: 'TymeX',
    longName: 'Tyme Viet Nam',
    subDetail: '',
    url: 'https://tyme.com/',
    position: 'Software Engineer',
    duration: 'Dec 2021 - Present',
    logo: {
      light: '/worked_at_logos/tyme/tymex_logo_light.png',
      dark: '/worked_at_logos/tyme/tymex_logo_dark.png',
    },
    roles: [
      <>
        Worked on revamping a legacy partner portal into the new{' '}
        <Link
          aria-label="GoTyme Bank"
          href="https://play.google.com/store/search?q=gotyme+bank&c=apps&hl=en&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          GoTyme Bank
        </Link>{' '}
        and{' '}
        <Link
          aria-label="TymeKiosk"
          href="https://www.red-dot.org/ko/project/gotyme-bank-kiosk-66715"
          target="_blank"
          rel="noreferrer"
        >
          Tyme Kiosk
        </Link>{' '}
        experience, refactoring legacy structures toward a cleaner architecture.
      </>,
      <>
        Owned the Origination & Customer domain (new customer registration/onboarding) and delivered customer-facing improvements for a large-scale banking app.
      </>,
      <>
        Currently own the Android Design System built with Jetpack Compose, used across feature teams and markets to improve UI consistency and development speed.
      </>,
      <>
        Set up snapshot testing for Compose components to prevent visual regressions and improve release confidence.
      </>,
      <>
        Created Design System guidelines and documentation; built a playground app for component demos,usage examples, and faster product/design alignment.
      </>,
      <>
        Built and enhanced payment features and extensions to improve user experience.
      </>,
      <>
        Maintained application stability and quality through troubleshooting, production support, and continuousimprovements; introduced workflow automation using N8N.
      </>,
      <>
        Product metrics: 20M+ users | ~98% crash-free (Firebase) | 4.4+ rating
      </>,
    ],
  },
  ATMAN: {
    name: 'Atmaneuler',
    longName: 'Atmaneuler Viet Nam',
    subDetail: '',
    url: 'https://atmaneuler.com/',
    position: 'Mobile Developer',
    duration: 'May 2020 - Dec 2021',
    logo: {
      light: '/worked_at_logos/atman/atman.png',
      dark: '/worked_at_logos/atman/atman.jpg',
    },
    roles: [
      <>
        Developed a application to provides import and export management solutions for {' '}
        <Link
          aria-label="Kstar"
          href="https://www.kstar.com/"
          target="_blank"
          rel="noreferrer"
        >
          Kstar
        </Link>{' '} using Flutter,apply GetX Pattern.
      </>,
      <>
        Developed an application to manage import and export of cloth materials at the warehouse for {' '}
        <Link
          aria-label="PungKook"
          href="http://www.pungkook.com/"
          target="_blank"
          rel="noreferrer"
        >
          PungKook WMS
        </Link>{' '} using Kotlin, applied MVVM
      </>,
      <>
        Developed an application to manage import and export of leather shoe materials at the warehouse for {' '}
        <Link
          aria-label="Hwaseung"
          href="http://hwaseunggroup.com/eng_php/index.php"
          target="_blank"
          rel="noreferrer"
        >
          Hwaseung DPS
        </Link>{' '} using Kotlin, applied MVVM
      </>,
    ],
  },
  THL: {
    name: 'THLOne',
    longName: 'THLOne',
    subDetail: 'formerly BSG ONE Inc.',
    url: 'https://www.thlone.vn/',
    position: 'R&D Developer',
    duration: 'Jan 2019 - May 2020',
    logo: {
      light: '/worked_at_logos/thl/thl.png',
      dark: '/worked_at_logos/thl/thl.jpg',
    },
    roles: [
      <>
        Developed an application for MacOS and IOS to provides solution for remote viewer (RDP Protocol)
      </>,
      <>
        Create an ecommerce system backend that provides comprehensive solutions for stores, delivery and users based on
        RESTFul API,RabbitMQ and the reciprocal interaction of the two databases MariaDB and MongoDB.
      </>,
      <>
        Hired at 2019, I'm a internship first. Shortly
        after, developed application to scan and display information <b>Beacon</b> device.Using Java and apply MVVM.
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.TYME, Experiences.ATMAN, Experiences.THL]
