
import Certificados from '../Certificados';
import HomePage from '../HomePage';
import Projetos from '../Projetos';
import Skills from '../Skills';
import SobreMim from '../SobreMim';

import './Body.css'

const Body = (props) => {

    return(
        <div>
            <div className='bodyConteudoHomePage'>
                <HomePage />
            </div>
            <div id='sobre-mim' className='bodyConteudoSobreMim'>
                <SobreMim />
            </div>
            <div id='skills' className='bodyConteudoSkills'>
                <Skills />
            </div>
            <div id='projetos' className='bodyConteudoProjetos'>
                <Projetos />
            </div>
            <div id='certificados' className='bodyConteudoCertificados'>
                <Certificados />
            </div>
        </div>
    );
};

export default Body;
