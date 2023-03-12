import DeveloperTeam from "./DeveloperTeam";
import Filter from "./Filter";
import Slider from "./Slider";

function OptionsPanel() {

    function displayMenu() {
        const optionsMenu = document.getElementById("optionsMenu");
        if (optionsMenu !== null) {
            const width = optionsMenu.style.width;
            if (width.toString().length === 0) {
                optionsMenu.style.borderStyle="solid";
                optionsMenu.style.width = "20%";
                optionsMenu.style.minWidth = "350px";
                const optionsButton = document.getElementById("optionsButton");
                if (optionsButton !== null) {
                    optionsButton.style.transform = "scaleX(-1)";
                }
            } else {
                optionsMenu.style.borderStyle="";
                optionsMenu.style.width = "";
                optionsMenu.style.minWidth = "0px";
                const optionsButton = document.getElementById("optionsButton");
                if (optionsButton !== null) {
                    optionsButton.style.transform = "scaleX(1)";
                }
            }
        }
    }

    return (
        <div id="optionsMenu">
            <h1>Options Menu</h1>
            <input type="button" id="optionsButton" value="☰" onClick={displayMenu}/>
            <Filter title={"Category"} options={["Bars", "Restaurants", "Shops", "Supermarkets", "Cinemas"]} />
            <Slider title={"Marks"} min={0} max={5} />
            <DeveloperTeam />
        </div>
    )
}

export default OptionsPanel