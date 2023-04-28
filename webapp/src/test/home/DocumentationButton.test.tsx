import {fireEvent, render} from "@testing-library/react";
import DocumentationButton from "../../components/home/DocumentationButton";

describe("DocumentationButton", () => {

    it("renders correctly", async () => {
        const {getByText} = render(<DocumentationButton/>);
        expect(getByText("See our documentation 🔗")).toBeInTheDocument();
    });
    it("renders a link", () => {
        const {getByRole} = render(<DocumentationButton/>);
        const link = getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe('https://arquisoft.github.io/lomap_es3a/');
    });
});
