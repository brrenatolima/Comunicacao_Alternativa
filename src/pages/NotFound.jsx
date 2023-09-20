import { useEffect } from "react";

const NotFound = ({setCurrentPath}) => {
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    });
    return 'Página não encontrada!';
}

export default NotFound;