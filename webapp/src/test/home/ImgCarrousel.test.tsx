import { render } from "@testing-library/react";
import ImgCarousel from "../../components/home/ImgCarousel";

test("Carousel renders correctly", async () => {
    const { container } = render(<ImgCarousel />);
    const carousel = container.querySelector(".carousel");

    expect(carousel).toBeInTheDocument();
});

test("Carousel displays images in correct order", async () => {
    const { container } = render(<ImgCarousel />);
    const carouselItems = container.querySelectorAll(".carousel-item");

    expect(carouselItems).toHaveLength(5);
    expect(carouselItems[0].querySelector("img")).toHaveAttribute("src", "Kremlin.png");
    expect(carouselItems[1].querySelector("img")).toHaveAttribute("src", "Rijksmuseum.png");
    expect(carouselItems[2].querySelector("img")).toHaveAttribute("src", "Wallpaper.png");
    expect(carouselItems[3].querySelector("img")).toHaveAttribute("src", "EiffelTower.png");
    expect(carouselItems[4].querySelector("img")).toHaveAttribute("src", "Colosseum.png");
});
