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
import { TextUnderline } from "@/components/TextUnderline";
import { skillCategories } from "data/Skills/skillCategories";
import { skills } from "data/Skills/skills";
import SkillCard from "@/components/Skill/SkillCard";

export const Skill = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} id={"section_skill"}>
      <Container maxW={"7xl"} pt={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={"h3"} textAlign={"center"} mb={{ base: 14, sm: 16 }}>
          Skills & <TextUnderline>Abilities</TextUnderline>
        </Heading>
        <Box maxW={"7xl"} p={4} mt={4}>
          <Tabs
            align="center"
            variant="soft-rounded"
            colorScheme="green"
            isFitted
            size={{ base: "sm", lg: "lg" }}
          >
            <TabList>
              {skillCategories.map((category) => (
                <Tab key={category}>{category}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {skillCategories.map((category) => (
                <TabPanel p={4} key={category}>
                  <Stack mt={"8"}>
                    <SimpleGrid
                      columns={{ base: 2, md: 3, lg: 4 }}
                      spacing={10}
                    >
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <SkillCard skill={skill} key={skill.name} />
                        ))}
                    </SimpleGrid>
                  </Stack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};
