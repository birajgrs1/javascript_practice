
let promise = fetch("https://goweather.herokuapp.com/weather/Kathmandu");
promise.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    // console.log(response.headers)
    return response.json()    
})
.then((value)=>{
    console.log(value);
})


/*
Syntax:

fetch('url') // api for the get request
    .then(response => response.json())
    .then(data => console.log(data));

*/

/*
Parameters:

URL: The URL to which the request is to be made.
Options: It is an array of properties. It is an optional parameter. Options available are:
Method: Specifies HTTP method for the request. (can be GET, POST, PUT or DELETE)
Headers
Body: Data to be sent with the request.
Mode: Specifies request mode(eg. cors, nocors, same-origin, etc)
Credentials: Specifies whether to send user credentials (cookies, authentication headers, etc.) with the request
*/