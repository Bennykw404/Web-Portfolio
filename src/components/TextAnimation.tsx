import { ReactNode } from 'react'
import { Box, keyframes, useColorModeValue } from '@chakra-ui/react'

interface TextUnderlineProps {
  children: ReactNode
}
const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`
export const TextAnimation = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={'span'}
      display={'inline-block'}
      transformOrigin={'70% 70%'}
      animation={`${animation} infinite 2.5s`}
    >
      {children}
    </Box>
  )
}
