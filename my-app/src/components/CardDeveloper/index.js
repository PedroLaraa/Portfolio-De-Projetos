import './CardDeveloper.css'

const CardDeveloper = (props) => {

    return(
        <div className='developer'>
            <div className='cabecalhoDeveloper'>
                <img src='/images/PedroLara.jpg' />
            </div>
            <div className='rodapeDeveloper'>
                <h4>{props.cargo}</h4>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    )

};

export default CardDeveloper;
