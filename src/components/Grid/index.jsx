import { Grid } from "@mui/material";


const GridComponent = ({children, ...rest}) => {
    return <Grid {...rest}>
        {children}
    </Grid>;
}

export default GridComponent;