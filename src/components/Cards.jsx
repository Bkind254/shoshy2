import React from "react";
import "./Cards.css";

const Cards = ({
  image,
  title,
  subTitle,
  details,
  sizes,
  price,
  image1,
  title1,
  subTitle1,
  details1,
  sizes1,
  price1,
  image2,
  title2,
  subTitle2,
  details2,
  sizes2,
  price2,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="imgBx">
          <img src={image} alt="shoe" />
        </div>
        <div className="details">
          <h3>
            {title}
            <br />
            <span>{subTitle}</span>
          </h3>
          <h4>Products Details</h4>
          <p>{details}</p>
          <h4>Size</h4>
          <ul className="size">
            {sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
          <div className="group">
            <h2>${price}</h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>

      {/*               CARD 2                */}
      <div className="card">
        <div className="imgBx">
          <img src={image1} alt="shoe" />
        </div>
        <div className="details">
          <h3>
            {title1}
            <br />
            <span>{subTitle1}</span>
          </h3>
          <h4>Products Details</h4>
          <p>{details1}</p>
          <h4>Size</h4>
          <ul className="size">
            {sizes1.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
          <div className="group">
            <h2>${price1}</h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>

      {/*              CARD 3              */}
      <div className="card">
        <div className="imgBx">
          <img src={image2} alt="shoe" />
        </div>
        <div className="details">
          <h3>
            {title2}
            <br />
            <span>{subTitle2}</span>
          </h3>
          <h4>Products Details</h4>
          <p>{details2}</p>
          <h4>Size</h4>
          <ul className="size">
            {sizes2.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
          <div className="group">
            <h2>${price2}</h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>

      {/*               CARD 2           */}
      <div className="card">
        <div className="imgBx">
          <img src={image1} alt="shoe" />
        </div>
        <div className="details">
          <h3>
            {title1}
            <br />
            <span>{subTitle1}</span>
          </h3>
          <h4>Products Details</h4>
          <p>{details1}</p>
          <h4>Size</h4>
          <ul className="size">
            {sizes1.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
          <div className="group">
            <h2>${price1}</h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
