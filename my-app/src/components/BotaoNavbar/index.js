import './BotaoNavbar.css'

const BotaoNavbar = (props) => {

    return(
        <a className='botaoNavbar' href={`#${props.pagina}`}>{props.textoBotao}</a>
    )

};

export default BotaoNavbar;
