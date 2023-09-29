import { IconButton } from "@mui/material"

const IconButtonComponent = ({children, ...rest}) => {
    return <IconButton {...rest}>
        {children}
    </IconButton>
}

export default IconButtonComponent