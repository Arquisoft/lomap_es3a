import {FilterType} from "../../../shared/shareddtypes";

function Filter({title, options}: FilterType) {

    function updateMarkers() {
        /*TODO*/
        console.log("TODO");
    }

    return (
        <div>
            <h2>{title}</h2>
            <select id="category">
                {options.map((option, index) => (
                    <option key={index} value={option} onClick={updateMarkers}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter