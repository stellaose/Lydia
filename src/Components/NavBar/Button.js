import '../../Stylesheets/Button.css';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

const Button = () => {
  const { isAuthenticated } = useSelector((state) => state.userSignin || {});
  let history = useHistory();

  function refreshPage() {
     localStorage.removeItem("userToken");
     history.push("/");
     window.location.reload(false);
   }
         
  return (
      <>
         {isAuthenticated ? (
                <>
                <Link to = '/signup'>
                    <button className = 'btn-menu' onClick = {refreshPage}>Log out </button>
                </Link>
                </>
              ) : (
                <>
                <Link to = '/signup'>
                   <button className = 'btn-menus'>Sign Up </button>
                </Link>
                <Link to = '/signin'>
                    <button className = 'btn-menu'>Sign In </button>
                </Link>
                </>
              )}
        
     </>
  );
}

export default Button;