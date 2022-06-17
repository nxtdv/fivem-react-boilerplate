import React, { useState } from "react";
import { Nui } from "./utils/nui.component";
import "./App.scss";

export function App() {
  const [hidden, setHidden] = useState(true);
  const closePage = () => {
    setHidden(true);
    Nui.send("exit_focus", {});
  };

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePage();
    }
  });

  window.addEventListener("message", function (event) {
    const type = event.data.type;

    if (type === "SHOW_PAGE") {
      setHidden(false);
    } else if (type === "CLOSE_PAGE") {
      closePage();
    }
  });

  return (
    <div id="app" hidden={hidden}>
      <h5>FiveM boilerplate by nextdv</h5>
      <p>Press ESC to close</p>
    </div>
  );
}
