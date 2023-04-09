import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";

i18n.use(initReactI18next)
interface IProps {
    titleFilter: string,
    nameFilter: string,
}
function Filter({ titleFilter, nameFilter }: IProps) {

    const {t} = useTranslation();

    let categories = [];
    if(nameFilter !== "edit")
        categories.push({ value: "All", text: t('all') });
    categories.push({ value: "Bars", text: t('bars') });
    categories.push({ value: "Restaurants", text: t('restaurants') });
    categories.push({ value: "Shops", text: t('shops') });
    categories.push({ value: "Supermarkets", text: t('supermarkets') });
    categories.push({ value: "Hotels", text: t('hotels') });
    categories.push( { value: "Cinemas", text: t('cinemas') });
    categories.push({ value: "Academic_Institution", text: t('academic_institution') });
    categories.push({ value: "Public_Institution", text: t('public_institution') });
    categories.push( { value: "Sports_Club", text: t('sports_club') });
    categories.push({ value: "Museum", text: t('museum') });
    categories.push({ value: "Parks", text: t('parks') });
    categories.push({ value: "Others", text: t('others') });

    function updateMarkers() {
        if(nameFilter !== "edit") {
            const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
            root.render(<MapView lat={43.3548057} lng={-5.8534646}/>);
        }
    }

    let id = nameFilter==="edit" ? "categoryMarker" : "category";

    return (
        <div>
            <h2>{titleFilter}</h2>
            <select id={id} onChange={updateMarkers}>
                {categories.map((option, index) => (
                    <option key={option.value} value={option.value} >
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
