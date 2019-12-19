import React from "react";
import { Button } from "react-bootstrap";

import "./styles.css";

function ButtonComponent({ text, size, onClick, ...otherProps }) {
  return (
    <>
      <Button className="Button" size={size} onClick={onClick} {...otherProps}>
        {text}
      </Button>
    </>
  );
}

export { ButtonComponent };
