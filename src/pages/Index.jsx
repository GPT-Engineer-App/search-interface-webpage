import React, { useState, useEffect } from "react";
import { Container, VStack, Input, List, ListItem, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const text = `
Item1, Code1, Class1, Segment1, Category1
Item2, Code2, Class2, Segment2, Category2
Item3, Code3, Class3, Segment3, Category3
Item4, Code4, Class4, Segment4, Category4
Item5, Code5, Class5, Segment5, Category5
    `;
    const parsedData = text
      .trim()
      .split("\n")
      .map((line) => {
        const [item, code, className, segment, category] = line.split(", ");
        return { item, code, className, segment, category };
      });
    setData(parsedData);
  }, []);

  const handleSearch = () => {
    const filteredResults = data.filter((record) => record.item.toLowerCase().includes(query.toLowerCase()));
    setResults(filteredResults);
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
              <Text>
                <strong>Item:</strong> {result.item} <br />
                <strong>Code:</strong> {result.code} <br />
                <strong>Class:</strong> {result.className} <br />
                <strong>Segment:</strong> {result.segment} <br />
                <strong>Category:</strong> {result.category}
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
