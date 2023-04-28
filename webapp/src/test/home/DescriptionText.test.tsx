import { render } from "@testing-library/react";
import DescriptionText from "../../components/home/DescriptionText";

describe("DescriptionText", () => {
    it("renders correctly", async () => {
        const {getByText} = render(<DescriptionText/>);
        expect(getByText("GOMap!® is an application where users can have custom maps about places and local business in their city like shops, bars, restaurants, monuments, cinemas...")).toBeInTheDocument();
        expect(getByText("Also the application allows users to interact with their friends by viewing the places they have saved.")).toBeInTheDocument();
    });

    it("contains a div with id 'documentation'", async () => {
        const {container} = render(<DescriptionText/>);
        expect(container.querySelector("#documentation")).toBeInTheDocument();
    });

    it("contains two paragraphs", async () => {
        const {container} = render(<DescriptionText/>);
        expect(container.querySelectorAll("p").length).toBe(2);
    });
});
