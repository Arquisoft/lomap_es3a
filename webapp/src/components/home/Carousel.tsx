import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/carousel.css';
import WallpaperImage from "../../img/Wallpaper.png";
export default function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src="https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to GOMap!</h3>
                    <p>Disfruta de explorar el mundo junto a nosotros!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block px w-100"
                    src={WallpaperImage}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src="https://i0.wp.com/lucesdelsiglo.com/wp-content/uploads/2021/04/pexels-athena-6580703.gif?fit=1200%2C675&ssl=1"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}