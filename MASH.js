function getHome(){
    let random = ["Mansion", "House", "Shack", "Apartment"]
    return random[Math.floor(Math.random()*random.length)];

}

function getChildrenCount(){
    return [Math.floor(Math.random()*100)];

}

function getCar(){
    let random2 = ["a Lemon", "a Convertable", "a Limo", "No car","a Box"]
    return random2[Math.floor(Math.random()*random2.length)];
}

function getSpouse(){
    let random3 = ["have a wife", "have a husband", "be lonely"]
    return random3[Math.floor(Math.random()*random3.length)];
}

console.log("You will live in a " + getHome() + " and will have " + getChildrenCount() + " kids and will drive " + getCar() + " and You will " + getSpouse());