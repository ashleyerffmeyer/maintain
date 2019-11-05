import React, {Component} from 'react';

import GoogleLogin from 'react-google-login';
import {PostData} from '../services/postData';
import {Redirect} from 'react-router-dom';

const googleid = process.env.REACT_APP_GOOGLE_API_KEY;



class LOGIN extends Component {
constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false
};

}


if (postData) {
PostData(postData).then((result) => {
   let responseJson = result;
   sessionStorage.setItem( JSON.stringify(responseJson));
   this.setState({redirect: true});
});
}
render() {

if (this.state.redirect ) {
    return (<Redirect to={'/journal'}/>)
}



const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    
}

return (

<div className="row body">
<div className="medium-12 columns">
<div className="medium-12 columns">
<h2 id="welcomeText"></h2>


<br/><br/>

<GoogleLogin
clientId={googleid}
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