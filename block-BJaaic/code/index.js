// Animal
     let animalProperty = {
       eat: function () {
           return `I live in ${this.location} and I can eat`
       }
       ,
       changeLocation: function (newLocation) {
         return animals.location = newLocation;

       }
       ,
       summary: function () {
           return` I live in ${this.location} and I have ${this.numberOfLegs} `
       }
     }

function animal (location , numberOfLegs) {
  
   let animals = Object.create(animalProperty);
      animals.location = location;
      animals.numberOfLegs = numberOfLegs;
   return animals;
} 

 

// Dog

let dogMethods = {
    bark: function () {
        return `I am ${this.name} and I can bark 🐶`
    }
 ,
    changeName: function (newName) {
     return this.name = newName;
   }
   ,
   changeColor: function (newColor) {
       return this.color = newColor;
   }
   ,
   summary: function () {
       return `I am ${this.name} and I am of ${this.color} color. I can also bark`
   }

}
Object.setPrototypeOf(animalProperty ,dogMethods);

function dog (location , numberOfLegs ,name ,color) {
  
    let animals = Object.create(dogMethods);
       animals.location = location;
       animals.numberOfLegs = numberOfLegs;
       animals.name = name;
       animals.color = color;
    return animals;
 } 

 // cat
 let catMethods = {
    meow: function () {
        return `I am ${this.name} and I can do mewo meow 😹`
    }
 ,
    changeName: function (newName) {
     return this.name = newName;
   }
   ,
   changeColorofEyes: function (newColor) {
       return this.colorofEyes = newColor;
   }
   ,
   summary: function () {
       return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
   }

}

Object.setPrototypeOf(animalProperty ,catMethods);

 function cat (location , numberOfLegs ,name ,colorofEyes) {
  
    let animals = Object.create(catMethods);
       animals.location = location;
       animals.numberOfLegs = numberOfLegs;
       animals.name = name;
       animals.colorOfEyes= colorofEyes;
    return animals;
 } 