import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Remove, Add} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div`
    padding: 0rem;
`;

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    ${mobile({flexDirection: "column"})};
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 3rem;
    ${mobile({padding: "1rem"})};
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 1rem 0;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 2rem;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 200;
    ${mobile({fontSize: "1.2rem"})};
`;

const FilterColor = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 1rem;
    border: 1px solid lightgrey;
    ${mobile({width: "1rem", height: "1rem", margin: "0.25rem"})};
`;

const FilterSizes = styled.select`
    margin: 0 1rem;
`;

const FilterSizeOption = styled.option`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    justify-content: flex-start;
    align-items: center;
`;

const Amount = styled.span`
    margin: 1rem 1rem;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    border: none;
    background-color: white;
    border-radius: 5px;
    height: 50px;
    padding: 0 1rem;
    box-shadow: 6px 6px 8px rgba(255, 255, 255, 0.075),
        6px 6px 10px rgba(0, 0, 0, 0.15),
        -6px -6px 14px rgba(255, 255, 255, 0.7),
        -6px -6px 10px rgba(255, 255, 255, 0.5);
`;

const Product = () => (
    <Container>
        <Navbar />
        <Annoucement />
        <Wrapper>
            <ImageContainer>
                <Image src={"https://robohash.org/coucou"} />
            </ImageContainer>
            <InfoContainer>
                <Title>{"T-shirt"}</Title>
                <Description>
                    {
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eius odit ad a incidunt amet inventore officia nulla rem ipsam necessitatibus delectus quibusdam adipisci molestiae non provident possimus facilis mollitia reiciendis, vel ipsa porro accusamus? Quos sapiente quaerat itaque et?"
                    }
                </Description>
                <Price>{"25€"}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>{"Color"}</FilterTitle>
                        <FilterColor color={"Black"} />
                        <FilterColor color={"White"} />
                    </Filter>
                    <Filter>
                        <FilterTitle>{"Size"}</FilterTitle>
                        <FilterSizes>
                            <FilterSizeOption>{"XS"}</FilterSizeOption>
                            <FilterSizeOption>{"S"}</FilterSizeOption>
                            <FilterSizeOption>{"M"}</FilterSizeOption>
                            <FilterSizeOption>{"L"}</FilterSizeOption>
                            <FilterSizeOption>{"XL"}</FilterSizeOption>
                            <FilterSizeOption>{"XXL"}</FilterSizeOption>
                            <FilterSizeOption>{"XXXL"}</FilterSizeOption>
                        </FilterSizes>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>{"1"}</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>{"ADD TO CART"}</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
);

export default Product;
