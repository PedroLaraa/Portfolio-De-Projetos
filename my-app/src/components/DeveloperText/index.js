import DeveloperSocialMedia from '../DeveloperSocialMedia';
import './DeveloperText.css'

const DeveloperText = () => {

    const textoDeveloperIntroducao = `
    Opa, me chamo Pedro e sou desenvolvedor Web Full-Stack. Quando eu era criança, 
    sempre tinha interesse em saber como as coisas funcionavam dentro
    do computador, e cá estou, nesse mundo da programação, onde me encontrei 
    e sou apaixonado em ficar quebrando a cabeça e bebendo um cafézinho. Sou uma pessoa
    que é movida pela música, não é muito difícil me ver de fone e dançando sozinho enquanto
    programo. Acredito que calma e paciência é a solução para todos os problemas, não
    adianta se estressar, respira fundo e foca que da certo. Nossos sonhos movem montanhas,
    e meu maior sonho é chegar no topo desse Monte Everest da programação 🏔️
    `

    return (
        <div>
            <div className='developerText'>
                <p>{textoDeveloperIntroducao}</p>
            </div>
            <DeveloperSocialMedia />
        </div>
    )

};

export default DeveloperText;
