import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="C#" emoji="💻" color="#2396F3" />
      <Skill skill="Java" emoji="☕" color="#E76F00" />
      <Skill skill="React" emoji="⚛️" color="#61DAFB" />
      <Skill skill="Node.js" emoji="🌐" color="#68A063" />
      <Skill skill="Docker" emoji="🐳" color="#0DB7ED" />
      <Skill skill="Postman" emoji="📬" color="#FF6C37" />
      <Skill skill="SQL" emoji="🗂️" color="#336791" />
      <Skill skill="Git" emoji="🔧" color="#F05032" />
    </div>
  );
};

export default SkillList;
