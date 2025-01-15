import React from "react";
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";
import Intro from "./components/Intro";
import avatarImg from "./avatar.jpeg";

function App() {
  return (
    <div className="card">
      <Avatar imgSrc={avatarImg} altText="Tarkhan Gurbanli" />
      <div className="data">
        <Intro
          name="Tarkhan Gurbanli"
          text=" I'm a passionate full-stack developer with expertise in Java, React, Docker, and cloud technologies. 
        I enjoy solving challenging problems, learning new tools, and sharing knowledge. When not coding, 
        I love reading books, exploring new places, and working on personal projects that inspire creativity."
        />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
