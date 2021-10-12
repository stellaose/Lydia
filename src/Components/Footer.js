import "../Stylesheets/Footer.css";
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
  return (
    <>
      <div className= 'footer'>
            <div className = 'social-media'>
                <p ><AiFillFacebook /></p>
                <p><GrTwitter /></p>
                <p ><AiOutlineInstagram/></p>
            </div>   
      </div>
    </>
  );
};

export default Footer;
