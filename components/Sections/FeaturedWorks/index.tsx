import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at personal projects, freelance and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Crypto Wallet!"
            src="/works/cryptowallet.png"
            description="Cross Platform for crypto to show off their
          information about your coin and market. I was incharge of cross platform, made using React Native, Axios and Redux."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/danieldev24/Crypto_Wallet_React_Native"
            objectPosition="left 30%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Poro"
            description="Poro is a smart tool to help you be productive at work based on Podomoro. I am incharge of Android using Kotlin"
            src="/works/poro.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/danieldev24/Poro"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Currency"
            description="A crypto currency, I made as research project. Android were powered by Jetpack Compose and Clean Architecture."
            src="/works/currency.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/danieldev24/CryptoCurrency"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Tesla Connect"
            description="A Concept Tesla'car manage. I was working with cross platform using Flutter"
            src="/works/tesla.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/danieldev24/Tesla-Connect"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
