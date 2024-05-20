import React, { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulate a search operation
    const simulatedResults = ["Result 1 for " + query, "Result 2 for " + query, "Result 3 for " + query, "Result 4 for " + query, "Result 5 for " + query];
    setResults(simulatedResults);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Type your search query..." value={query} onChange={(e) => setQuery(e.target.value)} flex="1" />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        <List spacing={3} width="100%">
          {results.map((result, index) => (
            <ListItem key={index} padding="10px" borderWidth="1px" borderRadius="md">
              <Text>{result}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
