import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";

const Container = styled.div`
    padding: 0rem;
`;

const Title = styled.h1`
    padding: 0rem;
    margin: 1rem;
`;

const FilterContainter = styled.div`
    padding: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
`;

const Filter = styled.div`
    padding: 0rem;
    margin: 1rem;
    ${mobile({
        margin: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
    })};
`;

const FilterText = styled.span`
    font-size: 1rem;
    font-weight: 700;
`;

const Select = styled.select`
    padding: 0.5rem;
    margin: 0 1rem 0 0;
    ${mobile({margin: "0.5rem 0"})};
`;

const Option = styled.option``;

const ProductList = () => {
    const coucou = 1;

    return (
        <Container>
            <Navbar coucou={coucou} />
            <Annoucement />
            <Title>{"T-shirts"}</Title>
            <FilterContainter>
                <Filter>
                    <FilterText>{"Filter Products : "}</FilterText>
                    <Select>
                        <Option selected disabled>
                            {"Couleur"}
                        </Option>
                        <Option>{"Noir"}</Option>
                        <Option disabled>{"Blanc"}</Option>
                        <Option disabled>{"Rouge"}</Option>
                        <Option disabled>{"Bleu"}</Option>
                    </Select>
                    <Select>
                        <Option selected disabled>
                            {"Taille"}
                        </Option>
                        <Option>{"XS"}</Option>
                        <Option>{"S"}</Option>
                        <Option>{"M"}</Option>
                        <Option>{"L"}</Option>
                        <Option>{"XL"}</Option>
                        <Option>{"XXL"}</Option>
                        <Option>{"XXXL"}</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>{"Sort Products : "}</FilterText>
                    <Select>
                        <Option selected>{"Newest"}</Option>
                        <Option>{"Latets"}</Option>
                        <Option>{"Prix (ascendant)"}</Option>
                        <Option>{"Prix (descendant)"}</Option>
                    </Select>
                </Filter>
            </FilterContainter>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
