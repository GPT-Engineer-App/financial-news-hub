import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" p={2}>
            World
          </Link>
          <Link as={RouterLink} to="/business" p={2}>
            Business
          </Link>
          <Link as={RouterLink} to="/markets" p={2}>
            Markets
          </Link>
          <Link as={RouterLink} to="/opinion" p={2}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/tech" p={2}>
            Tech
          </Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Article: The State of Global Markets
        </Heading>
        <Text fontSize="lg">
          An in-depth analysis of the current trends and future outlook of global financial markets.
        </Text>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={4}>
        <Box bg="gray.50" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 1
          </Heading>
          <Text>
            Brief summary of the article content goes here. This is a placeholder for the actual article.
          </Text>
        </Box>
        <Box bg="gray.50" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 2
          </Heading>
          <Text>
            Brief summary of the article content goes here. This is a placeholder for the actual article.
          </Text>
        </Box>
        <Box bg="gray.50" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 3
          </Heading>
          <Text>
            Brief summary of the article content goes here. This is a placeholder for the actual article.
          </Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Link as={RouterLink} to="/about" p={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" p={2}>
            Contact
          </Link>
          <Link as={RouterLink} to="/privacy" p={2}>
            Privacy Policy
          </Link>
          <Link as={RouterLink} to="/terms" p={2}>
            Terms of Service
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;