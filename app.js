import React from "react";
import ReactDOM from "react-dom";

//React Element => Object => HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is React Element"
);

console.log("React core.......", heading);

/**JSX - is not HTML in JS. JSX is HTML like syntax or xml like syntax
 *
 * JSX (transpiled before it reaches the JS Engine) - PARCEL - BABEL
 *
 * JSX ==> React.createElement ==> ReactElement-JS Object ==> HtmlElement (render)
 *
 **/
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    React using JSX
  </h1>
);

/**
 * React Component
 * Class based Component - OLD
 * Functional Component  - NEW
 *
 * ** */

const Title = () => (
    <h1 className="heading"> React Title Component</h1>
)

const HeadingComponent = () => 
    (
         <div id="container">
            {/* {20*20} */ heading}
            <Title></Title>
         <h1>React Functional Component</h1>
         </div>
    );

console.log("JSX..............", jsxHeading);



const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent />);

