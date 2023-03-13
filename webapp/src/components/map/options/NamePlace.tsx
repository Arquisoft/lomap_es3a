import {NamePlaceType} from "../../../shared/shareddtypes";

function NamePlace({title}: NamePlaceType) {
    return (
        <div>
            <h2>{title}</h2>
            <input type="text" id="namePlace" placeholder="Type to set name..."/>
        </div>
    )

}

export default NamePlace