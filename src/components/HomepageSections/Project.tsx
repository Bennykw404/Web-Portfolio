import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "../Project/ProjectCard";
import { projectCategories } from "data/Projects/projectCategories";
import { projects } from "data/Projects/projects";
import { TextUnderline } from "../TextUnderline";

export const Project = () => {
  const color = useColorModeValue("gray.100", "gray.900");
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} id={"section_portfolio"}>
      <Container maxW={"7xl"} pt={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={"h3"} textAlign={"center"} mb={{ base: 14, sm: 16 }}>
          Projects <TextUnderline>Made</TextUnderline>
        </Heading>
        <Tabs
          align="center"
          variant="soft-rounded"
          colorScheme="green"
          isFitted
          size={{ base: "sm", lg: "lg" }}
        >
          <TabList>
            {projectCategories.map((category) => (
              <Tab key={category}>{category}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {projectCategories.map((category) => (
              <TabPanel p={4}>
                <Stack mt={"8"}>
                  <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <ProjectCard project={project} key={project.name} />
                      ))}
                  </SimpleGrid>
                </Stack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
