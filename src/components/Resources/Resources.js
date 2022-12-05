import './Resources.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Resources = ()=>{


    return(
        <>
        <div>
            <div className='resourcescontainer'>
                <h1 className='restxt'>{"{ Resources }"}</h1>
                <a href='https://drive.google.com/drive/folders/12lESHQfEtQChjNUf9GyAdGc-978E416o'>
                <button className='drivebtn'>Drive</button>
                </a>
                <h2 className='comingsoon'>Videos and recordings coming soon!</h2>
            </div>
        </div>
        </>
    )
}

export default Resources;