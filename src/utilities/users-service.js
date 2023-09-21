import * as usersAPI from "./users-api";


export async function signUp(userData){
    console.log('user data', userData);
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token', token) //storing automatically converts to string, vice versa not true
    return getUser()


    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)

    //Note: We have not used a try/catch block because any error will propagate up to the "consumer" of the service - in this case the consumer is the handleSubmit method in the <SignUpForm> component.
}


export async function login(credentials){
    const token = await usersAPI.login(credentials)
    console.log(token);
    localStorage.setItem('token', token)
    // return token
    return getUser()
}






export async function logOut(){
    localStorage.removeItem('token')
}





export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
    }
    
    
export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    }



export async function checkToken(){
    const dateString = await usersAPI.checkToken()
    return new Date(dateString)
}






