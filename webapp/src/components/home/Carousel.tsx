import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/carousel.css';
import Wallpaper from "../../img/Wallpaper.png";
import Colosseum from "../../img/Colosseum.png";
import Rijksmuseum from "../../img/Rijksmuseum.png";
import EiffelTower from "../../img/EiffelTower.png";
import Kremlin from "../../img/Kremlin.png";

function ImgCarousel() {
    return (
        <Carousel defaultActiveIndex={2}>
            <Carousel.Item>
                <img
                    src={Kremlin}
                    alt="Kremlin"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={Rijksmuseum}
                    alt="Rijksmuseum"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={Wallpaper}
                    alt="GOMap! Wallpaper"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={EiffelTower}
                    alt="Eiffel Tower"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={Colosseum}
                    alt="Roman Coliseum"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImgCarousel