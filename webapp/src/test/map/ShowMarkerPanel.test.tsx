import {act, fireEvent, render} from '@testing-library/react';
import ShowMarkerPanel from "../../components/map/ShowMarkerPanel";
import {Point} from "../../components/pod/Point";

jest.mock('../../components/map/MapView', () => {
    return function MockContactMap() {
        return <div data-testid="mapMock">Mock</div>;
    };
});

jest.mock("../../components/pod/PODsInteraction", () => {
    return {
        uploadComment: jest.fn()
    };
})

describe('ShowMarkerPanel', () => {
    const markerDefault: Point = {
        latitude: 0,
        longitude: 0,
        name: "Prueba nombre",
        category: "Prueba categoria",
        description: "Prueba descripción",
        id: "1",
        author: "Omar",
        review: [{
            author: "Omar", datePublished: new Date().getTime(), comment: "Prueba comentario 1", reviewRating: 5
        }, {
            author: "Carlos", datePublished: new Date().getTime(), comment: "Prueba comentario 2", reviewRating: 3
        },
            {
                author: "David", datePublished: new Date().getTime(), comment: "Prueba comentario 3", reviewRating: 4
            }],
        image: [{
            author: "Omar",
            contentUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png"
        }],
        dateCreated: new Date().getTime(),
        mapName: "Prueba mapa"
    };

    it('should render marker details', () => {
        const component = render(<ShowMarkerPanel data={markerDefault} setItem={jest.fn()}/>);
        expect(component.getByAltText("Omar")).toBeInTheDocument();
        expect(component.getByAltText("Omar")).toHaveAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png");
        expect(component.getByText("Prueba nombre")).toBeInTheDocument();
        expect(component.getByText("Prueba categoria")).toBeInTheDocument();
        expect(component.getByText("Prueba descripción")).toBeInTheDocument();
        expect(component.getByText("Prueba comentario 1")).toBeInTheDocument();
        expect(component.getByText("Prueba comentario 2")).toBeInTheDocument();
        expect(component.getByText("Prueba comentario 3")).toBeInTheDocument();
        expect(component.getAllByText(4)[0]).toBeInTheDocument();
        expect(component.getAllByText(new Date().toLocaleDateString("en"))[0]).toBeInTheDocument();
    });

    it("renders 0 reviews with empty", () => {
        const marker2: Point = {
            latitude: 0,
            longitude: 0,
            name: "Prueba nombre",
            category: "Prueba categoria",
            description: "Prueba descripción",
            id: "1",
            author: "Omar",
            review: [],
            image: [],
            dateCreated: new Date().getTime(),
            mapName: "Prueba mapa"
        };
        const component = render(<ShowMarkerPanel data={marker2} setItem={jest.fn()}/>);
        expect(component.getByText("There are no images for this marker")).toBeInTheDocument();
        expect(component.getByText("Prueba nombre")).toBeInTheDocument();
        expect(component.getByText("Prueba categoria")).toBeInTheDocument();
        expect(component.getByText("Prueba descripción")).toBeInTheDocument();
        expect(component.getAllByText(0)[0]).toBeInTheDocument();
    });

    it("clicking close button hides the component", async () => {
        const component = render(<ShowMarkerPanel data={markerDefault} setItem={jest.fn()}/>);
        const closeButton = component.getByText("×");

        act(() => {
            fireEvent.click(closeButton);
        })

        expect(component.container.firstChild).toHaveStyle({width: "0"});
    });

    it('returns null when data is null', () => {
        const {container} = render(<ShowMarkerPanel data={undefined} setItem={jest.fn()}/>);
        expect(container.firstChild).toBeNull();
    });

    // it("adds a review", async () => {
    //     (uploadComment as jest.Mock).mockImplementation(() => {
    //         return Promise.resolve("Nueva review")
    //     })
    //
    //     const component = render(<ShowMarkerPanel data={markerDefault} setItem={jest.fn()}/>);
    //     const reviewInput = component.getByPlaceholderText("Add your review...");
    //     fireEvent.change(reviewInput, {target: {value: "Nueva review"}});
    //
    //     fireEvent.click(component.getByText("Add"));
    //
    //     await waitFor(() => {
    //         expect(uploadComment).toHaveBeenCalled();
    //     })
    // });
});
