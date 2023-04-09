import {fireEvent, render} from "@testing-library/react";
import DocumentationButton from "../../components/home/DocumentationButton";

test("Documentation button renders correctly", async () => {
    const {getByText} = render(<DocumentationButton/>);
    expect(getByText("docs_button")).toBeInTheDocument();
});