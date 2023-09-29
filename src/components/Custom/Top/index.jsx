import { useNavigate } from "react-router-dom";
import {BoxComponent, TypographyComponent, TopMenuComponent, ButtonComponent, GridComponent, IconButtonComponent} from "../../"
import { logoutApp } from "../../../utils/auth";
import { PowerSettingsNew } from "@mui/icons-material";


const TopComponent = ({title, subtitle, hasMenu, hasImage, hasArrowBack, firebaseApp }) => {
    const navigate = useNavigate();

    return <BoxComponent sx={{ overflow: "hidden" , backgroundColor: '#ff6262'}}>

    {
        hasMenu ?
        <GridComponent container>
            <GridComponent item xs={10}>
                <TypographyComponent sx={{ p: 1 }} variant="h6" component="h6" >
                    {title}
                </TypographyComponent>
            </GridComponent>
            <GridComponent item xs={2} sx={{textAlign : 'right'}}>
                <IconButtonComponent sx={{borderRadius: '100px !important', minWidth: '10px'}} onClick={() => logoutApp(firebaseApp, navigate)} >
                    <PowerSettingsNew sx={{color: '#fff'}} />
                </IconButtonComponent>
            </GridComponent>
        </GridComponent>
        :
        null
    }    
        

        
        <TopMenuComponent hasMenu={hasMenu} hasArrowBack={hasArrowBack} hasImage={hasImage} firebaseApp={firebaseApp} />
        
        
    
        <TypographyComponent variant="h6" component="h6" >
            {subtitle}
        </TypographyComponent>
    
    
    </BoxComponent>
}

TopComponent.defaultProps = {
    hasArrowBack : false,
    hasImage : false,
    hasMenu : false
}

export default TopComponent;
