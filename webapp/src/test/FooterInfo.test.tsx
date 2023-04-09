import { render } from "@testing-library/react";
import FooterInfo from "../components/FooterInfo";

test("Footer renders correctly", async () => {
    const {getByText} = render(<FooterInfo/>);
    expect(getByText("footer")).toBeInTheDocument();
});