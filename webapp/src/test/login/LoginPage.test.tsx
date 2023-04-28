import {render, fireEvent, RenderResult} from "@testing-library/react";
import LoginPage from "../../components/login/LoginPage";


describe("LoginPage", () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<LoginPage />);
    });

    afterEach(() => {
        component.unmount();
    });

    it("renders the login form", async () => {
        const form = component.container.querySelector("#loginForm");
        expect(form).toBeInTheDocument();
    });

    it("displays the logo", async () => {
        const logo = component.container.querySelector("img");
        expect(logo).toBeInTheDocument();
    });

    it("displays the login button", async () => {
        const loginButton = component.container.querySelector("#login");
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveTextContent("Log in");
    });

    it("displays a select element to choose the provider", async () => {
        const selectElement = component.container.querySelector("#selectProvider");
        expect(selectElement).toBeInTheDocument();
        expect(selectElement).toHaveValue("https://inrupt.net");
    });

    it("changes the provider when select element changes", async () => {
        const selectElement = component.container.querySelector("#selectProvider") as HTMLSelectElement;
        fireEvent.change(selectElement, {target: {value: "https://solidcommunity.net"}});
        expect(selectElement.value).toEqual("https://solidcommunity.net");
    });

    it("displays the registration link for the selected provider", async () => {
        const selectElement = component.container.querySelector("#selectProvider") as HTMLSelectElement;
        const registrationLink = component.container.querySelector("a");
        expect(registrationLink).toBeInTheDocument();
        expect(registrationLink?.href).toEqual(selectElement.value + "/register");
    });
});
