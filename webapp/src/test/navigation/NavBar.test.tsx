import {act, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import NavBar from '../../components/navigation/NavBar';
import {BrowserRouter as Router} from "react-router-dom";
describe('NavBar', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(
            <Router>
                <NavBar/>
            </Router>
        );
    })

    afterEach(() => {
        component.unmount();
    })

    it('renders the logo', () => {
        const logo = component.getByAltText('GOMap Logo');
        expect(logo).toBeInTheDocument();
    });

    it('displays the correct links', () => {
        const homeLink = component.getByRole('link', {name: 'Home'});
        const mapLink = component.getByRole('link', {name: 'Map'});
        const helpLink = component.getByRole('link', {name: 'Help'});
        const aboutLink = component.getByRole('link', {name: 'About'});
        expect(homeLink).toBeInTheDocument();
        expect(mapLink).toBeInTheDocument();
        expect(helpLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
    });

    it('displays the language menu', () => {
        const languageButton = component.getByRole('button', {name: 'Language'});
        expect(languageButton).toBeInTheDocument();
        act(() => {
            fireEvent.click(languageButton);
        });
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
        expect(screen.getByText('French')).toBeInTheDocument();
        expect(screen.getByText('Deutsch')).toBeInTheDocument();
        expect(screen.getByText('中文在此')).toBeInTheDocument();
        expect(screen.getByText('Asturianu')).toBeInTheDocument();
    });

    it('displays the login button when not logged in', () => {
        const loginButton = component.getByRole('link', {name: 'Log in'});
        expect(loginButton).toBeInTheDocument();
    });

    it('navbar collapses when window is resized', () => {
        const nav = component.container.querySelector('.navbar');

        expect(nav?.classList).toContain('nav-normal');
        expect(nav?.classList).not.toContain('nav-expanded');

        act(() => {
            fireEvent(window, new Event('resize'));
        });

        expect(nav?.classList).toContain('nav-normal');
        expect(nav?.classList).not.toContain('nav-expanded');
    });
});
