import "../../css/login.css"
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

function LogInButton() {

    const navigate = useNavigate();


    return (
        <div>
            <Button id="loginButton" onClick={() => navigate('/login')} value="Log in">Sign Up</Button>
        </div>
    )
}

export default LogInButton