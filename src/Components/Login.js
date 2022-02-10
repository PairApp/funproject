import React from 'react'
import { GoogleLogin } from 'react-google-login'
// import {  BrowserRouter as Router, Redirect } from 'react-router-dom'


const clientId = '278233718971-h98g350r0u4bcu0at4blpjmaf42crgiv.apps.googleusercontent.com'

function Login(props) {
    const onSuccess = (res) => {
        console.log('[Login Sucess] currentUser:', res.getAuthResponse().id_token)
        let token = res.getAuthResponse().id_token
        // let data = res.profileObj
        // let user = props.users.filter(user => user.uid === data.googleId)[0]
        props.postUser(token)
        // return <Router>
        //     <Redirect to='/home' />
        //     </Router>
        // props.setCurrentUser({...data, user_id: user.id, wines: user.wines})
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res)
    }

    return (
        <div>
            <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            // isSignedIn={true}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px'}}
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    {/* sign in with google */}
                </button>
            )}
            />
        </div>
    )
}

export default Login
