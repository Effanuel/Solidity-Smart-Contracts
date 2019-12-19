import React from "react";
import { Card } from "react-bootstrap";

import "./styles.css";

function CardComponent({
  children,
  title,
  desc,
  width,
  height = "150px",
  cardStyle = "Card"
}) {
  return (
    <>
      <Card className={cardStyle} style={{ width, height }}>
        <Card.Body>
          <Card.Title className="titleStyle">{title}</Card.Title>
          <Card.Text className="descStyle">{desc}</Card.Text>
          {children}
        </Card.Body>
      </Card>
    </>
  );
}

export { CardComponent };
