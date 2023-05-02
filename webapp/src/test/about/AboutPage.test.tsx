import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "../../components/about/AboutPage";

jest.mock("../../components/about/Globe", () => {
    return {
        __esModule: true,
        default: () => {
            return <div data-testid="mocked-globe"></div>
        }
    };
});


describe("AboutPage Component", () => {
    test("renders developers names", () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText("Carlos Diez Fernández")).toBeInTheDocument();
        expect(getByText("Raúl Fernández España")).toBeInTheDocument();
        expect(getByText("Omar Teixeira González")).toBeInTheDocument();
        expect(getByText("David Warzynski Abril")).toBeInTheDocument();
    });

    test("renders aboutWeb text", () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText("About the website")).toBeInTheDocument();
    });

    test("renders aboutSubject text", () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText("About the subject")).toBeInTheDocument();
    });
});
