import React from "react";
import { image } from "../data/data";

function About() {
  // return <div>About</div>;
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm actually not Liza, a web developer from NY. I'm Seen, a Flatiron Student in Alaska.</p>
      <img src={image} alt="i made this" />
    </div>
  );
}

export default About;
