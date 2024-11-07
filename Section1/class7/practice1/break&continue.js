console.log("------ Break and continue ------");

for(let i = 0; i<=0; i++){
    console.log(i);
}

//Applying break

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}


//Applying continue

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}