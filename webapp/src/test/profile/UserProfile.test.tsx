import {act, render, RenderResult} from '@testing-library/react';
import UserProfile from '../../components/profile/UserProfile';

describe("UserProfile", () => {
    let component : RenderResult;

    beforeEach(() => {
        component = render(<UserProfile />);
    })

    afterEach(() =>{
        component.unmount();
    })
    
    it('renders the user profile header', () => {        
        const header = component.getByRole('heading');
        expect(header).toBeInTheDocument();
    });

    it('renders the user name', () => {        
        const name = component.getAllByText('Fetching data...')[1];
        expect(name).toBeInTheDocument();
    });

    it('renders the friend list', () => {        
        const friendList = component.getByText('You don\'t have any friends added to your account');
        expect(friendList).toBeInTheDocument();
    });

    it('renders the edit name button', () => {        
        const editButton = component.getByRole('button');
        expect(editButton).toBeInTheDocument();
    });

    it('clicking the edit name button toggles the edit mode', () => {
        const editButton = component.getByRole('button');
        expect(editButton).toHaveTextContent('EDIT NAME');
        act(() => {
            editButton.click();
        })
        const confirmButton = component.getByRole('button');
        expect(confirmButton).toHaveTextContent('CONFIRM EDIT');
    });
});