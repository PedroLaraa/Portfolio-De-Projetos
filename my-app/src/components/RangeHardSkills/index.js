import './RangeHardSkills.css'

import RangeOfSkills from '../RangeOfSkills'

const RangeHardSkills = () => {

    return (
        <div className='w-100 row justify-content-around pb-5 m-0'>
            <RangeOfSkills className='col' skill='• JavaScript' andamento='70' backgroundColor='#FFD637' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• React.Js' andamento='70' backgroundColor='#61DAFB' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• Node.Js' andamento='60' backgroundColor='#3E863D' ></RangeOfSkills>
            <div className='w-100 p-4'></div>
            <RangeOfSkills className='col' skill='• TypeScript' andamento='35' backgroundColor='#3178C6' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• Python' andamento='40' backgroundColor='#366E9C' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• MySql' andamento='50' backgroundColor='#E58E00' ></RangeOfSkills>
            <div className='w-100 p-4'></div>
            <RangeOfSkills className='col' skill='• Angular' andamento='20' backgroundColor='red' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• Git' andamento='70' backgroundColor='#F05033' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• Bootstrap' andamento='75' backgroundColor='#7311F6' ></RangeOfSkills>
            <div className='w-100 p-4'></div>
            <RangeOfSkills className='col' skill='• HTML' andamento='85' backgroundColor='#E44D26' ></RangeOfSkills>
            <RangeOfSkills className='col' skill='• CSS' andamento='80' backgroundColor='#264DE4' ></RangeOfSkills>
        </div>
    )
}

export default RangeHardSkills
