import { FilterType } from "../../../shared/shareddtypes";
import {useTranslation} from "react-i18next";

function Filter({ title }: FilterType) {

    const {t} = useTranslation();

    const categories = [
        { value: "Bars", text: t('bars') },
        { value: "Restaurants", text: t('restaurants') },
        { value: "Shops", text: t('shops') },
        { value: "Supermarkets", text: t('supermarkets') },
        { value: "Hotels", text: t('hotels') },
        { value: "Cinemas", text: t('cinemas') },
        { value: "Academic Institution", text: t('academic_institution') },
        { value: "Public Institution", text: t('public_institution') },
        { value: "Sports Club", text: t('sports_club') },
        { value: "Museum", text: t('museum') },
        { value: "Parks", text: t('parks') },
        { value: "Others", text: t('others') },
    ];

    function updateMarkers() {
        /*TODO*/
        console.log("TODO");
    }

    return (
        <div>
            <h2>{title}</h2>
            <select id="category">
                {categories.map((option, index) => (
                    <option key={option.value} value={option.value} onClick={updateMarkers}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
