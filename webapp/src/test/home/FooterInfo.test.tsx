import { render } from "@testing-library/react";
import FooterInfo from "../../components/home/FooterInfo";

describe("FooterInfo", () => {
    let component: any;

    beforeEach(() => {
        component = render(<FooterInfo />);
    })

    afterEach(() => {
        component.unmount();
    })

    it("renders without crashing", () => {
        expect(component.getByText("© Arquisoft - UNIOVI")).toHaveAttribute("id", "link");
    });

    it("renders the footer text correctly", () => {
        expect(component.getByText("© Arquisoft - UNIOVI")).toBeInTheDocument();
    });

    it("renders the footer link correctly", () => {
        expect(component.getByText("© Arquisoft - UNIOVI")).toBeInTheDocument();
        expect(component.getByText("© Arquisoft - UNIOVI")).toHaveAttribute("id", "link");
        expect(component.getByText("© Arquisoft - UNIOVI")).toHaveAttribute("href", "https://arquisoft.github.io/");
    });
});
