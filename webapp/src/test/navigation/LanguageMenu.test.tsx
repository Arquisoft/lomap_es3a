import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageMenu from '../../components/navigation/LanguageMenu';

describe('LanguageMenu component', () => {
    afterEach(() => {
        sessionStorage.clear();
    });

    it('renders without errors', () => {
        const component = render(<LanguageMenu />);
        expect(component.getByText('Language')).toBeInTheDocument();
        component.unmount();
    });

    it('shows the language menu when the toggle is clicked', () => {
        const component = render(<LanguageMenu />);
        expect(component.queryByText('English')).not.toBeInTheDocument();
        fireEvent.click(component.getByText('Language'));
        expect(component.getByText('English')).toBeInTheDocument();
        component.unmount();
    });

    it('changes language when an option is selected', () => {
        const component = render(<LanguageMenu />);
        fireEvent.click(component.getByText('Language'));
        fireEvent.click(component.getByText('Español'));
        expect(sessionStorage.getItem('language')).toBe('es');
        component.unmount();
    });

    it('does not display a language option if no languages are available', () => {
        const component = render(<LanguageMenu />);
        expect(component.queryByText('Language')).not.toBeInTheDocument();
        component.unmount();
    });

    it('displays the selected language', () => {
        sessionStorage.setItem('language', 'es');
        const component = render(<LanguageMenu />);
        fireEvent.click(component.getByText('Idioma'));
        expect(component.getByText('Español')).toBeInTheDocument();
        component.unmount();
    });
});
