import {render, screen} from '@testing-library/react';
import {PersonCard} from "../../components/about/PersonCard";

describe('PersonCard component', () => {
    const mockPerson = {
        name: 'Omar',
        image: 'https://avatars.githubusercontent.com/u/91057639?v=4',
        description: 'Software Engineering Student at the University of Oviedo, UO281847. Currently in 3rd year. 21 yo.',
        github: 'Omitg24'
    };

    test('renders person name and github username', () => {
        render(<PersonCard person={mockPerson} />);
        const nameElement = screen.getByText("Omar");
        const githubElement = screen.getByText("Omitg24");
        expect(nameElement).toBeInTheDocument();
        expect(githubElement).toBeInTheDocument();
    });

    test('renders person image', () => {
        render(<PersonCard person={mockPerson} />);
        const imageElement = screen.getByAltText("Omar") as HTMLImageElement;
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.src).toBe('https://avatars.githubusercontent.com/u/91057639?v=4');
    });

    test('renders person description', () => {
        render(<PersonCard person={mockPerson} />);
        const descriptionElement = screen.getByText("Software Engineering Student at the University of Oviedo, UO281847. Currently in 3rd year. 21 yo.");
        expect(descriptionElement).toBeInTheDocument();
    });

    test('renders a link to person GitHub profile', () => {
        render(<PersonCard person={mockPerson} />);
        const githubLinkElement = screen.getByRole('link', { name: "View Omar's GitHub profile" });
        expect(githubLinkElement).toBeInTheDocument();
        expect(githubLinkElement).toHaveAttribute('href', 'https://github.com/Omitg24');
        expect(githubLinkElement).toHaveAttribute('target', '_blank');
        expect(githubLinkElement).toHaveAttribute('rel', 'noopener');
    });
});
