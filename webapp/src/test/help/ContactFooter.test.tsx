import ContactFooter from "../../components/help/ContactFooter";
import {render, RenderResult} from "@testing-library/react";

describe("ContactFooter", () => {
    let component : RenderResult;

    beforeEach(() => {
        component = render(<ContactFooter />);
    })

    afterEach(() => {
        component.unmount();
    })

    it("renders panelOffice text correctly", () => {
        const panelOfficeElement = component.getByText("Calle Valdés Salas, 11, 33007 Oviedo, Asturias");
        expect(panelOfficeElement).toBeInTheDocument();
    });

    it("renders panelPhone text correctly", () => {
        const panelPhoneElement = component.getByText("+34 985 10 27 96");
        expect(panelPhoneElement).toBeInTheDocument();
    });

    it("renders panelFax text correctly", () => {
        const panelFaxElement = component.getByText("+1-555-123-4567");
        expect(panelFaxElement).toBeInTheDocument();
    });

    it("renders panelEmail text correctly", () => {
        const panelEmailElement = component.getByText("support@lomapes3a.com");
        expect(panelEmailElement).toBeInTheDocument();
    });
});