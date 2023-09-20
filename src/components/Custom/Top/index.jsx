import {BoxComponent, TypographyComponent, TopMenuComponent} from "../../"


const TopComponent = ({title, subtitle, hasMenu, hasImage, hasArrowBack, hasBubble }) => {
    return <BoxComponent sx={{
        overflow: "hidden"
    }}>

        <TopMenuComponent hasMenu={hasMenu} hasArrowBack={hasArrowBack} hasImage={hasImage} />
        
        <TypographyComponent align="center" variant="h1" component="h1" gutterBotton={true} sx={{
        fontSize: "3rem"
    }}>
        {title}
    </TypographyComponent>
    <TypographyComponent variant="h6" component="h6" gutterBotton={true}>
        {subtitle}
    </TypographyComponent>
    {
    hasBubble ? <>
        <div style={{
            background: "#00373F",
            width: "300px",
            height: "300px",
            position: "fixed",
            right: "-180px",
            top: "-180px",
            borderRadius: "100%",
            zIndex: "-1"
    }}></div>
        <div style={{
            background: "#006876",
            width: "160px",
            height: "150px",
            position: "fixed",
            left: "-65px",
            bottom: "-85px",
            borderRadius: "100%",
            zIndex: "-1"
    }}></div>
    </>        
    :
    null
    }
    
    </BoxComponent>
}

TopComponent.defaultProps = {
    hasArrowBack : false,
    hasImage : false,
    hasMenu : false,
    hasBubble : false
}

export default TopComponent;
