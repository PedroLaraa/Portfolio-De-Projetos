import './BotaoContato.css'

const BotaoContato = (props) => {

    return(
        <a className='botaoContato' href={`mailto:${props.email}`} >{props.texto}</a>
    )
};

export default BotaoContato;
