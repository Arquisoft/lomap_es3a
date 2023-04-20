import Filter from "./options/Filter";
import Search from "./options/Search";
import FriendList from "../pod/FriendList";
import {initReactI18next, useTranslation} from "react-i18next";
import React from "react";
import i18n from "../../i18n";
import Mark from "./options/Mark";
import {useSession} from "@inrupt/solid-ui-react";

i18n.use(initReactI18next)

function OptionsPanel(props: { setItem: Function }) {
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + 'private/locations.json';
    let user: string[] = [webIdStore]

    const {t} = useTranslation();


    return (
        <div>
            <div id="optionsMenu">
                <h1>{t("optionsMenu")}</h1>
                <Search title={t("search")}/>
                <div id="filterDiv">
                    <Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={user}
                            setItem={props.setItem}/>
                </div>
                <Mark title={t("mark")} id={"scoreMarker"}/>
                <div id="friendDiv">
                    <FriendList setItem={props.setItem}/>
                </div>

            </div>
        </div>
    )
}

export default OptionsPanel