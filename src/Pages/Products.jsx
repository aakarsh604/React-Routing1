import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link, Outlet} from "react-router-dom"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Products = () => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:8000/Products")
        .then((res) => res.json())
        .then((data) => setinfo(data));
    };
    getData();
  }, []);
  console.log(info);

  return (
    <TableContainer border="2px solid black" w="50%" m="auto" mt="50px">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th textAlign="center"  fontSize="lg">Name</Th>
            <Th textAlign="center"  fontSize="lg">Price</Th>
            <Th textAlign="center"  fontSize="lg">More Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {info.map((pro) => (
            <Tr key={pro.name} cursor="pointer" _hover={{fontWeight: "bold"}}>
            <Td textAlign="center" w="250px">{pro.name}</Td>
            <Td textAlign="center">{pro.price}</Td>
            <Td textAlign="center" ><Link to={`/products/${pro.id}`}>Click here</Link></Td>
          </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Products;
