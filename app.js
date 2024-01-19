
import React from "react"
import ReactDOM from "react-dom/client";

const heading = <h1>This is an element!</h1>

const Title = () =>(
    <h1>Hello!</h1>
)

const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
        {heading}
        <h1>Namaste Food delivery app</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);