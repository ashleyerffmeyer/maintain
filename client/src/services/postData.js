export function PostData(type, userData) {
   // let BaseURL = 'https://maintain-web-app.herokuapp.com/profileLogin';
    let BaseURL = 'http://localhost/profileLogin/';
    
    return new Promise((resolve, reject) =>{
    fetch(BaseURL+type, {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((res) => {
        resolve(res);
    })
    .catch((error) => {
       reject(error);
    });
    
    });
    }