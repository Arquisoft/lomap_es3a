import {render, RenderResult} from "@testing-library/react";
import TechStack from "../../components/home/TechStack";

describe("TechStack", () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<TechStack/>);
    })

    afterEach(function () {
        component.unmount();
    });

    it("renders correctly", async () => {
        expect(component.getByText("Used technologies:")).toBeInTheDocument();
    });

    it("renders the correct number of TechButton components", () => {
        const techButtons = component.getAllByRole("link");
        expect(techButtons).toHaveLength(7);
    });

    it("renders all TechButton components with images and alt text", () => {
        const techButtons = component.getAllByRole("link");
        techButtons.forEach((button: HTMLElement) => {
            const image = button.querySelector("img");
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute("alt");
        });
    });

    it("contains TechButton components", () => {
        const techButtons = component.getAllByRole("link");
        expect(techButtons).toHaveLength(7);
        techButtons.forEach((button: HTMLElement) => {
            expect(button.querySelector("img")).toBeInTheDocument();
        });
    });

    it("renders all TechButton components with correct images", () => {
        const techButtons = component.getAllByRole("link");
        const techSymbols = ["ReactSymbol.png", "SOLIDProjectSymbol.png", "TypeScriptSymbol.png", "OpenStreetMapSymbol.png", "NodeJSSymbol.png", "WebStormSymbol.png", "BootStrapSymbol.png",];
        techButtons.forEach((button: HTMLElement, index: number) => {
            const image = button.querySelector("img");
            expect(image).toHaveAttribute("src", techSymbols[index]);
        });
    });

    it("renders all TechButton components with correct hrefs", () => {
        const techButtons = component.getAllByRole("link");
        const techHrefs = ["https://reactjs.org/", "https://solidproject.org/", "https://www.typescriptlang.org/", "https://www.openstreetmap.org/", "https://nodejs.org/en/", "https://www.jetbrains.com/webstorm/", "https://getbootstrap.com/",];
        techButtons.forEach((button: HTMLElement, index: number) => {
            expect(button).toHaveAttribute("href", techHrefs[index]);
        });
    });

    it("displays all tech symbols", async () => {
        const reactSymbol = component.getByAltText("React Symbol");
        const solidSymbol = component.getByAltText("SOLID Project Symbol");
        const typescriptSymbol = component.getByAltText("TypeScript Symbol");
        const openStreetMapSymbol = component.getByAltText("OpenStreetMap Symbol");
        const nodeJSSymbol = component.getByAltText("NodeJS Symbol");
        const webStormSymbol = component.getByAltText("WebStorm Symbol");
        const bootstrapSymbol = component.getByAltText("Bootstrap Symbol");
        expect(reactSymbol).toBeInTheDocument();
        expect(solidSymbol).toBeInTheDocument();
        expect(typescriptSymbol).toBeInTheDocument();
        expect(openStreetMapSymbol).toBeInTheDocument();
        expect(nodeJSSymbol).toBeInTheDocument();
        expect(webStormSymbol).toBeInTheDocument();
        expect(bootstrapSymbol).toBeInTheDocument();
    });
});

