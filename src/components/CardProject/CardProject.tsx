import React from "react";
import { CardProjectStyled } from "./CardProjectStyled";
interface CardProjectProps {
  image: string;
  textImage: string;
  textApp: string;
  titleApp: string;
}

const CardProject = ({
  image,
  textImage,
  textApp,
  titleApp,
}: CardProjectProps): JSX.Element => {
  return (
    <CardProjectStyled>
      <a href="/" className="portfolio-card">
        <img src={image} className="portfolio-card-img" alt={textImage} />
        <span className="portfolio-card-overlay">
          <span className="portfolio-card-caption">
            <h4>{titleApp} </h4>
            <p>{textApp}</p>
          </span>
        </span>
      </a>
    </CardProjectStyled>
  );
};

export default CardProject;
