import React from "react";
import { Card } from "react-bootstrap";

import "./styles.css";

function CardComponent({ children, width = "25rem", cardStyle = "Card" }) {
  return (
    <>
      <Card className={cardStyle} style={{ width }}>
        {children}
      </Card>
    </>
  );
}

export { CardComponent };
