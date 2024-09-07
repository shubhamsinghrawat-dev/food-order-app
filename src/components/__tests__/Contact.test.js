import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () =>
{

    test("should load contact us componenet", () => {
    render(<Contact />);


    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();

});

it("should load button componenet", () => {
    render(<Contact />);


    const name = screen.getAllByRole("textbox");
    
    expect(name.length).not.toBe(2);

});
})
