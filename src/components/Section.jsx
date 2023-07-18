import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NIKE270 from "../assets/Nike Air Max 270 Liquid Metal Sneakers in Black_Photo Blue_Blue Fury.jpg";
import NIKE97 from "../assets/Nike Air Max 97 Silver Bullet US Release Date _ SneakerNews_com.jpg";
import NIKESH from "../assets/Nike Shoes.png";

const Section = () => {
  const [currentImage, setCurrentImage] = useState(NIKE270);

  const imgSlider = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  const changeBgColor = (color) => {
    // Implement your logic to change the background color here
    document.documentElement.style.setProperty("--bg-color", color);
  };

  useEffect(() => {
    // Set the initial background color when the component mounts
    document.documentElement.style.setProperty("--bg-color", "#0062be");

    // Clean up the effect when the component unmounts
    return () => {
      // Reset the background color to the initial color when the component unmounts
      document.documentElement.style.setProperty("--bg-color", "#0062be");
    };
  }, []);

  return (
    <div>
      <section className="sec">
        <div className="content">
          <div className="textBox">
            <h2>
              That's What
              <br />
              <span>I like</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quis cupiditate commodi facilis porro, enim similique mollitia
              distinctio ratione voluptates labore, minima a inventore? Nesciunt
              fugiat voluptates vel consequuntur quibusdam! Lorem ipsum dolor
              sit amet
            </p>

            <Link to="/Products" className="home-link">
              VIEW ALL PRODUCTS
            </Link>
          </div>
          <div className="imgBox">
            <img src={currentImage} className="pepsi" alt="product" />
          </div>
        </div>
        <ol className="thumb">
          <li>
            <img
              src={NIKE270}
              alt="thumbnail"
              onClick={() => {
                imgSlider(NIKE270);
                changeBgColor("#0062be");
              }}
            />
          </li>
          <li>
            <img
              src={NIKESH}
              alt="thumbnail"
              onClick={() => {
                imgSlider(NIKESH);
                changeBgColor("#e60c2c");
              }}
            />
          </li>
          <li>
            <img
              src={NIKE97}
              alt="thumbnail"
              onClick={() => {
                imgSlider(NIKE97);
                changeBgColor("#1e1e1e");
              }}
            />
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Section;
