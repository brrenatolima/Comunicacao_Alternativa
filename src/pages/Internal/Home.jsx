import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { TopComponent } from "../../components";

const Home = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {


    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])



    return <>
    <TopComponent hasMenu={true}  title={"Comunicação Alternativa"} subtitle={''} firebaseApp={firebaseApp} />
    <h1>Home</h1>
    </>;
}

Home.defaultProps = {
    titulo: "Titulo padrão",
    v2: "Valor padrão 2",
}

export default Home;