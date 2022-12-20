import { Box, Center, Stack, Text, Image, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

import { Skill } from 'data/Skills/types'

interface Props {
  skill: Skill
}

const SkillCard: FC<Props> = ({ skill }) => {
  const bgHover =useColorModeValue('gray.100', 'gray.900')
  return (
    <Box
      p={6}
      maxW={'248px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.700')}
      _hover={{ bg: bgHover, boxShadow: '2xl', transform: 'translateY(-10px)' }}
      rounded={'lg'}
      color={useColorModeValue('gray.700', 'white')}
      pos={'relative'}
      zIndex={1}
    >
        <Image
          objectFit={'cover'}
          src={skill.icon}
          alt={skill.name}
        />
      <Stack pt={'4'} align={'center'}>
        <Text fontSize={'lg'} fontFamily={'body'} fontWeight={400}>
          {skill.name}
        </Text>
      </Stack>
    </Box>
  )
}

export default SkillCard
{/* <Paper
      shadow='sm'
      radius='lg'
      p='xl'
      className={classes.card}
      title={skill.name}
    >
      <Box
        sx={{
          position: 'relative',
          height: 100,
          width: 100,
          margin: '0 auto',
        }}
      >
        <Image
          src={`/images/tech/${skill.icon}`}
          layout='fill'
          objectFit='contain'
          alt={skill.name}
          style={{
            pointerEvents: 'none',
          }}
          priority={skill.category === 'Language'}
        />
      </Box>
    </Paper> */}