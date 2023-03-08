import "../../css/home.css"
import TechButton from "./TechButton";
import ReactSymbol from "../../img/symbols/ReactSymbol.png";
import SOLIDProjectSymbol from "../../img/symbols/SOLIDProjectSymbol.png";
import TypeScriptSymbol from "../../img/symbols/TypeScriptSymbol.png";
import GOMapSymbol from "../../img/symbols/GOMapSymbol.png";
import NodeJSSymbol from "../../img/symbols/NodeJSSymbol.png";
import MongoDBSymbol from "../../img/symbols/MongoDBSymbol.png";
import WebStormSymbol from "../../img/symbols/WebStormSymbol.png";
import FooterInfo from "../FooterInfo";

function Symbols() {
    return (
        <div id="symbolsPanel">
            <TechButton href={"https://reactjs.org/"} img={ReactSymbol} text={"React Symbol"}/>
            <TechButton href={"https://solidproject.org/"} img={SOLIDProjectSymbol} text={"SOLID Project Symbol"}/>
            <TechButton href={"https://www.typescriptlang.org/"} img={TypeScriptSymbol} text={"TypeScript Symbol"}/>
            <TechButton href={"/"} img={GOMapSymbol} text={"GOMap! Symbol"}/>
            <TechButton href={"https://nodejs.org/en/"} img={NodeJSSymbol} text={"NodeJS Symbol"}/>
            <TechButton href={"https://www.mongodb.com/"} img={MongoDBSymbol} text={"MongoDB Symbol"}/>
            <TechButton href={"https://www.jetbrains.com/webstorm/"} img={WebStormSymbol} text={"WebStorm Symbol"}/>
        </div>
    )
}

function MainScreen() {
    return (
        <div>
            <div id="home">
                <Symbols/>
            </div>
            <FooterInfo />
        </div>
    )
}

export default MainScreen