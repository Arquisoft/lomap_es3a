import { render } from "@testing-library/react";
import TechStack from "../../components/home/TechStack";

test("TechStack renders correctly", async () => {
    const {getByText} = render(<TechStack/>);
    expect(getByText("tech_stack")).toBeInTheDocument();
});

test("TechStack displays all tech symbols", async () => {
    const { getByAltText } = render(<TechStack />);
    const reactSymbol = getByAltText("React Symbol");
    const solidSymbol = getByAltText("SOLID Project Symbol");
    const typescriptSymbol = getByAltText("TypeScript Symbol");
    const openStreetMapSymbol = getByAltText("OpenStreetMaps Symbol");
    const nodeJSSymbol = getByAltText("NodeJS Symbol");
    const webStormSymbol = getByAltText("WebStorm Symbol");
    const bootstrapSymbol = getByAltText("Bootstrap Symbol");
    expect(reactSymbol).toBeInTheDocument();
    expect(solidSymbol).toBeInTheDocument();
    expect(typescriptSymbol).toBeInTheDocument();
    expect(openStreetMapSymbol).toBeInTheDocument();
    expect(nodeJSSymbol).toBeInTheDocument();
    expect(webStormSymbol).toBeInTheDocument();
    expect(bootstrapSymbol).toBeInTheDocument();
});