import {act, fireEvent, render, waitFor} from "@testing-library/react";
import FriendList from "../../../components/map/options/FriendList";
import {findPersonData, getMaps} from "../../../components/pod/PODsInteraction";

jest.mock('../../../components/map/MapView', () => {
    return function MockContactMap() {
        return <div data-testid="mapMock">Mock</div>;
    };
});


jest.mock("@inrupt/solid-ui-react", () => ({
    useSession: () => ({
        session: {
            info: {
                webId: "https://omitg.inrupt.net/profile/card#me",
            },
        },
    }),
}));

jest.mock("../../../components/pod/PODsInteraction", () => {
    return {
        findPersonData: jest.fn(),
        getMaps: jest.fn(),
    };
})

describe('FriendList', () => {
    it('renders correctly', async () => {
        const component = render(<FriendList setItem={jest.fn()} setSelectedMap={jest.fn()} />);
        expect(component.getByText("Friends")).toBeInTheDocument();
    });

    it('renders the friends list', async () => {
        (findPersonData as jest.Mock).mockImplementation(() => {
           return Promise.resolve({
               webId: "https://omitg.inrupt.net/profile/card#me",
               photo: "https://omitg.inrupt.net/profile/card#me/avatar",
               name: "Omar",
               friends: ["https://carlosuo284373.inrupt.net/profile/card#me",
                   "https://uo278968.inrupt.net/profile/card#me"]
           })
        });

        (getMaps as jest.Mock).mockImplementation(() => {
            return Promise.resolve([
                "https://omitg.solidcommunity.net/lomap/Prueba1.jsonld",
                "https://omitg.solidcommunity.net/lomap/Prueba2.jsonld",
                "https://omitg.solidcommunity.net/lomap/Prueba3.jsonld"
            ])
        })

        const component = render(<FriendList setItem={jest.fn()} setSelectedMap={jest.fn()} />);
        await waitFor(() => {
            const friend = component.getAllByRole("button", {name: "Omar"})[0];
            expect(friend).toBeInTheDocument();
            fireEvent.click(friend);
        })
        expect(component.getAllByRole("button", {name: "Https://omitg.solidcommunity.net/lomap/Prueba1"})[0]).toBeInTheDocument();
    });
});