import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Efe!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React and jQuery";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={6}>
    <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
    <Heading as="h4" size="sm">
      {greeting}
    </Heading>
    <Heading as="h1" size="2xl">
      {bio1}
    </Heading>
    <Heading as="h1" size="2xl">
      {bio2}
    </Heading>
  </VStack>

  </FullScreenSection>
);

export default LandingSection;
