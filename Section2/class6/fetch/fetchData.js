

function fetchFromUrl(url){
    return new Promise((resolve, reject) =>{
        fetch(url)
        .then(response =>{
            if(!response.ok){
                reject('Error: '+response.statusText);
            }
            return response.json();
        })

        .then(res => resolve(res))
        .catch(err => reject(err));
    });
}


fetchFromUrl('https://jsonplaceholder.typicode.com/posts')
.then(res => console.log("Fetched Datas: ", res))
.catch(err=> console.log("Error: ", err));
