import './CardProjetos.css'

const CardProjetos = (props) => {

    return(
        <div className='cardProjetos'>
            <div className='cardImg'>
                <img src={props.imagem} alt={props.txtImg} />
            </div>
            <div className='cardInfos'>
                <h4>{props.tituloProjeto}</h4>
                <h5>{props.descricaoProjeto}</h5>
                <a href={props.link}>{props.textoDoLink}</a>
            </div>
        </div>
    );
};

export default CardProjetos;
