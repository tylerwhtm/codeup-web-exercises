// declare an object use new Object()
let rey = Object();
console.log(rey);
// declare the same object using object
rey = {};
console.log(rey);
//dynamically assign some properties to obect
//use dot notation
//show off camel case for properties
rey.petType = "dog";
rey.breed = "german shepherd";
console.log(rey);

//say no to this
/*let reyPetType = "dog"
let reyBreed = "german shepard"*/

//use array notation
console.log(rey["breed"]) //don't do this
console.log(rey.breed) // do this
rey.breed = "chihuahua";
rey.gender = "female";
console.log(rey)

const dolly = {
    name: "Dolly",
    gender: "female",
    breed: "american bulldog"
}
//add a property to the object dynamically
dolly.petType = "dog"
console.log(dolly);
// please use dot notation for now

//declare use dot notation for now

const candy = {
    name: "Candy",
    age: 2,
    petType: "dog",
    gender: "female",
    breed: "pug",
    owner: {
        name: {
            firstName: "joe",
            lastName: "schmoe",
        },
        address: "555 sesame street",
        number: "8675309"
    }
}

console.log(candy)
// and access the book's author
console.log(candy.owner.name);

//put an array in the book(genres)
//and access the genres
candy.favoriteToys = [
    "tennis ball",
    "stick"
];

// print out candy's 2nd favorite toy
//using the pets array


const pets =[];
pets.push(rey);
pets.push(dolly);
pets.unshift(candy);

rey.name ="Rey";

console.log(pets)

console.log(pets[1]);

console.log(pets[0].favoriteToys[1]);

function doDogStuff(myPets) {
    for (const petIndex in myPets) {
        const pet = myPets[petIndex];
        if (pet.favoriteToys === undefined)
        {
            console.log("Calling ASPCA....")
        } else {
            console.log(pet.favoriteToys);
        }
    }
}

// tyler gives his dog a rock
rey.favoriteToys = ["rock"];

doDogStuff(pets);

//make a function to print out the book
function sit(){
    console.log("The dog sits");
}


rey.sit = function(){
    console.log(this.name + " sits");
}
rey.sit();

candy.sit = rey.sit;
console.log("sit candy, sit ");
candy.sit();
rey.sit();
dolly.sit = rey.sit;
dolly.sit();


const red1 = {
    make: "chevy",
    model: "corvette",
    honk: function (){
        console.log("The "+ this.model + " says Beep, Beep");
    }
}

const blueCar = {
    make: "dodge",
    model: "charger",
    honk: function(){
        console.log("Honk, Honk");
    }
}

red1.honk();
blueCar.honk();
//objects can also have behavior (i.e.,


//what behaviors can a book have???

//maybe read() and/or throw()
//this
//refers t0 the thing that the function
//(or is being called from)