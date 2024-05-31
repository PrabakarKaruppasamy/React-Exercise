import React from "react";
import ReactDOM from "react-dom";

/**
 *  <div id="parent">
 *  <div id="child">
 * <h1></h1>
 * </div>
 * </div> 
 * 
 * 
 * 
 * 
 * * */

const parent = React.createElement('div', { id: "parent" },
    [
        React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "This is H1 Tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
    ],
    // [
    //     React.createElement("div", { id: "child2" },
    //     [
    //         React.createElement("h1", {}, "I'm an h1 tag"),
    //         React.createElement("h2", {}, "I'm an h2 tag")
    //     ]
    // )
    // ]
)




const header = React.createElement("h1", { id: "header" }, "Hello World from React!");

//console.log("header......", header); //object

console.log("Parent......", parent);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

//reactRoot.render(header);
reactRoot.render(parent);