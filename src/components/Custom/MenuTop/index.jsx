const TopMenuComponent = ({ hasMenu, hasArrowBack, hasImage}) => {
    return <>
        {hasMenu ? 'Exibe o menu' : null}
        {hasArrowBack ? 'Define a seta pra voltar' : null}
        {hasImage ? 'Exibe a imagem' : null}
    </>
}

export default TopMenuComponent;