import GoogleLogin from "react-google-login";
import axios from "axios";
import BaseURL from "../Utils/BaseUrl";

const GoogleLoginBtn = () => {
    const responseSuccessGoogle = (response) => {
        console.log(response);

        axios({
            method: 'POST',
            url: `${BaseURL}/user/google`,
            data: {tokenId: response.tokenId}
        }).then(response => {
            console.log('Google login success', response);
        });
    }

    const responseErrorGoogle = () => {

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