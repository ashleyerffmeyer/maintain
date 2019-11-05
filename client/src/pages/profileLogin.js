import React, {Component} from 'react';

import GoogleLogin from 'react-google-login';
import {PostData} from '../services/postData';
import {Redirect} from 'react-router-dom';
const googleClientId = process.env.googleid;

class LOGIN extends Component {
constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false
};
this.signup = this.signup.bind(this);
}

signup(res, type) {
  let postData;
    if (type === 'google' && res.w3.U3) {
    postData = {
      name: res.w3.ig,
      provider: type,
      email: res.w3.U3,
      provider_id: res.El,
      token: res.Zi.access_token,
      provider_pic: res.w3.Paa
    };
}

if (postData) {
PostData('signup', postData).then((result) => {
   let responseJson = result;
   sessionStorage.setItem("userData", JSON.stringify(responseJson));
   this.setState({redirect: true});
});
} else {}
}

render() {

if (this.state.redirect || sessionStorage.getItem('userData')) {
    return (<Redirect to={'/journal'}/>)
}



const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    this.signup(response, 'google');
}

return (

<div className="row body">
<div className="medium-12 columns">
<div className="medium-12 columns">
<h2 id="welcomeText"></h2>


<br/><br/>

<GoogleLogin
clientId= {googleClientId}
buttonText="Login with Google"
onSuccess={responseGoogle}
onFailure={responseGoogle}/>

</div>
</div>
</div>
);
}
}
export default LOGIN;