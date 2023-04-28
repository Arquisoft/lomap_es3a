import {render} from "@testing-library/react";
import TechButton from "../../components/home/TechButton";
import ReactSymbol from "../../img/symbols/ReactSymbol.png";
import WebStormSymbol from "../../img/symbols/WebStormSymbol.png";

describe("TechButton", () => {
    let component: any;

    beforeEach(() => {
        component = render(<TechButton href="https://reactjs.org/" img={ReactSymbol} text="React Symbol"/>);
    })

    it("renders correctly", async () => {
        const techButtonElement = component.getByAltText("React Symbol");

        expect(techButtonElement).toBeInTheDocument();
        expect(techButtonElement).toHaveAttribute("src", "ReactSymbol.png");
    });

    it("displays image with correct dimensions", () => {
        const imgElement = component.getByRole("img");
        expect(imgElement).toHaveAttribute("width", "65");
        expect(imgElement).toHaveAttribute("height", "65");
    });

    it("renders with Jest symbol and correct href", () => {
        const {getByAltText} = render(
            <TechButton href="https://www.jetbrains.com/webstorm/" img={WebStormSymbol} text="WebStorm Symbol"/>
        );
        const techButtonElement = getByAltText("WebStorm Symbol");

        expect(techButtonElement).toBeInTheDocument();
        expect(techButtonElement).toHaveAttribute("src", "WebStormSymbol.png");
        expect(techButtonElement.closest(".techButtons")).toHaveAttribute(
            "href",
            "https://www.jetbrains.com/webstorm/");
    });

    it("renders with correct props", () => {
        const techButtonElement = component.getByAltText("React Symbol");

        expect(techButtonElement).toBeInTheDocument();
        expect(techButtonElement).toHaveAttribute("src", "ReactSymbol.png");
        expect(techButtonElement.closest(".techButtons")).toHaveAttribute(
            "href",
            "https://reactjs.org/"
        );
    });
});
