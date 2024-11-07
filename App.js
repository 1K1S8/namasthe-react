const heading = React.createElement("h1",{id: "heading"}, "hi this is react");

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"hi this is h1 tag"),
    React.createElement("h1",{},"hi this is h2 tag"),
]),
    React.createElement("div",{id: "child2"},[
    React.createElement("div",{},"this is h2 tag"),
    React.createElement("h1",{},"hi this is h2 tag"),
]), 
]); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

  