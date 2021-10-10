import React from 'react';
import { Link } from 'react-router-dom'
import './Stylesheets/Form.css';

const Form = () => {
    return (
        <>
            <div className = 'content'>
                <div className = 'form-section'>
                    <img src="/Photos/together.jpeg" alt="" />
                    <h3>
                       Let's build your dream space together
                    </h3>
                    <p>
                        But first, we would like to know you a little better...
                    </p>
                
                    <Link to = '/data' >
                        <button>Get Started!</button>
                    </Link>
                </div>
            </div>
           
        </>
    );
}

export default Form
