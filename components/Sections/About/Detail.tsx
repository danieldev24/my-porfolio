import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiKotlin,
  SiFlutter,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('orange.500', 'cyan.400')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2019

  return (
    <Stack width={{ base: '100%', lg: '70%' }} spacing={{ base: 6, xl: 8 }}>
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I`ve been coding professionally for over {professionalYears} years now
        and currently working as a <b>Mobile Developer</b> that focuses on{' '}
        <b>Android</b>,{' '}
        <Tooltip
          label="Ha!. I focus on Flutter with GetX Pattern"
          aria-label="Cross PlatForm?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>Cross Platform</b>
          </Text>
        </Tooltip>{' '}
        and even <b>a little bit Backend</b> stuff now, how time flies!
        <br /> <br />
        Here are few technologies that are cup of my{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiKotlin} color={emphasis} fontSize="2em" />
            Kotlin
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaJava} color={emphasis} fontSize="2em" />
            Java
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiFlutter} color={emphasis} fontSize="2em" />
            Flutter
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            NodeJS
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
