import "../../css/login.css"

function LogInButton() {

    function handleOnClick() {
        console.log("Log In pulsado")
    }

    return (
        <div>
            <input type="button" id="loginButton" onClick={handleOnClick} value="Log in"/>
        </div>
    )
}

export default LogInButton