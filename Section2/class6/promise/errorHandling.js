

function Operation(success){
    return new Promise((resolve, reject) =>{
        if(success){
            resolve('Successful operation.');
        }
        else{
            reject('Operation Failed!');
        }
    });
}


Operation(false)
.then(res => console.log(res))
.catch(err => console.log(err));