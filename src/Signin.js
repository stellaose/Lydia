import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import {Signin} from './Redux/Action/SigninAction';
import GoogleLoginBtn from './Components/GoogleLoginBtn';
import NavBar from './Components/NavBar/NavBar';

import './Stylesheets/Signin.css';

const Login = () => {
    const [signinInfo, setSigninInfo] = useState(
        {username: "", 
        password: ""});
        
    const dispatch = useDispatch();
    const history = useHistory();
    const {email, password} = signinInfo;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setSigninInfo({
          ...signinInfo,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(Signin(email, password, history));
      };

    return (
        <>
        <NavBar />
           <div className = 'container'>
                <div className = 'image'>
                    <img src="/Photos/signin.jpeg" alt="" />
                </div>

                <div className = 'form'>
                     <h2>
                         Sign in to your account
                     </h2>

                     <div className = 'google'>
                         <GoogleLoginBtn />
                     </div>

                     <div>
                        <form onSubmit={handleSubmit}>
                            <div className = 'form-control'>
                                <label htmlFor = 'email'>
                                E-mail: </label>
                                <input
                                    type = 'email'
                                    id = 'email'
                                    placeholder = "stuff@gmail.com.."
                                    name = 'email'
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div className = 'form-control'>
                                <label htmlFor="password">Password: </label>
                                <input
                                    type="password"
                                    placeholder = 'password'
                                    name ="password"
                                    onChange = {handleInput}
                                    id = "password"
                                    required
                                />
                                <span className = 'p-viewer'>
                                </span>
                            </div>
                            <div className = 'form-control'>
                                <button type="submit" onClick = {Signin}>
                                    Sign in
                                </button>
                            </div>
                        </form>
                     </div>
                     
                     <div className = 'register'>
                         <Link to = '/signup'>
                             <p>
                                 Don't have an account? Register here&gt;&gt;
                             </p>
                         </Link>
                     </div>
                </div>
           </div> 
        </>
    )
}

export default Login
