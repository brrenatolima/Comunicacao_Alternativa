import Button from '@mui/material/Button';

const ButtonComponent = ({ label, style, uppercase, variant, ...rest }) => {
    return <Button
                {...rest}
                variant={variant}
                style={{
                    border: null,
                    textTransform: uppercase? 'uppercase' : 'none',
                    ...style
                }}>{label}</Button>;
}

ButtonComponent.defaultProps = {
    style: {},
    variant: "contained",
    uppercase: true,
    label: ""
}

export default ButtonComponent;