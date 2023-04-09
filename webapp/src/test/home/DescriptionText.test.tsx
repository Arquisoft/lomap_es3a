import { render } from "@testing-library/react";
import DescriptionText from "../../components/home/DescriptionText";

test("DescriptionText renders correctly", async () => {
    const {getByText} = render(<DescriptionText/>);
    expect(getByText("GOMap!® is an application where users can have custom maps about places and local business in their city like shops, bars, restaurants, monuments, cinemas...")).toBeInTheDocument();
    expect(getByText("Also the application allows users to interact with their friends by viewing the places they have saved.")).toBeInTheDocument();
});