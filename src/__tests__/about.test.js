import { render, screen } from "@testing-library/react";
import { About } from "../components/About";
import "@testing-library/jest-dom";

test("Should load About us component",()=>{
    render(<About/>);

    const heading = screen.getByRole("heading", {level:1});

    expect(heading).toBeInTheDocument();

});

it("Should load button in About us component", ()=>{
    render(<About/>);

    const para = screen.getByRole("react-info");

    expect(para).toBeInTheDocument();
});