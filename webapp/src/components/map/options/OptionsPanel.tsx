import DeveloperTeam from "./DeveloperTeam";
import Filter from "./Filter";
import Slider from "./Slider";
import Search from "./Search";
import {useTranslation} from "react-i18next";
import React from "react";

function OptionsPanel() {

    const { t } = useTranslation();

    function displayMenu() {
        const optionsMenu = document.getElementById("optionsMenu");
        if (optionsMenu !== null) {
            const width = optionsMenu.style.width;
            if (width.toString().length === 0) {
                optionsMenu.style.borderStyle = "solid"
                optionsMenu.style.width = "20%"
                optionsMenu.style.minWidth = "350px"
                const optionsButton = document.getElementById("optionsButton")
                if (optionsButton !== null) {
                    optionsButton.style.transform = "scaleX(-1)"
                }
            } else {
                optionsMenu.style.borderStyle = ""
                optionsMenu.style.width = ""
                optionsMenu.style.minWidth = "0px"
                const optionsButton = document.getElementById("optionsButton")
                if (optionsButton !== null) {
                    optionsButton.style.transform = "scaleX(1)"
                }
            }
        }
    }

    const categories = {
        bars: t('bars'),
        restaurants: t('restaurants'),
        shops: t('shops'),
        supermarkets: t('supermarkets'),
        hotels: t('hotels'),
        cinemas: t('cinemas'),
        academic_institution: t('academic_institution'),
        public_institution: t('public_institution'),
        sports_club: t('sports_club'),
        museum: t('museum'),
        parks: t('parks'),
        others: t('others'),
    };

    return (
        <div id="optionsMenu">
            <h1>Options Menu</h1>
            <input type="button" id="optionsButton" value="☰️" onClick={displayMenu}/>
            <Search title={t("search")}/>
            <Filter title={t("category")}
                    options={Object.values(Object.entries(categories).map(([value, label]) => label))}/>
            <Slider title={t("mark")} min={0} max={5}/>
        </div>
    )
}

export default OptionsPanel