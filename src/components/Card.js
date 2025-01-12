import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack>
      <div style={{ backgroundColor: "white", color: "black", borderRadius: "10px"}}>
      <Image src={imageSrc} alt={title} />
      <Heading as="h4" size="sm" style={{padding: "10px"}}>
        {title}
      </Heading>
      <Text style={{padding: "10px", fontWeight: "lighter"}}>{description}</Text>
      <Text style={{padding: "10px"}}>See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      
      </div>
    </VStack>
  );
};

export default Card;
