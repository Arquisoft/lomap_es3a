import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";

i18n.use(initReactI18next)
interface IProps {
    titleFilter: string,
    nameFilter: string,
    usersWebId: string[],
    setItem: Function
}
function Filter({ titleFilter, nameFilter, usersWebId, setItem }: IProps) {
    const {t} = useTranslation();

    let categories = [];
    if(nameFilter !== "edit")
        categories.push({ value: "All", text: t('all') });
    categories.push({ value: "bar", text: t('bars') });
    categories.push({ value: "restaurant", text: t('restaurants') });
    categories.push({ value: "shop", text: t('shops') });
    categories.push({ value: "supermarket", text: t('supermarkets') });
    categories.push({ value: "hotel", text: t('hotels') });
    categories.push( { value: "cinema", text: t('cinemas') });
    categories.push({ value: "academicInstitution", text: t('academic_institution') });
    categories.push({ value: "publicInstitution", text: t('public_institution') });
    categories.push( { value: "sportsClub", text: t('sports_club') });
    categories.push({ value: "museum", text: t('museum') });
    categories.push({ value: "park", text: t('parks') });
    categories.push({ value: "landscape", text: t('landscape') });
    categories.push({ value: "monument", text: t('monument') });
    categories.push({ value: "hospital", text: t('hospital') });
    categories.push({ value: "policeStation", text: t('policeStation') });
    categories.push({ value: "transportCenter", text: t('transportCenter') });
    categories.push({ value: "entertainment", text: t('entertainment') });
    categories.push({ value: "other", text: t('others') });

    function updateMarkers() {
        if(nameFilter !== "edit") {
            if(usersWebId!==undefined){
                const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
                root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={usersWebId} setItem={setItem}/>);
            }
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
