import MainScreen from "./MainScreen";
import React from "react";
import Notification from '../map/Notification';
function HomePage() {
    return (
        <div>
            <MainScreen/>
            <Notification
                title="¡Bienvenido a mi sitio web!"
                message="Gracias por visitar mi sitio web. ¡Espero que encuentre lo que busca!"
                time="hace unos momentos"
                icon="https://ejemplo.com/imagen.png"
            />

        </div>
    )
}

export default HomePage