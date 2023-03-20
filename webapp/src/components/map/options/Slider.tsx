import {SliderType} from "../../../shared/shareddtypes";
import {ChangeEvent} from "react";

function Slider({title, min, max}: SliderType) {

    function updateMarkers() {
        /*TODO*/
        console.log("TODO")
    }

    function updateValue(event: ChangeEvent<HTMLInputElement>, id: string) {
        (document.getElementById(id) as HTMLInputElement).value = event.target.value
    }

    return (
        <div>
            <h2>{title}</h2>
            <input type="range" id="slider" min={min} max={max} step="0.1" defaultValue={max / 2} onChange={(event) => {
                updateValue(event, "value")
                updateMarkers()
            }}/>
            <input type="number" id="value" min={min} max={max} step="0.1" defaultValue={max / 2} onChange={(event) => {
                updateValue(event, "slider")
                updateMarkers()
            }}/>
        </div>
    )
}

export default Slider