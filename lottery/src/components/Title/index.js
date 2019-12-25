import React from "react";

import "./styles.css";

function TitleComponent({ manager, winner }) {
  return (
    <div className="main">
      <h1>Welcome to a Lottery!</h1>
      <p>
        This lottery is hosted by <b>{manager}.</b>
      </p>
      <div style={{ height: "40px", textAlign: "center" }}>
        {winner && <h3>Winner was picked. Lottery was reset.</h3>}
      </div>
    </div>
  );
}

export { TitleComponent };
