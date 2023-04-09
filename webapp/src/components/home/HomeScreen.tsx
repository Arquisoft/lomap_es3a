import "../../css/home.css"
import TechButton from "./TechButton";
import FooterInfo from "../FooterInfo";
import DocumentationButton from "./DocumentationButton";
import ImgCarousel from "./ImgCarousel";
import ReactSymbol from "../../img/symbols/ReactSymbol.png";
import SOLIDProjectSymbol from "../../img/symbols/SOLIDProjectSymbol.png";
import TypeScriptSymbol from "../../img/symbols/TypeScriptSymbol.png";
import OpenStreetMap from "../../img/symbols/Openstreetmap_logo.png";
import NodeJSSymbol from "../../img/symbols/NodeJSSymbol.png";
import WebStormSymbol from "../../img/symbols/WebStormSymbol.png";
import Bootstrap from "../../img/symbols/Bootstrap_logo.png";
import React from "react";
import {useTranslation} from 'react-i18next';
import DescriptionText from "./DescriptionText";

function Symbols() {
    const { t } = useTranslation();

    return (
        <div id="symbolsPanel">
            <h2>{t("tech_stack")}</h2>
            <TechButton href={"https://reactjs.org/"} img={ReactSymbol} text={"React Symbol"}/>
            <TechButton href={"https://solidproject.org/"} img={SOLIDProjectSymbol} text={"SOLID Project Symbol"}/>
            <TechButton href={"https://www.typescriptlang.org/"} img={TypeScriptSymbol} text={"TypeScript Symbol"}/>
            <TechButton href={"https://www.openstreetmap.org/"} img={OpenStreetMap} text={"OpenStreetMaps Symbol"}/>
            <TechButton href={"https://nodejs.org/en/"} img={NodeJSSymbol} text={"NodeJS Symbol"}/>
            <TechButton href={"https://www.jetbrains.com/webstorm/"} img={WebStormSymbol} text={"WebStorm Symbol"}/>
            <TechButton href={"https://getbootstrap.com/"} img={Bootstrap} text={"Bootstrap Symbol"}/>
        </div>
    )
}

function HomeScreen() {
    const { t } = useTranslation();

    return (
        <div id="screen">
            <div>
                <ImgCarousel/>
                <DescriptionText/>
                <DocumentationButton href={"https://arquisoft.github.io/lomap_es3a/"}
                                     text={t("docs_button")}/>
                <div id="usedTechnologies">
                    <Symbols/>
                </div>
                <FooterInfo/>
            </div>
        </div>
    )
}

export default HomeScreen