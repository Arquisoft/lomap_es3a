import {fireEvent, render, RenderResult, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddMarkerPanel from "../../components/map/AddMarkerPanel";

jest.mock('../../components/map/MapView', () => {
    return function MockContactMap() {
        return <div data-testid="mapMock">Mock</div>;
    };
});

describe("AddMarkerPanel component", () => {
    let component: RenderResult;

    beforeEach(() => {
        const setItem = () => {
        };
        component = render(<AddMarkerPanel setItem={setItem}/>);
    });

    afterEach(() => {
        component.unmount();
    })

    it("renders the component", async () => {
        expect(component.getByText("Add marker")).toBeInTheDocument();
    });

    it("clicking close button hides the component", async () => {
        const closeButton = component.getByText("×");

        fireEvent.click(closeButton);

        expect(component.container.firstChild).toHaveStyle({width: "0"});
    });

    it("renders all necessary elements", async () => {
        expect(component.getByText("Add marker")).toBeInTheDocument();
        expect(component.getByText("Place's name")).toBeInTheDocument();
        expect(component.getByText("Category")).toBeInTheDocument();
        expect(component.getByText("Description")).toBeInTheDocument();
        expect(component.getByText("Upload the image")).toBeInTheDocument();
    });

    it("change category", () => {
        const filterTitle = component.getByText("Bar");
        fireEvent.click(filterTitle);

        const categoryOption = component.getByText("Cinema");
        fireEvent.click(categoryOption);


        const categoryInput = component.getByRole("combobox");
        expect(categoryInput).toHaveTextContent("Cinema");
    });
});
