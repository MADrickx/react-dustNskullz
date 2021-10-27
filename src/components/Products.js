import React from "react";
import Product from "./Product";
import styled from "styled-components";
import {products} from "../data";
const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => (
    <Container>
        {products.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
);

export default Products;
