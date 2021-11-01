import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
    padding: 0rem;
`;

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 3rem;
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
`;

const FilterColor = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 1rem;
    border: 1px solid lightgrey;
`;

const FilterSizes = styled.select`
    margin: 0 1rem;
`;

const FilterSizeOption = styled.option`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
                        <FilterColor color={"Blue"} />
                        <FilterColor color={"Red"} />
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
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
);

export default Product;
