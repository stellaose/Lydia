import "../Stylesheets/Footer.css";
import { AiOutlineInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
  return (
    <>
      <div className= 'footer'>
        <hr/>
            <div className = 'social-media'>
                <p ><AiFillFacebook /></p>
                <p><GrTwitter /></p>
                <p ><AiOutlineInstagram/></p>
                <p ><AiFillYoutube /></p>
            </div>   
      </div>
    </>
  );
};

export default Footer;
