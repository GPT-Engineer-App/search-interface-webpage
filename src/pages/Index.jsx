import React, { useState, useEffect } from "react";
import { Container, VStack, Input, Table, Thead, Tbody, Tr, Th, Td, HStack, IconButton, Heading } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/records.txt")
      .then((response) => response.text())
      .then((text) => {
        const parsedData = text
          .trim()
          .split("\n")
          .map((line) => {
            const [item, code, className, segment, category] = line.split(", ");
            return { item, code, className, segment, category };
          });
        setData(parsedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    const filteredResults = data.filter((record) => record.item.toLowerCase().includes(query.toLowerCase()));
    setResults(filteredResults);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="lg">
          ITEM CODE SELECTION
        </Heading>
        <HStack width="100%">
          <Input placeholder="Type your search query..." value={query} onChange={(e) => setQuery(e.target.value)} flex="1" onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Code</Th>
              <Th>Class</Th>
              <Th>Segment</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {results.map((result, index) => (
              <Tr key={index}>
                <Td>{result.item}</Td>
                <Td>{result.code}</Td>
                <Td>{result.className}</Td>
                <Td>{result.segment}</Td>
                <Td>{result.category}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
