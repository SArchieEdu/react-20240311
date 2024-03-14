/* eslint-disable react/no-children-prop */
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
const name = "Artem";

root.render(
  <button
    id="myButton"
    onClick={() => {
      console.log("Hello!");
    }}
  >
    <span>Click</span>
    <span>{name}</span>
  </button>
);

// root.render(
//   React.createElement("button", {
//     id: "myButton",
//     onClick: () => {
//       console.log("Hello!");
//     },
//     children: [
//       React.createElement("span", { children: "Click" }),
//       React.createElement("span", { children: "Me" }),
//     ],
//   })
// );
