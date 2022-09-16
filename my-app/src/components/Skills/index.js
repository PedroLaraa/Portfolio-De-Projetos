import Carrossel from '../Carrossel';

import './Skills.css'

const Skills = () => {



    return (
        <div className='skillsContainer'>
            <div className='skillsCarousel'>
                <Carrossel
                    caminhoImagem1='/images/JavaScript.png'
                    caminhoImagem2='/images/React.png'
                    caminhoImagem3='/images/NodeJs.png'
                    caminhoImagem4='/images/Python.png'
                    caminhoImagem5='/images/MySql.png'
                    caminhoImagem6='/images/Git.png'
                    caminhoImagem7='/images/Bootstrap.png'
                    caminhoImagem8='/images/Html.png'
                    caminhoImagem9='/images/Css.png'
                    alt1='JavaScript Logo'
                    alt2='React Logo'
                    alt3='NodeJs Logo'
                    alt4='Python Logo'
                    alt5='MySql Logo'
                    alt6='Git Logo'
                    alt7='Bootstrap Logo'
                    alt8='HTML Logo'
                    alt9='CSS Logo'
                />
                
            </div>
        </div>
    );
};

export default Skills;
