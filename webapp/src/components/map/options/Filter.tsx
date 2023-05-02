import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";

i18n.use(initReactI18next)

interface IProps {
    nameFilter: string,
    usersWebId: string[],
    setItem: Function
}

function Filter({nameFilter, usersWebId, setItem}: IProps) {
    const {t} = useTranslation();

    let categories = [];
    if (nameFilter !== "edit") {
        categories.push({value: "All", text: t('all')});
    }

    categories.push({value: "bar", text: t('bar')});
    categories.push({value: "restaurant", text: t('restaurant')});
    categories.push({value: "shop", text: t('shop')});
    categories.push({value: "supermarket", text: t('supermarket')});
    categories.push({value: "hotel", text: t('hotel')});
    categories.push({value: "cinema", text: t('cinema')});
    categories.push({value: "academicInstitution", text: t('academicInstitution')});
    categories.push({value: "publicInstitution", text: t('publicInstitution')});
    categories.push({value: "sportsClub", text: t('sportsClub')});
    categories.push({value: "museum", text: t('museum')});
    categories.push({value: "park", text: t('park')});
    categories.push({value: "landscape", text: t('landscape')});
    categories.push({value: "monument", text: t('monument')});
    categories.push({value: "hospital", text: t('hospital')});
    categories.push({value: "policeStation", text: t('policeStation')});
    categories.push({value: "transportCenter", text: t('transportCenter')});
    categories.push({value: "entertainment", text: t('entertainment')});
    categories.push({value: "other", text: t('other')});

    function updateMarkers() {
        if (nameFilter !== "edit") {
            if (usersWebId !== undefined) {
                const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
                root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={usersWebId} setItem={setItem}/>);
            }
            const showMarkerPanel = document.getElementById("showMarkerPanel");
            if (showMarkerPanel !== null) {
                showMarkerPanel.style.width = "0";
            }
            const addMarkerPanel = document.getElementById("addMarkerPanel");
            if (addMarkerPanel !== null) {
                addMarkerPanel.style.width = "0";
            }
        }
    }

    let id = nameFilter === "edit" ? "categoryMarker" : "category";

    return (
        <div>
            <h2>{t("category")}</h2>
            <select id={id} onChange={updateMarkers}>
                {categories.map((option, index) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
