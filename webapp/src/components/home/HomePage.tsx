import NavBar from "../navigation/NavBar";
import MainScreen from "./MainScreen";
import React from "react";
import image1 from "../../img/City.png"
import image2 from "../../img/FullLogo.png"
import Carousel from "../home/Carousel"
const images = [image1,image2]
const items = [
    {
        id: 1,
        image: 'https://picsum.photos/800/400?random=1',
        caption: 'Imagen 1',
    },
    {
        id: 2,
        image: 'https://picsum.photos/800/400?random=2',
        caption: 'Imagen 2',
    },
    {
        id: 3,
        image: 'https://picsum.photos/800/400?random=3',
        caption: 'Imagen 3',
    },
];

function HomePage() {
    return (
        <div>
            <NavBar/>
            <Carousel/>
            <MainScreen/>
        </div>
    )
}

export default HomePage