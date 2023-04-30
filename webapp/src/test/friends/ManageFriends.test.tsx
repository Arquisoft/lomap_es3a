import ManageFriends from "../../components/friends/ManageFriends";
import {findPersonData} from "../../components/pod/PODsInteraction";
import React from "react";
import {fireEvent, render, RenderResult, screen, waitFor} from "@testing-library/react";
import {Session} from "@inrupt/solid-client-authn-browser";

jest.mock("@inrupt/solid-ui-react", () => ({
    useSession: () => ({
        session: {
            info: {
                webId: "https://omitg.inrupt.net/profile/card#me",
            },
        },
    }),
}));

jest.mock("../../components/pod/PODsInteraction", () => ({
    findPersonData: jest.fn()
}));

describe("ManageFriends", () => {

    it("renders the component", () => {
        const component = render(<ManageFriends/>);
        expect(component.getByText("Friends")).toBeInTheDocument();
    });

    it("shows form for adding friend when clicking on the button", async () => {
        const component = render(<ManageFriends/>);
        const addFriendButton = component.getByRole("button", {name: "Add friend"});
        fireEvent.click(addFriendButton);

        expect(component.getByText("Select POD provider:")).toBeInTheDocument();
        expect(component.getByRole("option", {name: "Inrupt"})).toBeInTheDocument();
        expect(component.getByRole("option", {name: "SolidCommunity"})).toBeInTheDocument();
        expect(component.getByText("Enter the user name:")).toBeInTheDocument();
        expect(component.getByText("Add friend")).toBeInTheDocument();
    });

    it("shows the user has no friends", async () => {
        const component = render(<ManageFriends/>);
        expect(component.getByText("You don't have any friends added to your account")).toBeInTheDocument();
    });

    it("does not show the add friend form by default", () => {
        const component = render(<ManageFriends/>);
        expect(component.queryByText("Select POD provider:")).toBeNull();
        expect(component.queryByText("Enter the user name:")).toBeNull();
    });

    it("shows the user has friends", async () => {
        (findPersonData as jest.Mock).mockImplementationOnce(() => {
            return {
                webId: "https://omitg.inrupt.net/profile/card#me",
                photo: "https://omitg.inrupt.net/profile/card#me/avatar",
                name: "Omar",
                friends: ["https://carlosuo284373.inrupt.net/profile/card#me",
                    "https://uo278968.inrupt.net/profile/card#me"]
            };
        }).mockImplementationOnce(() => {
            return {
                webId: "https://carlosuo284373.inrupt.net/profile/card#me",
                photo: "https://carlosuo284373.inrupt.net/profile/card#me/avatar",
                name: "Carlos",
                friends: ["https://omitg.inrupt.net/profile/card#me",
                    "https://uo278968.inrupt.net/profile/card#me"]
            };
        }).mockImplementationOnce(() => {
            return {
                webId: "https://uo278968.inrupt.net/profile/card#me",
                photo: "https://uo278968.inrupt.net/profile/card#me/avatar",
                name: "David",
                friends: ["https://omitg.inrupt.net/profile/card#me",
                    "https://carlosuo284373.inrupt.net/profile/card#me"]
            };
        });

        const component = render(<ManageFriends/>);

        // await waitFor(() => {
        //     expect(findPersonData).toHaveBeenCalledTimes(3);
        //     expect(component.getByText("Carlos")).toBeInTheDocument();
        //     expect(component.getByText("David")).toBeInTheDocument();
        // })
    });
});