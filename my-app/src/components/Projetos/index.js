import CardProjetos from '../CardProjetos';
import './Projetos.css'

const Projetos = (props) => {

    return (
        <div id='projetos' className='projetosContainer'>
            <h1>Projetos & Estudos</h1>
            <div className='projetosCardContainer row'>
                <CardProjetos
                    className='col'
                    imagem='/images/TypeScript.png'
                    tituloProjeto='NGCash | Front-End - TSX & Axios'
                    descricaoProjeto='Front-End desenvolvido para teste de Júnior na empresa NGCash, para mais infos, acesse o repositório!'
                    linkRepo='https://github.com/PedroLaraa/NGCash-FrontEnd'
                    textoDoRepo='Repositório GitHub'
                    txtImg='React Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/TypeScript.png'
                    tituloProjeto='NGCash | Back-End - TypeORM & Postgres'
                    descricaoProjeto='Back-End desenvolvido para teste de Júnior na empresa NGCash, para mais infos, acesse o repositório!'
                    link='https://github.com/PedroLaraa/NGCash-Backend'
                    textoDoLink='Repositório GitHub'
                    txtImg='TypeScript Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/React.png'
                    tituloProjeto='Weather Map'
                    descricaoProjeto="Previsão do tempo em 1 Click. Projeto desenvolvido com o intuito de consumir API's!"
                    link='https://weather-map-seven.vercel.app'
                    textoDoLink='Deploy'
                    linkRepo='https://github.com/PedroLaraa/Weather-Map'
                    textoDoRepo='Repositório GitHub'
                    txtImg='React Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/React.png'
                    tituloProjeto='Url Short'
                    descricaoProjeto='Orçamentos automáticos com condições pré definidas conforme especificado no repo do GitHub '
                    link='https://url-short-phi.vercel.app'
                    textoDoLink='Deploy'
                    linkRepo='https://github.com/PedroLaraa/Url-Short'
                    textoDoRepo='Repositório GitHub'
                    txtImg='React Logo'
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
                    imagem='/images/Angular.png'
                    tituloProjeto='Memoteca'
                    descricaoProjeto='Projeto desenvolvido com objetivo de dar os primeiros passos utilizando o Framework Angular.'
                    link='https://formacao-angular.vercel.app'
                    textoDoLink='Deploy'
                    linkRepo='https://github.com/PedroLaraa/Biblioteca-Com-Angular'
                    textoDoRepo='Repositório GitHub'
                    txtImg='React Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/Python.png'
                    tituloProjeto='Recomendador de músicas'
                    descricaoProjeto='Um recomendador de músicas com base no spotify, feito em um curso da alura usando Machine Learning.'

                    linkRepo='https://github.com/PedroLaraa/RECOMENDADOR-DE-MUSICAS'
                    textoDoRepo='Repositório GitHub'
                    txtImg='Python Logo'
                />
                <CardProjetos
                    className='col'
                    imagem='/images/Python.png'
                    tituloProjeto='Detector de rostos'
                    descricaoProjeto='Detector de rostos desenvolvido com python no intuito de aprender mais sobre machine learning.'
                    link='https://github.com/PedroLaraa/Detector-De-Rostos'
                    textoDoLink='Repositório GitHub'
                    txtImg='Python Logo'
                />
            </div>
        </div>
    )

};

export default Projetos;
