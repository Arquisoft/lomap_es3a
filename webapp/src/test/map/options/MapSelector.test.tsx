import MapSelector from "../../../components/map/options/MapSelector";
import {render, waitFor} from "@testing-library/react";
import {checkIfFolderExists, getMaps} from "../../../components/pod/PODsInteraction";


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
        checkIfFolderExists: jest.fn(),
        getMaps: jest.fn(),
    };
})

describe("MapSelector", () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders correctly', () => {
        const setItem = jest.fn();
        const setSelectedMap = jest.fn();
        const component = render(<MapSelector setItem={setItem} setSelectedMap={setSelectedMap} selectedMap={""}/>);
        expect(component.getByText("You don't have any created maps")).toBeInTheDocument();
    });

    // it ("has maps", async () => {
    //     (checkIfFolderExists as jest.Mock).mockImplementation(() => {
    //         return Promise.resolve([
    //             "https://omitg.solidcommunity.net/lomap/Prueba1.jsonld",
    //             "https://omitg.solidcommunity.net/lomap/Prueba2.jsonld",
    //             "https://omitg.solidcommunity.net/lomap/Prueba3.jsonld"
    //         ])
    //     });
    //     (getMaps as jest.Mock).mockImplementation(() => {
    //        return Promise.resolve([
    //            "https://omitg.solidcommunity.net/lomap/Prueba1.jsonld",
    //            "https://omitg.solidcommunity.net/lomap/Prueba2.jsonld",
    //            "https://omitg.solidcommunity.net/lomap/Prueba3.jsonld"
    //        ])
    //     });
    //     const setItem = jest.fn();
    //     const setSelectedMap = jest.fn();
    //     render(<MapSelector setItem={setItem} setSelectedMap={setSelectedMap} selectedMap={""}/>);
    //     await waitFor(() => {
    //         expect(checkIfFolderExists).toHaveBeenCalled();
    //         expect(getMaps).toHaveBeenCalled();
    //     })
    // })
});
