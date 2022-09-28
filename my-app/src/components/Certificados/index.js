import CertificadosCard from '../CertificadosCard';
import './Certificados.css'

const Certificados = () => {

    return(
        <div className='certtificadosConteudo'>
            <h1>Certificados</h1>
            <section>
                <CertificadosCard />
            </section>
            <h1>Demais certificados aqui: 
                <a href='https://www.linkedin.com/in/pedro-lara-497723176/details/certifications/' >Linkedin</a>
            </h1>
        </div>
    );
};

export default Certificados;
