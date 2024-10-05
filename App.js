import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From Namaste React"
);

const jsxHeading = <h1 id="heading">Hello from JSX heading👹</h1>;
console.log(heading);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
///////////////////////
// Functional Component-> A fun. returning JSX is a react functional component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
root.render(<HeadingComponent />);
