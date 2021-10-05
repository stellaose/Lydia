import {useState} from 'react';
import { BiMenuAltRight } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';

import '../../Stylesheets/NavBar.css';
import Button from './Button';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsMobile(!isMobile)
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
                        
                        
                        <li>
                            <Link to = '/signin' className='mobile' >
                                <h3>Sign In</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to = '/signup' className='mobile' >
                                <h3>Sign Up</h3>
                            </Link>
                        </li>
                    </ul>
                <Button />
            </nav>
            <hr/>
        </>
    )

}

export default NavBar;