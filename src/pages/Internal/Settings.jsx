import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutApp, verifyLogin } from "../../utils/auth";
import { ButtonComponent, TopComponent } from "../../components";

const Settings = ({setCurrentPath, loggoutRoutes, firebaseApp}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])
    
    return <> 
    <TopComponent title={`Configurações`} subtitle={'Configurações do App'} />
    
    <ButtonComponent label="Sair" onClick={ () => logoutApp(firebaseApp, navigate)} />
    </>;
}

export default Settings;