import React from "react";
import { Button } from "react-bootstrap";

import "./styles.css";

function ButtonComponent({ text, size, onClick }) {
  return (
    <div>
      <Button className="Button" size={size} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}

export { ButtonComponent };
