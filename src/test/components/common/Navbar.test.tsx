import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll } from "vitest";

import Navbar from "../../../components/common/Navbar";
import "@testing-library/jest-dom";

beforeAll(() => {
    global.window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    }));
});

describe("Navbar Component", () => {
    it("renders logo and button", () => {
        render(<Navbar />);

        const logo = screen.getByAltText("logo");
        expect(logo).toBeInTheDocument();

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("Navbar changes background color when scrolled", () => {
        render(<Navbar />);

        fireEvent.scroll(window, { target: { scrollY: 5000 } });

        const navbar = screen.getByRole("banner");
        expect(navbar).toHaveClass("bg-[#171717]");
    });
});
