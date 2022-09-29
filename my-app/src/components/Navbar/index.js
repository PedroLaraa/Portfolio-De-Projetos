import './Navbar.css'

import BotaoNavbar from '../BotaoNavbar';
import BotaoContato from '../BotaoContato';

const Navbar = () => {

    const emailContato = 'pedroalveslara@gmail.com'

    return(
        <header id='home' className='navbarPrincipal'>
            <nav className='navbarContainer navbar navbar-expand-lg w-100'>
                <section className='navigatorNav'>
                    <BotaoNavbar pagina='home' textoBotao='Home' />
                    <BotaoNavbar pagina='sobre-mim' textoBotao='Sobre' />
                    <BotaoNavbar pagina='skills' textoBotao='Skills' />
                    <BotaoNavbar pagina='projetos' textoBotao='Projetos' />
                    <BotaoNavbar pagina='certificados' textoBotao='Certificados' />
                    <BotaoContato email={emailContato} texto='Contato' />
                </section>
                <div className='socialMediaNav'>
                    <section className='pt-1'>
                        <a href='https://github.com/PedroLaraa'><img src='/images/github.png' alt='GitHub logo'/></a>
                        <a href='https://www.linkedin.com/in/pedro-lara-497723176/'><img src='/images/linkedin.png' alt='Linkedin Logo'/></a>
                        <a href='https://www.instagram.com/pedrinlara_'><img src='/images/instagram.png' alt='Instagram Logo'/></a>
                    </section>
                </div> 
            </nav>
        </header>
    )

};

export default Navbar;
