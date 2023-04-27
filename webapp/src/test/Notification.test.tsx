import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notification from '../components/Notification';

test('Notification renders correctly', async () => {
    const props = {
        title: 'Test Title',
        message: 'Test Message',
        time: 'Test Time',
        icon: 'https://ejemplo.com/imagen.png',
        onClose: jest.fn(),
    };

    render(<Notification {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.message)).toBeInTheDocument();
    expect(screen.getByText(props.time)).toBeInTheDocument();
    expect(screen.getByAltText('icon')).toHaveAttribute('src', props.icon);
});

test('Notification call onClose when close button is clicked', async () => {
    const props = {
        title: 'Test Title',
        message: 'Test Message',
        time: 'Test Time',
        icon: 'https://ejemplo.com/imagen.png',
        onClose: jest.fn(),
    };

    render(<Notification {...props} />);
    const closeButton = screen.getByRole('close');
    fireEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalled();
});

test('Notification should disappear after closing', async () => {
    const props = {
        title: 'Test Title',
        message: 'Test Message',
        time: 'Test Time',
        icon: 'https://ejemplo.com/imagen.png',
        onClose: jest.fn(),
    };

    const { container } = render(<Notification {...props} />);
    const closeButton = screen.getByRole('close');
    fireEvent.click(closeButton);
    expect(container.firstChild).not.toBeInTheDocument();
});