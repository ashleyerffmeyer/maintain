import React, {Component} from 'react';

import GoogleLogin from 'react-google-login';


const googleid = process.env.REACT_APP_GOOGLE_API_KEY;



class LOGIN extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };

    onFailure = (error) => {
        alert(error);
    }


    googleResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
    };

    render() {
        let content = !!this.state.isAuthenticated ?
                (
                    <div>
                        <p>Authenticated</p>
                        <div>
                            {this.state.user.email}
                        </div>
                        <div>
                            <button onClick={this.logout} className="button">
                                Log out
                            </button>
                        </div>
                    </div>
                ) :
                (   <div>

                 
<GoogleLogin
                        clientId={googleid}
                        buttonText="Google Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />


 

  </div>


);

return (
    <div className="LOGIN">
        {content}
    </div>
);
}



}

export default LOGIN