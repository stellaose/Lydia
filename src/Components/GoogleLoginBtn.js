import GoogleLogin from "react-google-login";
// import axios from "axios";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleSignin } from "../Redux/Action/SigninAction";
// import BaseURL from "../Utils/BaseUrl";

const GoogleLoginBtn = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const responseSuccessGoogle = (response) => {
        console.log(response);
        history.goBack()
        dispatch(GoogleSignin(response))
    }

    const responseErrorGoogle = (err) => {
        console.log(err)
    }
    return (
        <>
            <div id = 'google'>
                <GoogleLogin
                    clientId="755984224582-1c5ofvd65dg1j43b0aq2amnh09e00vit.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </>
    )
}

export default GoogleLoginBtn;