    function sayHello(name = "unknown person") {
        console.log(`Hello ${name}`);
    }
    sayHello("bob");
    sayHello();

    //Make an Object
    //Property Variable Assignment Shorthand
    let firstName = "bob";
    let lastName = "smith";
    let age = 42;
    //declare a name and age variable
    let person ={
        firstName,
        lastName,
        age
    }
    console.log(person);

    // Object Destructuring
    let car = {
        make: "Toyota",
        model: "Tundra",
        year: 2020
    }
    const {make, model, year} = car;
    console.log(make);
    console.log(model);
    console.log(year);

    /*function printCar({make}, {model}, {year}){
        console.log(make);
        console.log(model);
        console.log(year);*/



    const fruits =["orange", "apple", "mango"];
    const[a, b, c] = fruits;
    console.log(a);
    console.log(b);
    console.log(c);



