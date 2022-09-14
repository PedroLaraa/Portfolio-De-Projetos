import './Navbar.css'

import BotaoNavbar from '../BotaoNavbar';
import BotaoContato from '../BotaoContato';

const Navbar = () => {

    const emailContato = 'pedroalveslara@gmail.com'

    return(
        <header id='home' className='navbarPrincipal'>
            <div>
                <section>
                    <BotaoNavbar pagina='home' textoBotao='Home' />
                    <BotaoNavbar pagina='root' textoBotao='Skills' />
                    <BotaoNavbar pagina='root' textoBotao='Projetos' />
                    <BotaoNavbar pagina='root' textoBotao='Sobre mim' />
                    <BotaoContato email={emailContato} texto='Contato' />
                </section>
            </div>
        </header>
    )

};

export default Navbar;
