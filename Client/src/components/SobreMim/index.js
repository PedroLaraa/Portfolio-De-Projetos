import DeveloperCard from '../DeveloperCard';
import DeveloperText from '../DeveloperText';
import './SobreMim.css'

const SobreMim = () => {

    return(
        <div className='sobreMim'>
            <h1>Sobre Mim</h1>
            <div className='sobreMimDevCard'>
                <DeveloperCard />
            </div>
            <div className='sobreMimDevTxt'>
                <DeveloperText />
            </div>
        </div>
    )

};

export default SobreMim;
