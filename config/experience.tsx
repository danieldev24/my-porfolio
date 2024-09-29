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
    name: 'Tyme',
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
        Revamping the legacy partner portal into a new{' '}
        <Link
          aria-label="TymeBank"
          href="https://play.google.com/store/apps/details?id=consumer.cbsa.smartapp&hl=en&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          Tyme Bank
        </Link>{' '}
        and{' '}
        <Link
          aria-label="TymeKiosk"
          href="https://www.tyme.com/tymekiosk/"
          target="_blank"
          rel="noreferrer"
        >
          Tyme Kiosk
        </Link>{' '}
        using Kotlin and Java. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple payment feature and extensions to improve user experience.
      </>,
      <>
        Upgrading application structure, receiving and fulfilling customer requests. Application maintenance and troubleshooting.
      </>,
      <>
        Using Jetpack compose to create the Design System.
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
