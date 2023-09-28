import { useEffect, useState } from "react";
import { sendPasswordReset, verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { AuthTopComponent, BoxComponent, ButtonComponent, TextFieldComponent } from "../../components";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const RecoveryPassword = ({setCurrentPath, loggoutRoutes, firebaseApp}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, []);


    async function recuperarSenha() {
        await sendPasswordReset(firebaseApp, email, navigate);
    }

    const [email, setEmail] = useState("")
    return <>
    <AuthTopComponent title_page={'Esqueceu a senha?'} subtitle_page={'Insira seu e-mail para recuperar a senha'} />

    <BoxComponent component="div" sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }} noValidate={true} autoComplete={"off"}>
            <TextFieldComponent InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><AccountCircle/></InputAdornment>
                )
            }} variant="filled" fullWidth={true} label={"Email"} type="email" value={email} onChange={function (e) { setEmail(e.target.value); }} />
    </BoxComponent>
    <BoxComponent component="div" sx={{ mt: 3, mb: 3, pr: 4, pl: 4 }} noValidate={true} autoComplete={"off"}>
        <ButtonComponent  fullWidth={true} label="Recuperar senha" onClick={recuperarSenha} />
    </BoxComponent>

    </>;
}

export default RecoveryPassword;