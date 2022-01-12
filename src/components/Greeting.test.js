import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("GreetingComponent", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you before click", () => {
    render(<Greeting />);
    const goodToSeeYouElement = screen.getByText("It's good to see you!");
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("renders Changed after click", () => {
    //arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("DOENS'T render good to see you after click", () => {
    render(<Greeting />);

    const buttonElement = screen.getByText("Change Text!");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see", { exact: false });
    expect(outputElement).not.toBeInTheDocument();
  });
});
