/* eslint-disable no-confusing-arrow */
import React from "react";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import bioharzard from "../img/T-shirt---Alain---Biohazard.jpg";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 1rem;
    ${mobile({padding: "0.5rem"})};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

const TopButton = styled.button`
    padding: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 1rem;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    ${mobile({flexDirection: "column"})};
`;

const Info = styled.div`
    flex: 2;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    ${mobile({flexDirection: "column"})};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    display: block;
`;

const Details = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${props => props.color};
`;

const ProductID = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1rem",
    })};
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    ${mobile({margin: "0"})};
`;

const ProductAmount = styled.div`
    font-size: 1.5rem;
    margin: 0.5rem;
    ${mobile({margin: "1rem 2rem"})};
`;

const ProductPrice = styled.div`
    font-size: 2rem;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 5px;
    padding: 1rem;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 1rem;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => (
    <Container>
        <Navbar />
        <Annoucement />
        <Wrapper>
            <Title>{"Your Cart"}</Title>
            <Top>
                <TopButton>{"Continue Shopping"}</TopButton>
                <TopTexts>
                    <TopText>{"Shopping Bag (2)"}</TopText>
                    <TopText>{"Your Wishlist"}</TopText>
                </TopTexts>
                <TopButton type={"filled"}>{"Checkout now"}</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={bioharzard} />
                            <Details>
                                <ProductName>
                                    <b>{"Product :"}</b>
                                    {"Jessie Test"}
                                </ProductName>
                                <ProductID>
                                    <b>{"ID :"}</b>
                                    {"s32df1q3sd5f1"}
                                </ProductID>
                                <ProductColor color={"black"} />
                                <ProductSize>
                                    <b>{"Size :"}</b>
                                    {"XXXL"}
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>{2}</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>{"30???"}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src={bioharzard} />
                            <Details>
                                <ProductName>
                                    <b>{"Product :"}</b>
                                    {"Jessie Test"}
                                </ProductName>
                                <ProductID>
                                    <b>{"ID :"}</b>
                                    {"s32df1q3sd5f1"}
                                </ProductID>
                                <ProductColor color={"black"} />
                                <ProductSize>
                                    <b>{"Size :"}</b>
                                    {"XXXL"}
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>{2}</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>{"30???"}</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>{"ORDER SUMMARY"}</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>{"Subtotal"}</SummaryItemText>
                        <SummaryItemPrice>{"60???"}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>{"Estimate Shipping"}</SummaryItemText>
                        <SummaryItemPrice>{"5???"}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>{"Discount"}</SummaryItemText>
                        <SummaryItemPrice>{"-5???"}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type={"total"}>
                        <SummaryItemText>{"Total"}</SummaryItemText>
                        <SummaryItemPrice>{"60???"}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>{"CHECKOUT NOW"}</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
);

export default Cart;
