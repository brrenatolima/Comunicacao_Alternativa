import TopComponent from "../Top";
import logo from '../../../assets/logo.png'
import AvatarComponent from "../../Avatar";
import StackComponent from "../../Stack";
import BoxComponent from "../../Box";
import TypographyComponent from "../../Typography";

const AuthTopComponent = ({title_page, subtitle_page}) => {
    return <BoxComponent>
        <BoxComponent sx={{ ml: 6, mt: 6 }}>
        <TopComponent hasBubble={false} title={'COMUNICAÇÃO ALTERNATIVA'} />
        </BoxComponent>
        
        <StackComponent sx={{ mt: 4, mb: 4 }}>
            <TypographyComponent variant={'p'} sx={{textAlign: 'center', fontSize: '1.6em !important'}}> {title_page} </TypographyComponent>
            <TypographyComponent variant={'p'} sx={{textAlign: 'center', fontSize: '1.1em !important'}}> {subtitle_page} </TypographyComponent>
        </StackComponent>
        
    
    </BoxComponent>
   
    
}

export default AuthTopComponent;