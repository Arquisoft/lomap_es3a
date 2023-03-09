import DeveloperTeam from "./DeveloperTeam";
import Filter from "./Filter";

function OptionsPanel() {
    return (
        <div id="optionsMenu">
            <Filter title={"Filters"} options={["Bars", "Restaurants", "Cinemas"]} />
            <Filter title={"Marks"} options={["1", "2", "3", "4", "5"]} />
            <DeveloperTeam />
        </div>
    )
}

export default OptionsPanel