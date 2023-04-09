import { render } from "@testing-library/react";
import DescriptionText from "../../components/home/DescriptionText";


test("DescriptionText renders correctly", async () => {
    const {getByText} = render(<DescriptionText/>);
    expect(getByText("home_info1")).toBeInTheDocument();
    expect(getByText("home_info2")).toBeInTheDocument();
});