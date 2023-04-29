import {render, RenderResult} from "@testing-library/react";
import ContactUs from "../../components/help/ContactUs";

jest.mock('../../components/help/ContactMap', () => {
    return function MockContactMap() {
        return <div data-testid="contactMapMock">Mock</div>;
    };
});


describe("ContactUs", () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<ContactUs/>);
    });

    afterEach(() => {
        component.unmount();
    })

    it("renders the ContactMap component", () => {
        expect(component.getByTestId("contactMapMock")).toBeInTheDocument();
    })

    it("renders the ContactForm component", () => {
        expect(component.getByText("Contact us")).toBeInTheDocument();
    });

    it("renders the ContactFooter component", () => {
        expect(component.getByText("Our main office")).toBeInTheDocument();
    });
});
