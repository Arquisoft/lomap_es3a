import {fireEvent, render} from "@testing-library/react";
import ImgCarousel from "../../components/home/ImgCarousel";

describe("ImgCarousel", () => {
    let component: any;

    beforeEach(() => {
        component = render(<ImgCarousel />);
    })

    afterEach(() => {
        component.unmount();
    })

    it("renders correctly", async () => {
        expect(component.getByAltText("GOMap! Wallpaper")).toBeInTheDocument();
    });

    it('has images', () => {
        expect(component.getByAltText('Kremlin')).toBeInTheDocument();
        expect(component.getByAltText('Rijksmuseum')).toBeInTheDocument();
        expect(component.getByAltText('GOMap! Wallpaper')).toBeInTheDocument();
        expect(component.getByAltText('Eiffel Tower')).toBeInTheDocument();
        expect(component.getByAltText('Roman Coliseum')).toBeInTheDocument();
    });

    it('contains correct number of images', () => {
        const images = component.getAllByRole('img');
        expect(images.length).toBe(5);
    });

    it('shows correct image as default', () => {
        const defaultImage = component.getByAltText('GOMap! Wallpaper');
        expect(defaultImage).toBeInTheDocument();
        expect(defaultImage.closest('.carousel-item')).toHaveClass('active');
    });

    it('displays images in correct order', () => {
        const carouselItems = component.container.querySelectorAll('.carousel-item');
        expect(carouselItems).toHaveLength(5);
        expect(carouselItems[0].querySelector('img')).toHaveAttribute('src', 'Kremlin.png');
        expect(carouselItems[1].querySelector('img')).toHaveAttribute('src', 'Rijksmuseum.png');
        expect(carouselItems[2].querySelector('img')).toHaveAttribute('src', 'Wallpaper.png');
        expect(carouselItems[3].querySelector('img')).toHaveAttribute('src', 'EiffelTower.png');
        expect(carouselItems[4].querySelector('img')).toHaveAttribute('src', 'Colosseum.png');
    });
});