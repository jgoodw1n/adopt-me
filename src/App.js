import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Puck",
      animal: "Cat",
      breed: "Domestic Short-hair",
    }),
    React.createElement(Pet, {
      name: "Rocket",
      animal: "Dog",
      breed: "Corgi",
    }),
    React.createElement(Pet, {
      name: "Cassie",
      animal: "Dog",
      breed: "Airedale Terrier",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
