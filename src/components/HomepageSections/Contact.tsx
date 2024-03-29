import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { TextUnderline } from "../TextUnderline";

export default function Contact() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} id={"section_contact"}>
      <Container
        maxW={"7xl"}
        mt={0}
        centerContent
        overflow="hidden"
        pt={{ base: 14, sm: 20, md: 32 }}
      >
        <Heading as={"h3"} textAlign={"center"} mb={{ base: 14, sm: 16 }}>
          Get In <TextUnderline>Touch</TextUnderline>
        </Heading>
        <Flex>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading color={useColorModeValue("gray.900", "white")}>
                      Contact
                    </Heading>
                    <Text
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      color={useColorModeValue("gray.900", "gray.500")}
                    >
                      Silakan Hubungi Contact Di Bawah ini!
                    </Text>
                    <Box pt={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue("gray.900", "#DCE2FF")}
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        >
                          +62 813-1149-6194
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="260px"
                          variant="ghost"
                          color={useColorModeValue("gray.900", "#DCE2FF")}
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          muhamadsyabaini@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="260px"
                          variant="ghost"
                          color={useColorModeValue("gray.900", "#DCE2FF")}
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Pemalang, Indonesia - 52362
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="outline"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#DCE2FF" }}
                        icon={<MdFacebook size="28px" color="#1970F1" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="outline"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#DCE2FF" }}
                        icon={<BsGithub size="28px" color="#1970F1" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="outline"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#DCE2FF" }}
                        icon={<BsDiscord size="28px" color="#1970F1" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
