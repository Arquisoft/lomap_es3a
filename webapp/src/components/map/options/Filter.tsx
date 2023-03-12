import {FilterType} from "../../../shared/shareddtypes";

function Filter({title, options}: FilterType) {
    return (
        <div>
            <h2>{title}</h2>
            <select>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter