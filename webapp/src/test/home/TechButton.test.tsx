import {render} from "@testing-library/react";
import TechButton from "../../components/home/TechButton";
import ReactSymbol from "../../img/symbols/ReactSymbol.png";

test("TechButton renders correctly", async () => {
    const {getByAltText} = render(
        <TechButton href={"https://reactjs.org/"} img={ReactSymbol} text={"React Symbol"}/>
    );

    const techButtonElement = getByAltText("React Symbol");

    expect(techButtonElement).toBeInTheDocument();
    expect(techButtonElement).toHaveAttribute("src", "ReactSymbol.png");
});