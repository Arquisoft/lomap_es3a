import {fireEvent, render, screen} from "@testing-library/react";
import HomePage from "../../components/home/HomePage";

describe("HomePage", () => {
    it("renders ImgCarousel", () => {
        render(<HomePage />);
        const imgCarousel = screen.getByAltText("GOMap! Wallpaper");
        expect(imgCarousel).toBeInTheDocument();
    });

    it("renders DescriptionText", () => {
        render(<HomePage />);
        const descriptionText1 = screen.getByText("GOMap!® is an application where users can have custom maps about places and local business in their city like shops, bars, restaurants, monuments, cinemas...");
        const descriptionText2 = screen.getByText("Also the application allows users to interact with their friends by viewing the places they have saved.");
        expect(descriptionText1).toBeInTheDocument();
        expect(descriptionText2).toBeInTheDocument();
    });

    it("renders DocumentationButton", () => {
        render(<HomePage />);
        const documentationButton = screen.getByRole("link", {name: "See our documentation 🔗"});
        expect(documentationButton).toBeInTheDocument();
    });

    it("renders TechStack", () => {
        render(<HomePage />);
        const techStack = screen.getByText("Used technologies:");
        const react = screen.getByAltText("React Symbol");
        const solid = screen.getByAltText("SOLID Project Symbol");
        const typescript = screen.getByAltText("TypeScript Symbol");
        const openstreetmap = screen.getByAltText("OpenStreetMap Symbol");
        const node = screen.getByAltText("NodeJS Symbol");
        const webstorm = screen.getByAltText("WebStorm Symbol");
        const bootstrap = screen.getByAltText("Bootstrap Symbol");
        expect(techStack).toBeInTheDocument();
        expect(react).toBeInTheDocument();
        expect(solid).toBeInTheDocument();
        expect(typescript).toBeInTheDocument();
        expect(openstreetmap).toBeInTheDocument();
        expect(node).toBeInTheDocument();
        expect(webstorm).toBeInTheDocument();
        expect(bootstrap).toBeInTheDocument();
    });

    it("renders FooterInfo", () => {
        render(<HomePage />);
        const footerInfo = screen.getByText("© Arquisoft - UNIOVI");
        expect(footerInfo).toBeInTheDocument();
    });

    it("shows welcome notification on first visit", () => {
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: jest.fn(() => null),
                setItem: jest.fn(() => null),
            },
            writable: true,
        });

        render(<HomePage />);
        const welcomeNotification = screen.getByAltText("icon");
        expect(welcomeNotification).toBeInTheDocument();
    });

    it("does not show welcome notification on subsequent visits", () => {
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: jest.fn(() => "true"),
                setItem: jest.fn(() => null),
            },
            writable: true,
        });

        render(<HomePage />);

        const welcomeNotification = screen.queryByTestId("welcome-notification");
        expect(welcomeNotification).not.toBeInTheDocument();
    });

    it("handles dismiss welcome notification", () => {

        render(
            <HomePage />
        );

        const welcomeNotification = screen.getByAltText("icon");

        const dismissButton = screen.getAllByRole("button")[7];

        fireEvent.click(dismissButton);

        expect(welcomeNotification).not.toBeVisible();
    });
});
