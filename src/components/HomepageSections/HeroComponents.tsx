import Image from 'next/image'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

export const HeroComponents = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <Box
      as={motion.div}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      w={{ base: 320, sm: 320, lg: 500 }}
      h={{ base: 320, sm: 320, lg: 500 }}
      position={'relative'}
      bgGradient="linear(to-b, green.400, white)"
      rounded={'full'}
      boxShadow={'0px 2px 7px 1px rgb(31 31 31 / 48%)'}
      overflow={'hidden'}
      cursor={'grab'}
    >
      <Image
        alt={'Component Placeholder'}
        src={'/images/dev-ed-wave.png'}
        layout={'fill'}
        objectFit={'cover'}
      />
    </Box>
  )
}
