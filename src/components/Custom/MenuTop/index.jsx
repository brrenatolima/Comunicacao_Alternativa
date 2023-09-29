import BoxComponent from "../../Box";
import Home from '@mui/icons-material/Home'
import Class from '@mui/icons-material/Class'
import ImageIcon from '@mui/icons-material/Image';
import ButtonComponent from "../../Button";
import { logoutApp } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";

const TopMenuComponent = ({ hasMenu, hasArrowBack, hasImage, firebaseApp}) => {
    const navigate = useNavigate();
    return <>



        {hasMenu ? <BoxComponent sx={{ backgroundColor: '#ff6262', height: '5%' }}>
            {/* <h3>menu</h3> */}
            
            <Home />
            <Class />
            <ImageIcon />
        </BoxComponent>
            : null}
        {hasArrowBack ? 'Define a seta pra voltar' : null}
        {hasImage ? 'Exibe a imagem' : null}
    </>
}

export default TopMenuComponent;