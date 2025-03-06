import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Button from "../../../components/common/Button";

describe("Button Component", () => {
    it("renders the button with default text", () => {
        render(<Button />);
        const button = screen.getByRole("button", { name: /get in touch/i });
        expect(button).toBeInTheDocument();
    });

    it("applies custom size and padding classes", () => {
        const { container } = render(<Button size="text-lg" pd="p-4" />);
        const button = container.querySelector("button");

        expect(button).toHaveClass("text-lg");
        expect(button).toHaveClass("p-4");
    });

    it("has the correct default styles", () => {
        render(<Button />);
        const button = screen.getByRole("button");

        expect(button).toHaveClass("text-white");
        expect(button).toHaveClass("bg-purple-700");
        expect(button).toHaveClass("hover:bg-purple-800");
        expect(button).toHaveClass("rounded-full");
    });
});
