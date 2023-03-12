import "../../css/home.css"
import TechButton from "./TechButton";
import ReactSymbol from "../../img/symbols/ReactSymbol.png";
import SOLIDProjectSymbol from "../../img/symbols/SOLIDProjectSymbol.png";
import TypeScriptSymbol from "../../img/symbols/TypeScriptSymbol.png";
import OpenStreetMap from "../../img/symbols/Openstreetmap_logo.png";
import NodeJSSymbol from "../../img/symbols/NodeJSSymbol.png";
import MongoDBSymbol from "../../img/symbols/MongoDBSymbol.png";
import WebStormSymbol from "../../img/symbols/WebStormSymbol.png";
import City from "../../img/City.png";
import FullLogo from "../../img/FullLogo.png";
import FooterInfo from "../FooterInfo";
import DocumentationButton from "./DocumentationButton";
import Bootstrap from "../../img/symbols/Bootstrap_logo.png";

function Symbols() {
    return (
        <div id="symbolsPanel">
            <p>Used technologies:</p>
            <TechButton href={"https://reactjs.org/"} img={ReactSymbol} text={"React Symbol"}/>
            <TechButton href={"https://solidproject.org/"} img={SOLIDProjectSymbol} text={"SOLID Project Symbol"}/>
            <TechButton href={"https://www.typescriptlang.org/"} img={TypeScriptSymbol} text={"TypeScript Symbol"}/>
            <TechButton href={"https://www.openstreetmap.org/"} img={OpenStreetMap} text={"OpenStreetMaps Symbol"}/>
            <TechButton href={"https://nodejs.org/en/"} img={NodeJSSymbol} text={"NodeJS Symbol"}/>
            <TechButton href={"https://www.mongodb.com/"} img={MongoDBSymbol} text={"MongoDB Symbol"}/>
            <TechButton href={"https://www.jetbrains.com/webstorm/"} img={WebStormSymbol} text={"WebStorm Symbol"}/>
            <TechButton href={"https://getbootstrap.com/"} img={Bootstrap} text={"Bootstrap Symbol"}/>
        </div>
    )
}

function MainScreen() {
    return (
        <div id="screen">
            {/* Implementación momentánea */}
            <img src={FullLogo} id={"logo"} alt="GOMap Logo"/>
            <img src={City} id={"city"} alt="City" width={1024} height={512}/>

            <div id="documentation">
                <p>GOMap!® is an application where users can have custom maps about places and local business <br/>in their city like shops, bars, restaurants, monuments, cinemas...</p>
                <p>Also the application allows users to interact with their friends by viewing the places they have saved.</p>
                <DocumentationButton href={"https://arquisoft.github.io/lomap_es3a/"} text={"See our documentation 🔗"}/>
            </div>
            <div id="usedTechnologies">
                <Symbols/>
            </div>
            <FooterInfo />
        </div>
    )
}

export default MainScreen