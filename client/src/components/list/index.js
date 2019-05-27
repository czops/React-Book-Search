import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thumbnail from "../Thumbnail";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ 
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  link
}) {
  return (
  <li className="list-group-item">
  <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
  </li>
  );
}
