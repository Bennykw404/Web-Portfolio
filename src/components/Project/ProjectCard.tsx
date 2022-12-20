import {
  Heading,
  Box,
  Text,
  Stack,
  Link,
  useColorModeValue,
  IconButton,
  Image
} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { FC } from 'react'
import { HiExternalLink } from 'react-icons/hi'

import { Project } from 'data/Projects/type'
import { skills } from 'data/Skills/skills'

interface Props {
  project: Project
}

const ProjectCard: FC<Props> = ({ project }) => {
  const bgHover =useColorModeValue('gray.100', 'gray.900')
  return (
    <Box
      w={'full'}
      bg={useColorModeValue('white', 'gray.700')}
      _hover={{ bg: bgHover, boxShadow: '2xl', transform: 'translateY(-10px)'}}
      rounded={'lg'}
      color={useColorModeValue('gray.700', 'white')}
      p={6}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Heading as="h3" size="md">
          {project.name}
        </Heading>
        <Box display={'flex'} alignItems={'center'}>
          {project.link.github && (
            <Link href={project.link.github} target="_blank">
              <Box
                className={`umami--click--${project.name.replaceAll(
                  ' ',
                  '-'
                )}-Source_Code`}
                title="Source Code"
              >
                <IconButton
                  aria-label="Search database"
                  variant="ghost"
                  icon={<BsGithub size={24} />}
                  _hover={{ bg: '#DCE2FF' }}
                  size={'lg'}
                />
              </Box>
            </Link>
          )}
          {project.link.demo && (
            <Link href={project.link.demo} target="_blank">
              <Box
                className={`umami--click--${project.name.replaceAll(
                  ' ',
                  '-'
                )}-Demo`}
                title="Demo"
              >
                <IconButton
                  aria-label="Search database"
                  variant="ghost"
                  icon={<HiExternalLink size={24} />}
                  _hover={{ bg: '#DCE2FF' }}
                  size={'lg'}
                />
              </Box>
            </Link>
          )}
        </Box>
      </Box>
      <Text color={useColorModeValue('gray.700', 'gray.400')} my={'4'} align={'start'}>
        {project.desc}
      </Text>

      <Stack align={'center'} justify={'start'} direction={'row'}>
        {skills
          .filter((skill) => project.tech.includes(skill.name))
          .map((skill) => (
            <Box
              key={skill.name}
              sx={{ position: 'relative', height: 25, width: 25 }}
              title={skill.name}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
              />
            </Box>
          ))}
      </Stack>
    </Box>
  )
}

export default ProjectCard
