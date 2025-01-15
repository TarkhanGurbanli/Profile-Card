import React from "react";

const Avatar = ({ imgSrc, altText }) => {
  return <img className="avatar" src={imgSrc} alt={altText} />;
};

export default Avatar;
