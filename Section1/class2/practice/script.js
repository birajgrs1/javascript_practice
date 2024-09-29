/*
Give discount based on age, gender for metro ticket
- Females get 50% off
- Kids under 5 years of age are free
- Kids up to 8 years have half ticket
- People Over 65 years of age only pay 30% of 
the ticket
- In case of multiple discounts max discount will 
apply.

*/
let age = 45;
let gender = 'female';   // male and female
let finalDiscount;

if(age <= 5){
    finalDiscount = 100;
}

else if( gender === 'female'){
    finalDiscount = 50;
}
else if(age <= 8){
    finalDiscount = 50;
}
else if(age >=65){
    finalDiscount =30;
}
else{
    finalDiscount = 0;
}
console.log(`Your final discount is ${finalDiscount}.`);

