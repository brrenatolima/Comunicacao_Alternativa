import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { TopComponent } from "../../components";

const Timeline = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])
    return <>
    <TopComponent title={`Agosto 2023`} subtitle={'Organize suas ideias!'} />
    </>;
}

export default Timeline;