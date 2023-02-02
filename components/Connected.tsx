import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome adventurer.
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each flag is randomly generated and can be staked to receive
            <Text as="b"> $FLAG </Text>. Use your <Text as="b"> $FLAG</Text> as a travelling passive income
             and receive perks within the community!
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image boxSize='150px' src="avatar1.png" alt="" />
        <Image boxSize='150px' src="avatar2.png" alt="" />
        <Image boxSize='150px' src="avatar3.png" alt="" />
        <Image boxSize='150px' src="avatar4.png" alt="" />
        <Image boxSize='150px' src="avatar5.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint pika</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected