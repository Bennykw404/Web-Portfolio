import {
  Container,
  Icon,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { NAV_ITEMS, NavItem } from '@/components/Header/navData';
import {
  ANALYTICS_LINK,
  FACEBOOK_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  INSTAGRAM_LINK_BENNY,
  BUY_ME_A_COFFEE_LINK,
} from '../constants';
import { Logo } from '@/components/Logo';
import { ReactNode } from 'react';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: FACEBOOK_LINK,
  },
  {
    label: 'GitHub',
    href: GITHUB_LINK,
  },
  {
    label: 'Instagram Account',
    href: INSTAGRAM_LINK,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>More</ListHeader>
            {NAV_ITEMS.map((navItem) => (
              <NextLink
                key={navItem.label}
                passHref
                href={navItem.href ?? '#'}>
                <Link>{navItem.label}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Analytics</ListHeader>
            <Link href={ANALYTICS_LINK}>Public Statistics</Link>
            <Link href="/">
              <NextImage
                src={useColorModeValue(
                  'https://splitbee.io/splitbee-badge.svg',
                  'https://splitbee.io/splitbee-badge-dark.svg'
                )}
                width={114}
                height={45}
                alt="Splitbee Analytics"
              />
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support us</ListHeader>
            <Link href={BUY_ME_A_COFFEE_LINK}>
              <NextImage
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                height={40}
                width={142.47}
              />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <NextLink href={'/'} passHref>
            <Link>
              <Icon as={Logo} w={{ base: 12 }} h={{ base: 12 }} />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Made on the Internet by{' '}
          <Link href={INSTAGRAM_LINK_BENNY}>Muhamad Syabaini</Link>
        </Text>
      </Box>
    </Box>
  );
};