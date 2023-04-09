import { render } from "@testing-library/react";
import DocumentationButton from "../../components/home/DocumentationButton";

test("Documentation button renders correctly", async () => {
    const {getByText} = render(<DocumentationButton href={"https://arquisoft.github.io/lomap_es3a/"}
                                                    text={"See our documentation"}/>);
    expect(getByText("See our documentation")).toBeInTheDocument();
});

test("Documentation button redirects to documentation", async () => {
    const {getByText} = render(<DocumentationButton href={"https://arquisoft.github.io/lomap_es3a/"}
                                                    text={"See our documentation"}/>);
    expect(getByText("See our documentation")).toBeInTheDocument();
});