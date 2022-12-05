import { useState } from "react";
import './login.scss';
import {useAuth} from "../../utils/authContext"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Loginpage = ()=>{


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const x = useAuth()
    let history = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const result = await x.login({
          email: form.email.value,
          password: form.password.value,
        });
        if (result.status === 200) {
            //when form is submitted it goes into dashboard
                    history.push("/homepage") 
          console.log("You are logged in!")
        } else {
          console.log("You did not manage to log in")
          console.log(result.data.message)
        }

    }

    return (
        <div className="mainwrapper" >

            <div className="Login">
                <form className="loginform" onSubmit={handleSubmit}>
                    <h1 className="vefskolinn">{' { Vefskólinn } '}</h1>
                    <div className="insideswrapper">
                        <div className="userinputwrapper">
                             <div className="username">
                                <label className="logintitle">Username</label>
                            </div>
                            <input className="loginput" 
                                name="email"
                                autoFocus
                                type="email"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value)}
                            ></input>
                        </div>

                        <div className="passwordinputwrapper">
                            <div className="password">
                                <label className="logintitle">Password</label>
                            </div>
                            <input className="loginput"
                                name="password"
                                type="password"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value)}>
                            </input>
                        </div>
                            
                            <div className="btnwrapper">
                                <button className="loginbtn" block="true" type="login" disabled={!validateForm()}>

                                    LOGIN 

                                </button>
                            </div>
                    </div>

                </form>
            </div>
        </div> 
    )
    
    }

    export default Loginpage;