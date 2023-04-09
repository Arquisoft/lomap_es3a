import { render } from "@testing-library/react";
import FooterInfo from "../../components/home/FooterInfo";

test("Footer renders correctly", async () => {
    const {getByText} = render(<FooterInfo/>);
    expect(getByText("© Arquisoft - UNIOVI")).toBeInTheDocument();
});