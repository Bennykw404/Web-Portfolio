import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  Stack,
  Flex,
  Button,
  Divider,
  Text,
  Icon,
} from '@chakra-ui/react'
import { TextUnderline } from '@/components/TextUnderline'
import { IoCheckmarkSharp } from 'react-icons/io5'
import React from 'react'
import Image from 'next/image'

const Feature: React.FC<React.PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <Stack direction={'row'} align={'center'} {...rest}>
      <Icon as={IoCheckmarkSharp} color={'green.400'} w={5} h={5} />
      <Text color={'gray.500'} fontWeight={600}>
        {children}
      </Text>
    </Stack>
  )
}

export const About = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} id={'section_about'}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={'h3'} textAlign={'center'} mb={{ base: 8, sm: 14 }}>
          About <TextUnderline> Me</TextUnderline>
        </Heading>
        <Stack
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Flex flex={1} justify={'center'} position={'relative'} w={'full'}>
            <Box
              position={'relative'}
              rounded={'2xl'}
              boxShadow={'0 5px 10px rgba(0, 0, 0, 0.6)'}
              overflow={'hidden'}
              width={'xs'}
              height={'auto'}
            >
              <Image
                alt={'Hero Image'}
                layout={'fill'}
                objectFit={'cover'}
                src={'/images/dev-ed-wave.png'}
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={3}>
            <Heading
              as={'h2'}
              fontWeight={600}
              fontSize={{ base: '2xl', lg: '4xl' }}
            >
              Muhamad Syabaini
            </Heading>
            <Text
              as={'span'}
              color={'red.400'}
              fontSize={{ base: 'lg', lg: 'xl' }}
            >
              A Lead Fullstack Web Developer based in Indonesia
            </Text>
            <Text color={'gray.500'}>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </Text>
            <Divider />
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 6, sm: 12 }}
            >
              <Stack spacing={4}>
                <Feature>
                  <Text as={'span'} color={'green.400'}>
                    Age:
                  </Text>{' '}
                  23 YO
                </Feature>
                <Feature>
                  <Text as={'span'} color={'green.400'}>
                    Phone:
                  </Text>{' '}
                  +62 813-1149-6194
                </Feature>
              </Stack>
              <Stack spacing={4}>
                <Feature>
                  <Text as={'span'} color={'green.400'}>
                    Email:
                  </Text>{' '}
                  muhamadsyabaini@gmail.com
                </Feature>
                <Feature>
                  <Text as={'span'} color={'green.400'}>
                    Place:
                  </Text>{' '}
                  Pemalang Indonesia - 52362
                </Feature>
              </Stack>
            </Stack>
            <Stack
              spacing={{ base: 12, sm: 12 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}
              >
                Download CV
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
