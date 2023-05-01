import {initReactI18next, useTranslation} from "react-i18next";
import TechButton from "./TechButton";
import ReactSymbol from "../../img/symbols/ReactSymbol.png";
import SOLIDProjectSymbol from "../../img/symbols/SOLIDProjectSymbol.png";
import TypeScriptSymbol from "../../img/symbols/TypeScriptSymbol.png";
import OpenStreetMap from "../../img/symbols/OpenStreetMapSymbol.png";
import NodeJSSymbol from "../../img/symbols/NodeJSSymbol.png";
import WebStormSymbol from "../../img/symbols/WebStormSymbol.png";
import Bootstrap from "../../img/symbols/BootStrapSymbol.png";
import React from "react";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function TechStack() {
    const {t} = useTranslation();

    return (
        <div id="symbolsPanel">
            <h2>{t("techStack")}</h2>
            <TechButton href={"https://reactjs.org/"} img={ReactSymbol} text={"React Symbol"}/>
            <TechButton href={"https://solidproject.org/"} img={SOLIDProjectSymbol} text={"SOLID Project Symbol"}/>
            <TechButton href={"https://www.typescriptlang.org/"} img={TypeScriptSymbol} text={"TypeScript Symbol"}/>
            <TechButton href={"https://www.openstreetmap.org/"} img={OpenStreetMap} text={"OpenStreetMap Symbol"}/>
            <TechButton href={"https://nodejs.org/en/"} img={NodeJSSymbol} text={"NodeJS Symbol"}/>
            <TechButton href={"https://www.jetbrains.com/webstorm/"} img={WebStormSymbol} text={"WebStorm Symbol"}/>
            <TechButton href={"https://getbootstrap.com/"} img={Bootstrap} text={"Bootstrap Symbol"}/>
        </div>
    )
}

export default TechStack;