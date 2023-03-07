import {TechButtonType} from "../../shared/shareddtypes";

function TechButton({href, img, text}: TechButtonType) {
    return (
        <a href={href} className="techButtons">
            <img src={img} alt={text} width={75} height={75}/>
        </a>
    )
}

export default TechButton