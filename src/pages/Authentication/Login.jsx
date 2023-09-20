import { useEffect, useState } from "react";
import { AuthTopComponent, BoxComponent, ButtonComponent, StackComponent, TextFieldComponent } from "../../components";
import { login, verifyLogin } from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login'
import { InputAdornment } from "@mui/material";
import { AccountCircle, LockOutlined } from "@mui/icons-material";
const Login = ({setCurrentPath, loggoutRoutes}) => {
 
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    function entrarNoApp() {
        login({email, senha}, navigate);
        console.log("estou entrando no APP...");
    }
    
    return <>
    
    <AuthTopComponent title_page={'Bem vindo'} subtitle_page={'Efetue o login para continuar...'} />
    
    <BoxComponent component="div" sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }} noValidate={true} autoComplete={"off"}>
            <TextFieldComponent InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><AccountCircle/></InputAdornment>
                )
            }} variant="filled" fullWidth={true} label={"Email"} type="email" value={email} onChange={function (e) { setEmail(e.target.value); }} />
    </BoxComponent>

        <BoxComponent component="div" sx={{ mt: 3, mb: 3, pl: 4, pr: 4, }} noValidate={true} autoComplete={"off"}>
            <TextFieldComponent InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><LockOutlined/></InputAdornment>
                )
            }} variant="filled" fullWidth={true} type="password" label={"Senha"} value={senha} onChange={function (e) { setSenha(e.target.value); }} />            
        </BoxComponent>

        <BoxComponent component="div" sx={{ mt: 3, mb: 3, pr: 4, pl: 4 }} noValidate={true} autoComplete={"off"}>
            <ButtonComponent startIcon={<LoginIcon sx={{color: '#fff'}} />} fullWidth={true} label="Entrar" onClick={entrarNoApp} />
        </BoxComponent>

        
        <StackComponent sx={{mt: 4, mb: 4}} alignItems={'center'}>
            <Link style={{
                color:"#333",
                textDecoration: "none",
                fontWeight: "300",
                fontSize: "16",
            }} to="/register">Cadastrar-me</Link>
        </StackComponent>
        
       
        <br />

    </>;
}

export default Login; 