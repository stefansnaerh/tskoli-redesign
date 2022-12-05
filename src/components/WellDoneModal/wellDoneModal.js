import { useState } from 'react';
import './wellDoneModal.scss';
import { useNavigate } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player'

const WellDoneModal = () =>{
    const [openModal, setOpenModal] = useState({});
    const history = useNavigate();


    return (
        <>
            <div className='modaldone'>
                <Player src='https://assets10.lottiefiles.com/packages/lf20_al219bxl.json' 
                className='Player' 
                loop
                autoplay
                />
                <h1 className='projectreturnedtxt'>Project returned, well done!</h1>
                <button onClick={() => history ("/modules")} className='continuebtn'>Click to continue</button>
            </div>
        </>
        )
}


export default WellDoneModal;