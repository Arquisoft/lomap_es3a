import Filter from "./options/Filter";
import Search from "./options/Search";
import FriendList from "../pod/FriendList";
import {initReactI18next, useTranslation} from "react-i18next";
import React, {useState} from "react";
import i18n from "../../i18n";
import MapSelector from "./options/MapSelector";

i18n.use(initReactI18next)

function OptionsPanel(props: { setItem: Function }) {
    const [selectedMap, setSelectedMap] = useState("")
    const {t} = useTranslation();

    return (
        <div>
            <div id="optionsMenu">
                <h1>{t("optionsMenu")}</h1>
                <Search title={t("search")}/>
                <MapSelector setItem={props.setItem} setSelectedMap={setSelectedMap} selectedMap={selectedMap}/>
                <div id="filterDiv">
                    <Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={[]}
                            setItem={props.setItem}/>
                </div>
                <div id="friendDiv">
                    <FriendList setItem={props.setItem} setSelectedMap={setSelectedMap}/>
                </div>

            </div>
        </div>
    )
}

export default OptionsPanel