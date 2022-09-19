import CardProjetos from '../CardProjetos';
import './CertificadosCard.css'

const CertificadosCard = () => {

    return(
        <div className='w-100 row justify-content-around'>
            <CardProjetos 
            imagem='https://media-exp1.licdn.com/dms/image/C4D0BAQHnFDuaYnscdQ/company-logo_100_100/0/1658433175874?e=1671667200&v=beta&t=LHRDLnX22EsIj9c8PjSH_I59U0FDlNJFh4AgAoeP870'
            txtImg='Logo Alura'
            tituloProjeto='React: Desenvolvendo com JavaScript'
            link='https://cursos.alura.com.br/certificate/679cf3eb-39ab-4262-ab75-2a6952f7ddde'
            textoDoLink='Certificado'
            />
            <CardProjetos 
            imagem='https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1626275253364?e=1671667200&v=beta&t=Id3fgRyV0F-UdG_PNbLHb2Zr-bDoXslDCY-7kuWjB9k'
            txtImg='Logo Udemy'
            tituloProjeto='Desenvolvimento WEB Full-Stack'
            link='http://ude.my/UC-0d489f37-1c98-4dfd-9408-8ae24aeba424'
            textoDoLink='Certificado'
            />
            <CardProjetos 
            imagem='https://media-exp1.licdn.com/dms/image/C4D0BAQHnFDuaYnscdQ/company-logo_100_100/0/1658433175874?e=1671667200&v=beta&t=LHRDLnX22EsIj9c8PjSH_I59U0FDlNJFh4AgAoeP870'
            txtImg='Logo Alura'
            tituloProjeto='Formação Python e orientação a objetos'
            link='https://cursos.alura.com.br/user/pedro-lara0/degree-Python-linguagem-162571/certificate'
            textoDoLink='Certificado'
            />
            <div className='w-100 pt-4'></div>
            <CardProjetos 
            imagem='https://media-exp1.licdn.com/dms/image/C4D0BAQHnFDuaYnscdQ/company-logo_100_100/0/1658433175874?e=1671667200&v=beta&t=LHRDLnX22EsIj9c8PjSH_I59U0FDlNJFh4AgAoeP870'
            txtImg='Logo Alura'
            tituloProjeto='Machine Learning: Classificação com SKLearn'
            link='https://cursos.alura.com.br/certificate/679cf3eb-39ab-4262-ab75-2a6952f7ddde'
            textoDoLink='Certificado'
            />
            <CardProjetos 
            imagem='https://media-exp1.licdn.com/dms/image/C4D0BAQHnFDuaYnscdQ/company-logo_100_100/0/1658433175874?e=1671667200&v=beta&t=LHRDLnX22EsIj9c8PjSH_I59U0FDlNJFh4AgAoeP870'
            txtImg='Logo Alura'
            tituloProjeto='Clustering aplicado: Recomendando músicas com K-Means'
            link='https://cursos.alura.com.br/certificate/679cf3eb-39ab-4262-ab75-2a6952f7ddde'
            textoDoLink='Certificado'
            />
            <CardProjetos 
            imagem='https://media-exp1.licdn.com/dms/image/C4D0BAQHnFDuaYnscdQ/company-logo_100_100/0/1658433175874?e=1671667200&v=beta&t=LHRDLnX22EsIj9c8PjSH_I59U0FDlNJFh4AgAoeP870'
            txtImg='Logo Alura'
            tituloProjeto='Machine Learning: Lidando com dados de muitas dimensões'
            link='https://cursos.alura.com.br/certificate/164c2145-cdf6-4d19-80af-d88ae0e685f2'
            textoDoLink='Certificado'
            />
        </div>
    )

};

export default CertificadosCard;
