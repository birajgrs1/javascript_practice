function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Authenticating...");
        setTimeout(() => {
            if (username === 'user' && password === 'pass') {
                resolve('Login successful!');
            } else {
                reject('Invalid credentials');
            }
        }, 3000); 
    });
}

login('user', 'pass')
    .then(message => console.log(message))
    .catch(error => console.error(error));
