import React from "react";

const Intro = ({ name, text }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Intro;
