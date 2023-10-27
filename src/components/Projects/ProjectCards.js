import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.links && props.links.map((link, index) => (
          <Button
            key={index}
            variant="primary"
            href={link.url}
            target="_blank"
            className="download-button"
          >
            <BiLinkExternal /> &nbsp;
            {link.label}
            {index < props.links.length - 1 && (
            <span className="label-spacing"> </span> 
          )}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
