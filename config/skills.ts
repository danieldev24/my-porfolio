import { IconType } from 'react-icons'
import {
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiMongodb,
  SiSocketdotio,
  SiFramer,
  SiGit,
  SiVisualstudiocode,
  SiKotlin,
  SiMariadb,
  SiAndroidstudio,
  SiXcode,
  SiFlutter,
  SiAndroid,
  SiJunit5,
  SiFirebase,
  SiSqlite,
  SiSwift,
  SiChakraui,
  SiUikit,
} from 'react-icons/si'
import { FaSourcetree, FaJava } from 'react-icons/fa'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  mobile: [
    {
      name: 'Android (Kotlin)',
      icon: SiKotlin,
    },
    {
      name: 'Android (Java)',
      icon: SiAndroid,
    },
    {
      name: 'Flutter',
      icon: SiFlutter,
    },
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Unit Test (Espresso)',
      icon: SiJunit5,
    },
    {
      name: 'Swift',
      icon: SiSwift,
    },
    {
      name: 'Jetpack Compose',
      icon: SiAndroid,
    },
  ],
  backend: [
    {
      name: 'Java Spring',
      icon: FaJava,
    },
    {
      name: 'NodeJS',
      icon: SiNodedotjs,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
  ],
  database: [
    {
      name: 'MariaSQL',
      icon: SiMariadb,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'FireBase',
      icon: SiFirebase,
    },
    {
      name: 'Room',
      icon: SiSqlite,
    },
    {
      name: 'SocketIO',
      icon: SiSocketdotio,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'MaterialUI',
      icon: SiUikit,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
  ],
  'productivity boost': [
    {
      name: 'Android Studio',
      icon: SiAndroidstudio,
    },
    {
      name: 'Xcode',
      icon: SiXcode,
    },
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
