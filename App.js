// CORE REACT
// ReactElement(object) = HTML(browser understands)

const parent = React.createElement(
  "div",
  { id: "parent" }, 
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is the First Heading"),
    React.createElement("h2", {}, "This is the Second Heading"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World inside REACT!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
