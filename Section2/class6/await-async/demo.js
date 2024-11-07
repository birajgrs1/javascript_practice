// async function hello() {
//     return 'Hello';
// }

// hello().then((greet) =>{
//     console.log(greet);
// })



function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000); 
    });
}


async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); 
    console.log(data); 
}


getData();
