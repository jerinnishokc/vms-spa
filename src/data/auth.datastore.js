import {clearLocalStorage} from './utility';

async function login(user) {
    // Make post login request
    try{
        const userObj = {
            Email: user.email,
            Type:user.type,
            Password: user.password
        };
        const response = await fetch("https://localhost:5001/api/auth/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        });
        if(response.status === 200) {
            const userDetails = await response.json();
            // console.log(response);
            console.log(userDetails);        
            return userDetails;
        } else {
            throw new Error(`${response.status} - ${response.title}`);
        }
    } catch(e) {
        console.log('Error occurred', e);
        return false;
    }
}

async function signUp(user) {
    try{
        const userObj = {
            Uid: user.uid,
            Name: user.name,
            Email: user.email,
            Type:user.type,
            Password: user.password
        };
        // Make post login request
        const response = await fetch("https://localhost:5001/api/auth/register",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        });
        if(response.status === 200) {
            //const userDetails = await response.json();
            // console.log(response);
            console.log(response);        

            return true;
        } else {
            throw new Error(`${response.status} - ${response.title}`);
        }
    } catch(e) {
        console.log('Error occurred', e);
        return false;
    }
}

function kickStartAutoLogout(expirationDate, logout) {
    // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    console.log('AUTO LOGOUT SET');
    const expirationDuration = new Date(expirationDate).getTime() - new Date().getTime();
    console.log(expirationDuration);
    setTimeout(() => {        
        console.log('AUTO EXPIRE KICKS OFF');
        logout();        
        clearLocalStorage("user");
    }, expirationDuration);
}

export {login, signUp, kickStartAutoLogout};