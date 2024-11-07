/*
Fetch:::
JavaScript can send network requests to the server and load new information whenever it’s needed.

For example, we can use a network request to:

Submit an order,
Load user information,
Receive latest updates from the server,
…etc.
*/


fetch('https://www.example.com')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
