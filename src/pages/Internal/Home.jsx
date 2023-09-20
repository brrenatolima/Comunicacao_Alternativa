import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { TopComponent } from "../../components";

const Home = ({ setCurrentPath, loggoutRoutes }) => {


    //let title = 'Titulo da página';
    // const [title, setTitle] = useState('Titulo da minha página');
    // const [subtitle, setSubtitle] = useState('Sub-Titulo da minha página');
    const navigate = useNavigate();
    const [username, setUsername] = useState("Renato");

    // function modificarValorT(){
    //     setTitle('Novo valor do título');
    // }

    // function modificarValorSt(){
    //     setSubtitle('Novo valor do subtítulo');
    // }

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        verifyLogin(loggoutRoutes, window.location.pathname, navigate);
    }, [])

    // useEffect(() => {
    //     // console.log(titulo);
    //     // console.log(v2);
    // }, []); // monitora tudo

    // useEffect(() => {
    //     // console.log("Mudou o titulo")
    // }, [title]); // monitora o titulo

    // useEffect(() => {
    //     // console.log("Mudou o subtitulo")
    // }, [subtitle]); // monitora o subtitulo

    // useEffect(() => {
    //     // console.log("Mudou o titulo e subtitulo")
    // }, [title, subtitle]); // monitora o titulo e subtitulo

    

    return <>
    <TopComponent hasMenu={true} hasImage={true} title={`Olá, ${username}`} subtitle={'Organize suas ideias...'} />
    <h1>Home</h1>
    {/* <h2>{subtitle}</h2> */}
    {/* <button onClick={modificarValorT}>Clique Titulo</button>
    <button onClick={modificarValorSt}>Clique SubTitulo</button> */}
    </>
     ;
}

Home.defaultProps = {
    titulo: "Titulo padrão",
    v2: "Valor padrão 2",
}

export default Home;