import React from "react";
import Nike270 from "../assets/Nike Air Max 270 Liquid Metal Sneakers in Black_Photo Blue_Blue Fury.jpg";
import Nike97 from "../assets/Nike Air Max 97 Silver Bullet US Release Date _ SneakerNews_com.jpg";
import Nikesh from "../assets/Nike Shoes.png";
import Cards from "../components/Cards";

const Products = () => {
  return (
    <>
      <Cards
        image={Nike270}
        title="Nike Air Max 270"
        subTitle="Men's Shoe"
        details="Lorem ipsum dolor sit amet consectetur"
        sizes={["36", "38", "40", "42", "44"]}
        price={199}
        /**/
        image1={Nike97}
        title1="Nike Air Max 97"
        subTitle1="We Men's Shoe"
        details1="Lorem ipsum dolor sit amet consectetur."
        sizes1={["3", "38", "4", "42", "44"]}
        price1={125}
        /**/
        image2={Nikesh}
        title2="Nike Air Force"
        subTitle2="We Men's Shoe"
        details2="Lorem ipsum dolor sit amet consectetur."
        sizes2={["3", "38", "4", "42", "44"]}
        price2={125}
      />
    </>
  );
};

export default Products;
