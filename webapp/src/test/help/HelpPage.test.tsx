import React from "react";
import { render } from "@testing-library/react";
import HelpPage from "../../components/help/HelpPage";

jest.mock('../../components/help/ContactMap', () => {
    return function MockContactMap() {
        return <div data-testid="contactMapMock">Mock</div>;
    };
});

describe("HelpPage component", () => {
    it("renders ContactUs component", () => {
        const { getByText } = render(<HelpPage />);
        const contactUsElement = getByText("Contact us");
        expect(contactUsElement).toBeInTheDocument();
    });
});
