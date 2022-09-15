import './HomePage.css'

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
                <a href='#skills' className='btn btn-dark'>Saiba mais...</a>
            </div>
        </div >
    );
};

export default HomePage;
