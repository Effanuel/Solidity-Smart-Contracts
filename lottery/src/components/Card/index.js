import React from "react";
import { Card } from "react-bootstrap";

import "./styles.css";

function CardComponent({ children, title, desc, width }) {
  return (
    <>
      <Card className="Card" style={{ width }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          {children}
        </Card.Body>
      </Card>
    </>
  );
}

export { CardComponent };
