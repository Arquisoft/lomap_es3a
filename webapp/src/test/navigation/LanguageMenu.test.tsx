import React from 'react';
import {render, fireEvent, act, screen} from '@testing-library/react';
import LanguageMenu from '../../components/navigation/LanguageMenu';

describe('LanguageMenu component', () => {
    let component: any;

    beforeEach(() => {

        component = render(
            <LanguageMenu />
        );
    })

    afterEach(() => {
        component.unmount();
    })

    it('renders without errors', () => {
        expect(component.getByText('Language')).toBeInTheDocument();
        component.unmount();
    });

    it('shows the language menu when the toggle is clicked', () => {
        expect(component.queryByText('English')).not.toBeInTheDocument();
        fireEvent.click(component.getByText('Language'));
        expect(component.getByText('English')).toBeInTheDocument();
        component.unmount();
    });

    it('changes language when an option is selected', () => {
        fireEvent.click(component.getByText('Language'));
        fireEvent.click(component.getByText('Español'));
        expect(sessionStorage.getItem('language')).toBe('es');
        component.unmount();
    });

    it('does not display a language option if no languages are available', () => {
        expect(component.queryByText('Language')).not.toBeInTheDocument();
        component.unmount();
    });

    it('displays the selected language', () => {
        fireEvent.click(component.getByText('Idioma'));
        expect(component.getByText('Español')).toBeInTheDocument();
        component.unmount();
    });

    it('displays the language menu', () => {
        act(() => {
            fireEvent.click(component.getByText("Idioma"));
        });
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
        expect(screen.getByText('French')).toBeInTheDocument();
        expect(screen.getByText('Deutsch')).toBeInTheDocument();
        expect(screen.getByText('中文在此')).toBeInTheDocument();
        expect(screen.getByText('Asturianu')).toBeInTheDocument();
    });

    it('changes selected language', () => {
        act(() => {
            fireEvent.click(component.getByText("Idioma"));
        });
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
        expect(screen.getByText('French')).toBeInTheDocument();
        expect(screen.getByText('Deutsch')).toBeInTheDocument();
        expect(screen.getByText('中文在此')).toBeInTheDocument();
        expect(screen.getByText('Asturianu')).toBeInTheDocument();
        fireEvent.click(component.getByText('Español'));
        expect(screen.getByText('Idioma')).toBeInTheDocument();
    });
});