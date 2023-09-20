import { Box, TextField } from "@mui/material";

const TextFieldComponent = ({ variant, style, label, type, ...rest }) => {
    return <TextField
            type={type} 
            variant={variant} 
            label={label}
            style={{
                width: rest.fullWidth ? 'calc(100% - 16px)' : 'auto',
                ...style
            }}
            {...rest}/>
   
    
}

TextFieldComponent.defaultProps = {
    type: "text",
    variant: "outlined"
}

export default TextFieldComponent;