import React from "react";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => (
    <>
        <Annoucement />
        <Navbar />
        <Slider />
        <Categories />
    </>
);

export default Home;
