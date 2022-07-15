import { render, screen } from "@testing-library/react";
import MenuItems from "./MenuItems";

test("renders business text", () => {
  render(<MenuItems show={true} />);
  const text = screen.getByText("Business");
  expect(text).toBeInTheDocument();
});

test("onclick calls function", () => {
  const mockFn = jest.fn();
  render(<MenuItems show={true} onClick={mockFn()} />);
  expect(mockFn).toHaveBeenCalled();
});
