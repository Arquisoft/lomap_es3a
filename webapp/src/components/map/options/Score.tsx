import {ScoreType} from "../../../shared/shareddtypes";

function Score({title}: ScoreType) {
    return (
        <div>
            <h2>{title}</h2>
            <input type="range" min="0" max="10" id="score"/>
        </div>
    )
}

export default Score