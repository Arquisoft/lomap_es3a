import { render, fireEvent } from '@testing-library/react';
import Filter from "../../../components/map/options/Filter";

jest.mock('../../../components/map/MapView', () => {
    return function MockContactMap() {
        return <div data-testid="mapMock">Mock</div>;
    };
});

describe('Filter', () => {
    beforeEach(() => {
        const mapView = document.createElement("div");
        mapView.id = "mapView";
        document.body.appendChild(mapView);
    });

    it('renders correctly', () => {
        const props = {
            nameFilter: 'testName',
            usersWebId: [],
            setItem: jest.fn(),
        };

        const { getByText } = render(<Filter {...props} />);

        expect(getByText('Category')).toBeInTheDocument();
    });

    it('updates markers when category is changed', () => {
        const props = {
            nameFilter: 'testName',
            usersWebId: [],
            setItem: jest.fn(),
        };
        const { container } = render(<Filter {...props} />);
        const select = container.querySelector('select') as HTMLSelectElement;
        expect(select.value).toBe('All');

        fireEvent.change(select, { target: { value: 'Cinema' } });

        const mapView = container.querySelector('#mapView');
        expect(mapView).not.toBeInTheDocument();
    });
});
