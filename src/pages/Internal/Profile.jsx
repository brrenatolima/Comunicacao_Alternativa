import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { TopMenuComponent } from "../../components";

const Profile = ({setCurrentPath, loggoutRoutes}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])

    return <>
    <TopMenuComponent hasMenu={true} hasArrowBack={false} hasImage={true} />
        </>;
}

export default Profile;