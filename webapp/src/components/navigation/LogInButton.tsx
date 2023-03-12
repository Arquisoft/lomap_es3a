import "../../css/login.css"
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

function LogInButton() {

    const navigate = useNavigate();


    return (
        <Button id="loginButton" onClick={() => navigate('/login')} value="Log in">Log in</Button>
    )
}

export default LogInButton