import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDev,
  FaDownload,
  FaFileDownload,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hhoang_sson/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hoangson24198/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/danieldev24',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/sondaniel',
    icon: FaDev,
  },
]
