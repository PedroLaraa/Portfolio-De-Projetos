
import HomePage from '../HomePage';
import Projetos from '../Projetos';
import Skills from '../Skills';

import './Body.css'

const Body = (props) => {

    return(
        <div>
            <div className='bodyConteudoHomePage'>
                <HomePage />
            </div>
            <div id='skills' className='bodyConteudoSkills'>
                <Skills />
            </div>
            <div id='projetos' className='bodyConteudoProjetos'>
                <Projetos />
            </div>
        </div>
    );
};

export default Body;
