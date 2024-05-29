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


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
