import {useState} from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Signout } from '../../Redux/Action/SigninAction'

import '../../Stylesheets/NavBar.css';
import Button from './Button';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { isAuthenticated } = useSelector((state) => state.userSignin || {});

    const dispatch = useDispatch()

    const handleClick = () => {
        setIsMobile(!isMobile)
    } 

    const refreshPage = (e) => {
        e.preventDefault();
        dispatch(Signout())
        window.location.reload(false);
      }

    return (
        <>
            <nav className = ' navbar'>
                <div className = 'navbar_logo'>
                       <Link to = '/'>
                        <img src="/Photos/lydia-logo.jpg" alt="Lydia" />
                    </Link>
                </div>

                <div  onClick = {handleClick}>
                    <button className = 'menu-icon'>{isMobile ? <AiOutlineClose/> : <BiMenuAltRight/>}</button>
                </div>

                    <ul className = {isMobile ? 'menu' : 'link'}>
                        <li>
                            <Link to = '/'>
                                <h3>Home</h3>
                            </Link>
                        </li> 
                        <li>
                            <Link to = '/about'>
                                <h3>About</h3>
                            </Link>
                        </li> 
                        <li>
                            <Link to = '/contact'>
                                <h3>Contact</h3>
                            </Link>
                        </li>  
                        
                        {isAuthenticated ? (
                            <>
                            <Link to = '/signin' className='mobile' >
                                <h3 onClick = {refreshPage}>Log out</h3>
                            </Link>
                            </>
                            ) : (
                                <>
                                <Link to = '/signin' className='mobile' >
                                    <h3>Sign In</h3>
                                </Link>
                        
                                <Link to = '/signup' className='mobile' >
                                    <h3>Sign Up</h3>
                                </Link>
                            </>
                        )}
                    </ul>
                <Button />
            </nav>
            <hr/>
        </>
    )

}

export default NavBar;