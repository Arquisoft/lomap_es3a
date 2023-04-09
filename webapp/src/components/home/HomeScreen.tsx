import "../../css/home.css"
import FooterInfo from "../FooterInfo";
import DocumentationButton from "./DocumentationButton";
import ImgCarousel from "./ImgCarousel";
import React from "react";
import DescriptionText from "./DescriptionText";
import TechStack from "./TechStack";

function HomeScreen() {
    return (
        <div id="screen">
            <div>
                <ImgCarousel/>
                <DescriptionText/>
                <DocumentationButton/>
                <div id="usedTechnologies">
                    <TechStack/>
                </div>
                <FooterInfo/>
            </div>
        </div>
    )
}

export default HomeScreen