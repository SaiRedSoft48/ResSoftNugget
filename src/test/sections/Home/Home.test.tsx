import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Home from "../../../sections/home/Home";

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

describe("Home Component", () => {
    it("renders three child components", () => {
        const { container } = render(<Home />);
        const childComponents = container.children;
        expect(childComponents.length).toBe(3);
    });
});
