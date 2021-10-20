import { Link } from '@chakra-ui/react'

export type Company = 'NEO' | 'ATMAN' | 'THL'

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
  NEO: {
    name: 'Neo Consulting',
    longName: 'Neo Consulting',
    subDetail: '',
    url: 'https://neoconsulting.com.vn/',
    position: 'Android Developer',
    duration: 'Apr 2021 - Present',
    logo: {
      light: '/worked_at_logos/neo/logo.png',
      dark: '/worked_at_logos/neo/neo.jpg',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="MSport"
          href="https://www.msport.com/ng/web/welcome"
          target="_blank"
          rel="noreferrer"
        >
          MSport
        </Link>{' '}
        using Kotlin and Java. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple Withdraw and Deposit extensions to improve payment process
        better.
      </>,
      <>
        Upgrading application structure, receiving and fulfilling customer requests. Application maintenance and troubleshooting.
      </>,
    ],
  },
  ATMAN: {
    name: 'Atmaneuler',
    longName: 'Atmaneuler Viet Nam',
    subDetail: '',
    url: 'https://atmaneuler.com/',
    position: 'Mobile Developer',
    duration: 'Jun 2020 - Apr 2021',
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
      Developed a application to manage import and export of cloth materials at the warehouse for {' '}
      <Link
        aria-label="PungKook"
        href="http://www.pungkook.com/"
        target="_blank"
        rel="noreferrer"
      >
        PungKook WMS
      </Link>{' '} using Kotlin,apply MVVM
    </>,
      <>
        Developed a application to manage import and export of leather shoe materials at the warehouse for {' '}
        <Link
          aria-label="Hwaseung"
          href="http://hwaseunggroup.com/eng_php/index.php"
          target="_blank"
          rel="noreferrer"
        >
          Hwaseung DPS
        </Link>{' '} using Kotlin,apply MVVM
      </>,
    ],
  },
  THL: {
    name: 'THLOne',
    longName: 'THLOne',
    subDetail: 'formerly BSG ONE Inc.',
    url: 'https://www.thlone.vn/',
    position: 'R&D Developer',
    duration: 'Mar 2019 - Jun 2020',
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

export const ExperiencesList = [Experiences.NEO, Experiences.ATMAN,Experiences.THL]
