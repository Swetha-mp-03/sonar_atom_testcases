import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/dom";
import AppButton from "../Button/index";
import { vi } from "vitest"; // this line ensures no TS errors

describe("AppButton", () => {
  it("renders with label", () => {
    render(<AppButton label="Submit" />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockFn = vi.fn();
    render(<AppButton label="Submit" onClick={mockFn} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
