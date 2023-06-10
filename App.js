/**
 * 
 * 
 * 
 */
//nested Div
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
    "div",{id:"child"},React.createElement("h1",{id:"heading"},"Children")
    ))

// sibling
const parent1 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{id:"heading"},"Children"),
    React.createElement("h2",{id:"heading"},"Children1")]
    ))
const heading = React.createElement(
    "h1",
     {id: "heading"} ,"Hello world")

console.log(parent)     
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent1)