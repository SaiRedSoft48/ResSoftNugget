import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import MotionWrapper from "../../../components/common/MotionWrapper";


describe("MotionWrapper Component", () => {
    it("renders children correctly", () => {
        render(
            <MotionWrapper animation={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                <p>Test Content</p>
            </MotionWrapper>
        );

        const content = screen.getByText("Test Content");
        expect(content).toBeInTheDocument();
    });

    it("applies motion props correctly", () => {
        const { container } = render(
            <MotionWrapper animation={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                <p>Test Content</p>
            </MotionWrapper>
        );

        const motionDiv = container.querySelector("div");
        expect(motionDiv).toBeTruthy();
    });
});
