import React from "react";

const Logo = ({ company }) => {
  const logos = {
    daraz: "path_to_daraz_logo.png",
    foodpanda: "path_to_foodpanda_logo.png",
    amazon: "path_to_amazon_logo.png",
  };

  return <img src={logos[company]} alt={`${company} logo`} />;
};

export default Logo;
