import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {grey} from "@mui/material/colors";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding-right: 1rem;
`;

const Navbar = () => (
    <Container>
        <Wrapper>
            <Left>
                <Language>{"EN"}</Language>
                <SearchContainer>
                    <Input style={{color: grey, fontSize: 16}} />
                    <SearchIcon />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>{"DustNskullz"}</Logo>
            </Center>
            <Right>
                <MenuItem>{"REGISTER"}</MenuItem>
                <MenuItem>{"SIGN IN"}</MenuItem>
                <MenuItem>
                    <Badge badgeContent={0} color={"primary"}>
                        <ShoppingCartOutlined color={"action"} />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
);

export default Navbar;
