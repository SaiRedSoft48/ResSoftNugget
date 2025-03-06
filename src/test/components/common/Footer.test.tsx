import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Footer from "../../../components/common/Footer";

describe("Footer Component", () => {
    it("renders the logo", () => {
        render(<Footer />);
        const logo = screen.getByAltText("logo");
        expect(logo).toBeInTheDocument();
    });

    it("renders the contact text", () => {
        render(<Footer />);
        const contactText = screen.getByText(/contact/i);
        expect(contactText).toBeInTheDocument();
    });

    it("has the correct background color and styles", () => {
        const { container } = render(<Footer />);
        const footer = container.firstChild;
        expect(footer).toHaveClass("bg-black");
        expect(footer).toHaveClass("border-t");
        expect(footer).toHaveClass("flex");
    });
});
