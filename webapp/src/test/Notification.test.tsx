import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Notification from '../components/Notification';

jest.useFakeTimers();

describe("Notification", () => {
    afterEach(() => {
        jest.clearAllTimers();
    });

    it('renders correctly', async () => {
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

    it('call onClose when close button is clicked', async () => {
        const props = {
            title: 'Test Title',
            message: 'Test Message',
            time: 'Test Time',
            icon: 'https://ejemplo.com/imagen.png',
            onClose: jest.fn(),
        };

        render(<Notification {...props} />);
        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(props.onClose).toHaveBeenCalled();
    });

    it('should disappear after closing', async () => {
        const props = {
            title: 'Test Title',
            message: 'Test Message',
            time: 'Test Time',
            icon: 'https://ejemplo.com/imagen.png',
            onClose: jest.fn(),
        };

        const { container } = render(<Notification {...props} />);
        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it('should call onClose and set isOpen to false', () => {
        const onCloseMock = jest.fn();
        const props = {
            title: 'Test Title',
            message: 'Test Message',
            time: 'Test Time',
            icon: 'https://ejemplo.com/imagen.png',
            onClose: onCloseMock,
        };

        const { container } = render(<Notification {...props} />);
        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);

        expect(onCloseMock).toHaveBeenCalled();
        expect(container.firstChild).not.toBeInTheDocument();
    });

    it("calls handleClose when close button is clicked", () => {
        const onClose = jest.fn();
        render(<Notification title="Test Title" message="Test Message" time="Test Time" icon="GOMapSymbol" onClose={onClose} />);

        fireEvent.click(screen.getByRole("button"));

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});