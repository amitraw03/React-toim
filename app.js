/*
    in html  
    <div id="parent">
        <div id="child">  // will be done using taking it in array (when >1 children)
            <h1></h1>
            <h2></h2>
        </div>
        <div id="child2">
            <h1></h1>
            <h2></h2>
        </div>
    </div>

** React Element is nothing but a object which converted in HTML to display on to the browser by render **

** Create elem has 3 fields for:- tags, attributes of that tags in obj form & children

*/

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello i m h1tag"),
        React.createElement("h2", {}, "Hello i m h2tag")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hello i m h1tag"),
        React.createElement("h2", {}, "Hello i m h2tag")])
    ]);

// const heading =React.createElement("h1",{id:"heading",naming:"1stHeading"},"Hello World From React!!"); 

console.log(parent);   //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);