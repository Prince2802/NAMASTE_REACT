import React from "react";
import ReactDOM from "react-dom/client";

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

// JSX (Transpiled before it reaches JS engine - by PARCEL - Babel ) 
// JSX - HTML/XML like syntax
const jsxHeading = <h1 id="Heading">Hello World!!!</h1>

//React Element
const headingElement = (
  <h1 className="Heading">Heading as an Element</h1>
);

// React Component
// Class based component - OLD
// Functional Component - NEW

//One way of writing Component's
const HeadingComponentA = () => {
  return <h1 className="Heading">This is my Functional Component - 1</h1>
}

//Second way of writing Component's
// Component Composition
const HeadingComponentB = () => (
  <div>
    <HeadingComponentA/>
  <h1 className="Heading">This is my Functional Component - 2</h1>
    <HeadingComponentC/>
  </div>
)

//Third way of writing Component's
const HeadingComponentC = () => <h1 className="Heading">This is my Functional Component - 3</h1>;

// Functions

//One way of writing fn's
const fnA = () => true;

//Another way of writing fn's
const fnB = () => {
  return true;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<HeadingComponentB/>);