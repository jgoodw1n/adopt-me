import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Puck" animal="Cat" breed="Domestic Shorthair" />
      <Pet name="Rocket" animal="Dog" breed="Corgi" />
      <Pet name="Cassie" animal="Dog" breed="Airedale Terrier" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
