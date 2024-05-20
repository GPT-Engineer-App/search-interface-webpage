import React, { useState, useEffect } from "react";
import { Container, VStack, Input, Table, Thead, Tbody, Tr, Th, Td, HStack, IconButton } from "@chakra-ui/react";
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
