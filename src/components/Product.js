import React from "react";
import styled from "styled-components";
import {
    ShoppingCartOutlined,
    SearchOutlined,
    FavoriteBorderOutlined,
} from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    margin: 0.5rem;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    position: relative;
    border-radius: 5px;
    box-shadow: 6px 6px 8px rgba(255, 255, 255, 0.075),
        6px 6px 10px rgba(0, 0, 0, 0.15),
        -6px -6px 14px rgba(255, 255, 255, 0.7),
        -6px -6px 10px rgba(255, 255, 255, 0.5);
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;
const Icons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: red;
        color: black;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => (
    <>
        <Container>
            <Circle />
            <Image src={item.img.src} />
            <Info>
                <Icons>
                    <ShoppingCartOutlined />
                </Icons>
                <Icons>
                    <SearchOutlined />
                </Icons>
                <Icons>
                    <FavoriteBorderOutlined />
                </Icons>
            </Info>
        </Container>
    </>
);
export default Product;
