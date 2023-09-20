import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { AuthTopComponent } from "../../components";

const Register = ({setCurrentPath, loggoutRoutes}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])

    return <>
    <AuthTopComponent title_page={'Cadastre-se'} subtitle_page={'Insira seus dados para se cadastrar...'} />
    
    </>;
}

export default Register;