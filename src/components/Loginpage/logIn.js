import { useState } from "react";
import './login.scss';
//import mobilelogimg from '../../images/login-graphic-mobile-light.svg';


const Loginpage = ()=>{

//export default function Loginpage( {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event){
        event.preventDefault();
    }


//})

    return (
        <>
        {/* <img src={mobilelogimg}/>   */}
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label className="logintitle">Username</label>
                <br></br>
                <input className="input"
                autoFocus
                type="email"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                ></input>
                <br></br>
                <label className="logintitle">Password</label>
                <br></br>
                <input className="input"
                type="password"
                value={password}
                onChange={ (e) => setPassword(e.target.value)}></input>
                <br></br>
                <button className="loginbtn" block="true" type="login" disabled={!validateForm()}>Login</button>
            </form>
      </div>
       </> 
    )
    
    }

    export default Loginpage;