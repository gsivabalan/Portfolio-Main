import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Sivabalan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            Full Stack Developer who loves to transform ideas into reality using
            code.
            <br />
            Motivated developer with knowledge of creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3, Nodejs. I've honed my skills in web application development and gained valuable exposure to agile development methodologies. Seeking an opportunity in a team-oriented environment where I can use my skills and experience to develop innovative solutions..
           </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
