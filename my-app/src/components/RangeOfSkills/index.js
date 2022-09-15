import './RangeOfSkills.css'

const RangeOfSkills = (props) => {

    return(
        <div 
        className="progress-bar progress-bar-striped progress-bar-animated" 
        role="progressbar" 
        aria-valuenow={props.andamento} 
        aria-valuemin="0" 
        aria-valuemax="100" 
        style={{ width: `${props.andamento > 0 ? props.andamento : 5}%`, backgroundColor: 'rgba(255,131,0, 1)', color: 'black' }}> 
        {props.andamento}% 
        </div>
    )
}

export default RangeOfSkills;
