import './HomePage.css'

import DeveloperSocialMedia from '../DeveloperSocialMedia';

const HomePage = (props) => {



    return (
        <div className='homePage'>
            <div className='imgRickMorty'>
                <img src='/images/portalRick2.png' />
            </div>
            <div className='txtDeveloper'>
                <p>Me chamo Pedro e sou Desenvolvedor Web Full-Stack</p>
            </div>
            <div className='btnMoreInfo'>
                <a href='#sobre-mim' className='btn btn-dark'>Saiba mais...</a>
            </div>
            <div className='socialMediaDeveloper'>
                <DeveloperSocialMedia />
            </div>
        </div>
    );
};

export default HomePage;
