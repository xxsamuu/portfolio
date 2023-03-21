import React, { useState, useEffect } from "react";
import contact from "../../../src/images/contact.png";

const Hero = () => {
  const [text, setText] = useState("");
  const [description_text, setDescription_text] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Sam Roufaeil",
    "a programmer",
    "📍in Milan",
    "your best choice",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const textToType = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(textToType);

      setTypingSpeed(isDeleting ? 120 : 170);

      if (!isDeleting && textToType === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 5000);
      } else if (isDeleting && textToType === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => {
      clearTimeout(typingTimer);
    };
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div div className="hero">
      <div className="headings">
        <div className="headings-homepage-div">
          <h1 className="heading-homepage">Hello, I'm</h1>
        </div>
        <div className="animation">
          <h1 className="typing-animation">{text}</h1>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="description">
          <p>
            I'm a young programmer with a passion for technology and a drive to
            create innovative solutions. I'm committed to developing clean,
            efficient, and user-friendly applications that make a positive
            impact. When I'm not coding, you can find me exploring new
            technologies, working out, reading or drawing.
          </p>
        </div>
        <div className="send_message">
          <a href="mailto:samprogramming05@gmail.com">
            <img src={contact} className="contact" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
