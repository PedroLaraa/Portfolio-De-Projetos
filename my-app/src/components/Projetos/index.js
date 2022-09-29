import CardProjetos from '../CardProjetos';
import './Projetos.css'

const Projetos = (props) => {

    return (
        <div id='projetos' className='projetosContainer'>
            <h1>Projetos & Estudos</h1>
            <div className='projetosCardContainer row'>
                <CardProjetos
                    className='col'
                    imagem='/images/Python.png'
                    tituloProjeto='Detector de rostos'
                    descricaoProjeto='Detector de rostos desenvolvido com python no intuito de aprender mais sobre machine learning.'
                    link='https://github.com/PedroLaraa/Detector-De-Rostos'
                    textoDoLink='Repositório GitHub'
                    txtImg='Python Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/NodeJs.png'
                    tituloProjeto='API | NodeJs & Sequelize & MySql'
                    descricaoProjeto='Aplicação organizada no modelo MVC utilizando as principais bibliotecas.'
                    link='https://github.com/PedroLaraa/Api-NodeJs-Sequelize-MySql'
                    textoDoLink='Repositório GitHub'
                    txtImg='React Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/NodeJs.png'
                    tituloProjeto='API Rest | Express & MongoDB'
                    descricaoProjeto='API do zero, seguindo o estilo arquitetural REST e utilizando o framework Express.'
                    link='https://github.com/PedroLaraa/Api-Rest-Express-MongoDB'
                    textoDoLink='Repositório GitHub'
                    txtImg='NodeJs Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/Python.png'
                    tituloProjeto='Recomendador de músicas'
                    descricaoProjeto='Um recomendador de músicas com base no spotify, feito em um curso da alura usando Machine Learning.'
                    link='https://github.com/PedroLaraa/RECOMENDADOR-DE-MUSICAS'
                    textoDoLink='Repositório GitHub'
                    txtImg='Python Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/React.png'
                    tituloProjeto='Organo | Alura'
                    descricaoProjeto='Site desenvolvido para praticar a programação e os padrões utilizados no ReactJs.'
                    link='https://github.com/PedroLaraa/Estudos-React'
                    textoDoLink='Repositório GitHub'
                    txtImg='React Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/JavaScript.png'
                    tituloProjeto='Curso | WEB Full-Stack'
                    descricaoProjeto='O pontapé inicial da minha carreira de .dev, toda minha base de programação se encontra nesse repo.'
                    link='https://github.com/PedroLaraa/Curso-Desenvolvimento-Web'
                    textoDoLink='Repositório GitHub'
                    txtImg='React Logo'
                />
            </div>
        </div>
    )

};

export default Projetos;
