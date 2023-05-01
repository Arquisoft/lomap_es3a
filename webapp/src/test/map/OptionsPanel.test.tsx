import {render} from "@testing-library/react";
import OptionsPanel from "../../components/map/OptionsPanel";

jest.mock("@inrupt/solid-ui-react", () => ({
    useSession: () => ({
        session: {
            info: {
                webId: "https://omitg.inrupt.net/profile/card#me",
            },
        },
    }),
}));

jest.mock('../../components/map/MapView', () => {
    return function MockContactMap() {
        return <div data-testid="mapMock">Mock</div>;
    };
});

describe("OptionsPanel", () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("render menu title correctly", () => {
        const {getByText} = render(<OptionsPanel setItem={() => {}} />);
        expect(getByText("Map options")).toBeInTheDocument();
    });

    it("render MapSelector component", () => {
        const {getByText} = render(<OptionsPanel setItem={() => {}} />);
        expect(getByText("Map selector")).toBeInTheDocument();
        expect(getByText("Create new map")).toBeInTheDocument();
    });

    it("render Filter component", () => {
        const {getByText} = render(<OptionsPanel setItem={() => {}} />);
        expect(getByText("Category")).toBeInTheDocument();
    });

    it("render Friends component", () => {
        const {getByText} = render(<OptionsPanel setItem={() => {}} />);
        expect(getByText("Friends")).toBeInTheDocument();
    });
});