import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { TopComponent, TopMenuComponent } from "../../components";

const Task = ({setCurrentPath, loggoutRoutes}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])

    return <>
    <TopMenuComponent hasMenu={false} hasArrowBack={true} hasImage={true} />
    <TopComponent title={`Nova Task`} subtitle={'Crie sua tarefa...'} />
    
    </>;
}

export default Task;