import React from "react";
import c from "../../images/c.png";
import design from "../../images/design.png";
import react from "../../images/react.png";
import python from "../../images/python.png";
import linux from "../../images/linux.png";

const Whoami = () => {
  return (
    <div className="whoami" id="whoami">
      <h1 className="minor-headings">WhoAmI</h1>
      <div className="description-wrapper">
        <div className="description description-whoami">
          <p>
            I'm Sam, a <span>full stack developer</span> with a passion for
            exploring the vast and ever-evolving world of technology. In
            addition to my knowledge in web development, I also have an interest
            in
            <span> robotics and AI</span>, and I'm currently learning more about
            these fields. With my experience in <span>Linux</span> and partial
            experience in DevOps, I've developed a good level of understanding
            of operating systems and enjoy optimizing software configurations
            for optimal performance. I'm also skilled in <span>design</span>,
            also because of my passion for Art and drawing, and I enjoy creating
            visually appealing and user-friendly interfaces for my projects. One
            of my key strengths is my insatiable curiosity, which drives me to
            continually learn and grow as a developer. I'm highly organized and
            always strive for excellence in everything I do. My patience and
            perseverance have helped me overcome many challenges and enabled me
            to deliver high-quality results for my clients. Overall, I'm a
            versatile and adaptable developer with a diverse skill set and a
            passion for exploring new technologies. Whether it's designing a new
            web app or learning about the exciting possibilities of robotics and
            AI, I'm always eager to take on new challenges and expand my
            knowledge in the tech world.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="react">
          <img src={react} alt="react" />
        </div>
        <div className="python">
          <img src={python} />
        </div>
        <div className="design">
          <img src={design} />
        </div>
        <div className="linux">
          <img src={linux} />
        </div>
        <div className="c">
          <img src={c} />
        </div>
      </div>
    </div>
  );
};

export default Whoami;
