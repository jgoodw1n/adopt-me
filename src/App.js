const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
}

const App = () => {
  return React.createElement(
    "div",
    { id: "something important" },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { 
        name: "Puck", 
        animal: "Cat", 
        breed: "Domestic Short-hair"
      }),
      React.createElement(Pet, { 
        name: "Rocket", 
        animal: "Dog", 
        breed: "Corgi"}
      ),
      React.createElement(Pet, { 
        name: "Cassie", 
        animal: "Dog", 
        breed: "Airedale Terrier"}
      )
    ]
  );
};

ReactDOM.render(
  React.createElement(App), 
  document.getElementById("root")
);
