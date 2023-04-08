import Filter from "./Filter";
import Search from "./Search";
import FriendList from "../../pod/FriendList";
import {useTranslation} from "react-i18next";

function OptionsPanel() {

    const {t} = useTranslation();

    /* Set the width of the side navigation to 250px */
    function displayMenu() {
        const optionsMenu = document.getElementById("optionsMenu");
        if (optionsMenu !== null) {
            optionsMenu.style.width = "300px";
        }
        const optionsButton = document.getElementById("optionsButton");
        if (optionsButton !== null) {
            optionsButton.style.transition = "opacity 0.6s"; // Agrega transición de 0.6 segundos a la propiedad "opacity"
            optionsButton.style.opacity = "0"; // Establece la propiedad "opacity" en "0" para que el elemento se desvanezca gradualmente
            setTimeout(function() {
                optionsButton.style.display = "none"; // Establece la propiedad "display" en "none" después de que la transición haya terminado
            }, 600); // Espera 0.6 segundos (el mismo tiempo que la duración de la transición) antes de ocultar el elemento
        }

    }

    /* Set the width of the side navigation to 0 */
    function closeMenu() {
        const optionsMenu = document.getElementById("optionsMenu");
        if (optionsMenu !== null) {
            optionsMenu.style.width = "0";
        }
        const optionsButton = document.getElementById("optionsButton");
        if (optionsButton !== null) {
            optionsButton.style.display = "block"; // Establece la propiedad "display" en "block" antes de mostrar el elemento
            setTimeout(function() {
                optionsButton.style.opacity = "1"; // Establece la propiedad "opacity" en "1" para que el elemento aparezca gradualmente
            }, 10); // Espera 10 milisegundos antes de mostrar el elemento, para dar tiempo a que se establezca la propiedad "display"
        }
    }


    return (
        <div>
            <input type="button" id="optionsButton" value="☰️" onClick={displayMenu}/>
            <div id="optionsMenu">
                <h1>Options Menu</h1>
                <a href="javascript:void(0)" className="cross" onClick={closeMenu}>&times;</a>
                <Search title={t("search")}/>
                <Filter
                    title={t("category")}
                />
                <FriendList/>
            </div>
        </div>
    )
}

export default OptionsPanel