import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutApp, verifyLogin } from "../../utils/auth";
import { ButtonComponent, TopComponent } from "../../components";

const Category = ({setCurrentPath, loggoutRoutes, firebaseApp}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])
    
    return <> 
    <TopComponent hasMenu={true}  title={"Comunicação Alternativa"} subtitle={''} firebaseApp={firebaseApp} />
    <h1>Categoria</h1>
    </>;
}

export default Category;