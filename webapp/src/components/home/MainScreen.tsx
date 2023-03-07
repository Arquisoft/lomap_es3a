import TechButton from "./TechButton";
import ReactLogo from "../../img/ReactLogo.png";
import SOLIDProjectLogo from "../../img/SOLIDProjectLogo.png";
import TypeScriptLogo from "../../img/TypeScriptLogo.png";
import GOMapLogo from "../../img/Symbol.png";

function MainScreen() {
    return (
        <div>
            <TechButton href={"https://reactjs.org/"} img={ReactLogo} text={"React Logo"} />
            <TechButton href={"https://solidproject.org/"} img={SOLIDProjectLogo} text={"SOLID Project Logo"} />
            <TechButton href={"https://www.typescriptlang.org/"} img={TypeScriptLogo} text={"React Logo"} />
            <TechButton href={"/home"} img={GOMapLogo} text={"React Logo"} />
        </div>
    )
}

export default MainScreen