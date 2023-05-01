import {act, fireEvent, render} from "@testing-library/react";
import Mark from "../../../components/map/options/Mark";

describe("Mark", () => {

    it('renders without crashing', () => {
        const component = render(<Mark/>);
        expect(component.getByRole("radio", {name: "1 Star"})).toBeInTheDocument();
        expect(component.getByRole("radio", {name: "2 Stars"})).toBeInTheDocument();
        expect(component.getByRole("radio", {name: "3 Stars"})).toBeInTheDocument();
        expect(component.getByRole("radio", {name: "4 Stars"})).toBeInTheDocument();
        expect(component.getByRole("radio", {name: "5 Stars"})).toBeInTheDocument();
    });

    it('updates value state correctly', () => {
        const component = render(<Mark/>);
        const rating = component.getByRole('radio', {name: '4 Stars'});

        act(() => {
            fireEvent.click(rating);
            expect(component.getByText("4")).toBeInTheDocument();
        })
    });

});