import './RangeOfSkills.css'

const RangeOfSkills = (props) => {

    return (
        <div className='rangeOfSkills'>
            <label>{props.skill}</label>
            <div className='backgroundAndamento'>
                <section
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow={props.andamento}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${props.andamento > 0 ? props.andamento : 5}%`, backgroundColor: props.backgroundColor, color: '#FFFFFF', fontFamily: 'Luckiest Guy' }}>
                    {props.andamento}%
                </section>
            </div>
        </div>
    );
};

export default RangeOfSkills;
