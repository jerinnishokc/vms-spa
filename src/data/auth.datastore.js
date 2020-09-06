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
        const userDetails = await response.json();
        // console.log(response);
        // console.log(userDetails);
        return userDetails;
    } catch(e) {
        console.log('Error occurred', e);
        return false;
    }
}

function signUp(user) {
    // Make post login request
    return true;
}

export {login, signUp};