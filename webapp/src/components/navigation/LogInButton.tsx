import "../../css/login.css"

function LogInButton() {

    function handleOnClick() {
        console.log("Log In pulsado")
    }

    return (
        <input type="button" id="loginButton" onClick={handleOnClick} value="Log in"/>
    )
}

export default LogInButton