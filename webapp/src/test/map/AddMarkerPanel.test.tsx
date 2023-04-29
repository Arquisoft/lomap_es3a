import {render, fireEvent, RenderResult} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddMarkerPanel from "../../components/map/AddMarkerPanel";

jest.mock('../../components/map/MapView', () => {
    return function MockContactMap() {
        return <div data-testid="contactMapMock">Mock</div>;
    };
});

describe("AddMarkerPanel component", () => {
    let component: RenderResult;

    beforeEach(() => {
       component = render(<AddMarkerPanel setItem={null}/>);
    });

    afterEach(() => {
        component.unmount();
    })

    it("renders the component", () => {
        expect(component.getByText("Add marker")).toBeInTheDocument();
    });

    it("closes the menu on click", () => {
        fireEvent.click(component.getByRole("button", {name : "×"}));
        expect(component).not.toBeVisible();
    });

    it("fills out the form", () => {
        const nameInput = component.getByPlaceholderText("Type to set name...") as HTMLInputElement;
        const categoryFilter = component.getByLabelText("category") as HTMLInputElement;
        const descriptionInput = component.getByPlaceholderText("descriptionPlaceholder") as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: "Test place" } });
        fireEvent.change(categoryFilter, { target: { value: "test category" } });
        fireEvent.change(descriptionInput, { target: { value: "Test description" } });
        expect(nameInput.value).toBe("Test place");
        expect(categoryFilter.value).toBe("test category");
        expect(descriptionInput.value).toBe("Test description");
    });
});
