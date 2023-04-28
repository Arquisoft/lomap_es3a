import {act, render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import OurAvatar from '../../components/navigation/OurAvatar';

describe('OurAvatar', () => {
    it('renders correctly', async () => {
        render(
            <Router>
                <OurAvatar webId={"https://omitg.solidcommunity.net/profile/card#me"}/>
            </Router>,
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays the user name in the dropdown menu', async () => {
        render(
            <Router>
                <OurAvatar webId={"https://omitg.solidcommunity.net/profile/card#me"}/>
            </Router>,
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
        act(() => {
            screen.getByRole('button').click();
        });
        expect(screen.getByText('registered as')).toBeInTheDocument();
    });

    it('opens and closes the dropdown menu on click', async () => {
        render(
            <Router>
                <OurAvatar webId={"https://omitg.solidcommunity.net/profile/card#me"}/>
            </Router>,
        );

        expect(screen.getByText('registered as')).not.toBeVisible();
        act(() => {
            screen.getByRole('button').click();
        });
        expect(screen.getByText('registered as')).toBeVisible();
    });

    it('has links to the profile and friends pages in the dropdown menu', async () => {
        render(
            <Router>
                <OurAvatar webId={"https://omitg.solidcommunity.net/profile/card#me"}/>
            </Router>,
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
        act(() => {
            screen.getByRole('button').click();
        });
        const profileLink = screen.getByRole('menuitem', {name: 'User profile'});
        expect(profileLink).toBeInTheDocument();
        expect(profileLink.getAttribute('href')).toBe('/profile');

        const friendsLink = screen.getByRole('menuitem', {name: 'Friends'});
        expect(friendsLink).toBeInTheDocument();
        expect(friendsLink.getAttribute('href')).toBe('/friends');
    });

});

