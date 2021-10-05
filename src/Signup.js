import React, { useState } from "react";
import Register  from './Redux/Action/SignupAction';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import './Stylesheets/Signin.css';


const SignUp = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {firstname, lastname, email, password, confirmPassword} = values;
  const [submitted, setSubmitted] = useState(false);
  const [valid, SetValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleConfirmPasswordInputChange = (event) => {
    setValues({ ...values, confirmPassword: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstname &&
      values.lastname &&
      values.email &&
      values.password &&
      values.confirmPassword &&
      values.confirmPassword === values.password &&
      values.password.length > 8 
    ) {
      SetValid(true);
    }
    setSubmitted(true);

    dispatch(Register(firstname, lastname, email, password, confirmPassword, history))
  }

  return (
    <div className = 'container'>
        <div className ='image'>
          <img src ="/Photos/signup3.jpg" alt = "" />
      </div>

      <div className = 'second'>    
            
          <div className = 'form'>
          <h2>Create an account</h2>
            <form action="/" onSubmit={handleSubmit}>
              {submitted && valid ? (
                <div className = 'success'>
                  Signup successful!
                </div>
              ) : null}
               
                <div className = 'section'>
                <label htmlFor = 'firstname'>
                  Firstname: <br />
                  {submitted && !values.firstname ? (
                    <span>Please enter your firstname</span>
                  ) : null}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleFirstNameInputChange}
                  value={values.firstname}
                  type="text"
                  name="firstname"
                  placeholder="firstname"
                />
              </div>

              <div className = 'section'>
                <label htmlFor = 'lastname'>
                  Lastname: <br />
                  {submitted && !values.lastname ? (
                    <span>Please enter your lastname</span>
                  ) : null}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleLastNameInputChange}
                  value={values.lastname}
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                />
              </div>

              <div className = 'section'>
                <label htmlFor = 'email'>
                  E-mail:
                  <br />{" "}
                  {submitted && !values.email ? (
                    <span>Please enter your email</span>
                  ) : null}
                </label>
                <input
                  autoComplete="off"
                  onChange={handleEmailInputChange}
                  value={values.email}
                  type="email"
                  id="mail"
                  name="email"
                  placeholder="stuff@gmail.com.."
                />
              </div>
              <div className = 'section'>
                <label htmlFor = 'password'>
                  Password:
                  <br />{" "}
                  {submitted && !values.password ? (
                    <span>Please enter a password</span>
                  ) : submitted && (values.password.length < 8) ? 
                  <span> Password should not be less than 8 characters</span>
                   : submitted }
                </label>
                <input
                  autoComplete="off"
                  onChange={handlePasswordInputChange}
                  value={values.password}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className = 'section'>
                <label htmlFor = 'confirm password'>
                  Confirm password: 
                  <br />{" "}
                  {submitted && !values.confirmPassword ? (
                    <span>Please confirm your password</span>
                  ) : submitted && values.confirmPassword !== values.password ?
                   <span>Password not a match</span> : submitted }
                </label>
                <input
                  autoComplete="off"
                  onChange={handleConfirmPasswordInputChange}
                  value={values.confirmPassword}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
              </div>
              <div className = 'section'>
                <button onClick = {Register} type="submit">
                  Sign up
                </button>
              </div>
            </form>
            <div className = 'register'>
                         <Link to = '/signin'>
                             <p>
                                 Already have an account? Please sign in here&gt;&gt;
                             </p>
                         </Link>
                     </div>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
