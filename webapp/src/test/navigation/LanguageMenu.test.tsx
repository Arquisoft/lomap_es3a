import React from 'react';
import {act, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import LanguageMenu from '../../components/navigation/LanguageMenu';

describe('LanguageMenu component', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(
            <LanguageMenu/>
        );
    })

    afterEach(() => {
        component.unmount();
    })

    it('renders without errors', () => {
        expect(component.getByText('Language')).toBeInTheDocument();
    });

    it('shows the language menu when the toggle is clicked', () => {
        expect(component.queryByText('English')).not.toBeInTheDocument();
        act(() => {
            fireEvent.click(component.getByText('Language'));
        });
        expect(component.getByText('English')).toBeInTheDocument();
    });

    it('changes language when an option is selected', () => {
        act(() => {
            fireEvent.click(component.getByText('Language'));
        });
        act(() => {
            fireEvent.click(component.getByText('Español'));
        });
        expect(sessionStorage.getItem('language')).toBe('es');
    });

    it('does not display a language option if no languages are available', () => {
        expect(component.queryByText('Language')).not.toBeInTheDocument();
    });

    it('displays the selected language', () => {
        act(() => {
            fireEvent.click(component.getByText('Idioma'));
        });
        expect(component.getByText('Español')).toBeInTheDocument();
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
        act(() => {
            fireEvent.click(component.getByText('Español'));
        });
        expect(screen.getByText('Idioma')).toBeInTheDocument();
    });

    it('changes all languages', () => {
        act(() => {
            fireEvent.click(component.getByText('Idioma'));
        });
        act(() => {
            fireEvent.click(component.getByText('Español'));
        });
        expect(sessionStorage.getItem('language')).toBe('es');
        act(() => {
            fireEvent.click(component.getByText('English'));
        });
        expect(sessionStorage.getItem('language')).toBe('en');
        act(() => {
            fireEvent.click(component.getByText('French'));
        });
        expect(sessionStorage.getItem('language')).toBe('fr');
        act(() => {
            fireEvent.click(component.getByText('Deutsch'));
        })
        expect(sessionStorage.getItem('language')).toBe('deu');
        act(() => {
            fireEvent.click(component.getByText('中文在此'));
        });
        expect(sessionStorage.getItem('language')).toBe('chn');
        act(() => {
            fireEvent.click(component.getByText('Asturianu'));
        });
        expect(sessionStorage.getItem('language')).toBe('ast');
    });
});
