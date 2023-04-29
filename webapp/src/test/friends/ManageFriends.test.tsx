import {fireEvent, render, RenderResult} from "@testing-library/react";
import ManageFriends from "../../components/friends/ManageFriends";

describe("ManageFriends", () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<ManageFriends/>);
    });

    afterEach(() => {
        component.unmount();
        jest.resetAllMocks();
    });

    it("renders the component", () => {
        expect(component.getByText("Friends")).toBeInTheDocument();
    });

    it("shows form for adding friend when clicking on the button", async () => {
        const addFriendButton = component.getByRole("button", {name: "Add friend"});
        fireEvent.click(addFriendButton);

        expect(component.getByText("Select POD provider:")).toBeInTheDocument();
        expect(component.getByRole("option", {name: "Inrupt"})).toBeInTheDocument();
        expect(component.getByRole("option", {name: "SolidCommunity"})).toBeInTheDocument();
        expect(component.getByText("Enter the user name:")).toBeInTheDocument();
        expect(component.getByText("Add friend")).toBeInTheDocument();
    });

    it("shows the user has no friends", async () => {
        expect(component.getByText("You don't have any friends added to your account")).toBeInTheDocument();
    });
});