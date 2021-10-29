import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Description} from "@material-ui/icons";

const Container = styled.div`
    padding: 0rem;
`;

const Wrapper = styled.div`
    padding: 0rem;
`;

const ImageContainer = styled.div`
    padding: 0rem;
`;

const Image = styled.div`
    padding: 0rem;
`;

const InfoContainer = styled.div`
    padding: 0rem;
`;

const Title = styled.h3``;

const Price = styled.div``;

const Product = () => (
    <Container>
        <Navbar />
        <Annoucement />
        <Wrapper>
            <ImageContainer>
                <Image />
            </ImageContainer>
            <InfoContainer>
                <Title />
                <Description>
                    {
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, mollitia?"
                    }
                </Description>
                <Price>{"25€"}</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
);

export default Product;
