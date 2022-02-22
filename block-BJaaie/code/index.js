// Pseudoclassical Pattern

// Animal
 animal.prototype = {
    eat: function () {
        return `I live in ${this.location} and I can eat`
    }
    ,
    changeLocation: function (newLocation) {
      return this.location = newLocation;

    }
    ,
    summary: function () {
        return` I live in ${this.location} and I have ${this.numberOfLegs} `
    }
  }

function animal (location , numberOfLegs) {
   this.location = location;
   this.numberOfLegs = numberOfLegs;

} 


// Dog

 dog.prototype = {
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
Object.setPrototypeOf(animal.prototype ,dog.prototype);

function dog (location , numberOfLegs ,name ,color) {
  
    //   this.location = location;
    //   this.numberOfLegs = numberOfLegs;
      animal.call(this, location, numberOfLegs);
      this.name = name;
      this.color = color;
    
 } 

 // cat 

  cat.prototype = {
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


 Object.setPrototypeOf(animal.prototype ,cat.prototype);

function cat (location , numberOfLegs ,name ,colorofEyes) {
  
    //   this.location = location;
    //   this.numberOfLegs = numberOfLegs;
      animal.call(this, location, numberOfLegs);
      this.name = name;
      this.colorofEyes = colorofEyes;
    
 } 


 // class 

 class Animal {

      constructor (location , numberOfLegs) {

      this.location = location;
      this.numberOfLegs = numberOfLegs;

     }

    eat () {
        return `I live in ${this.location} and I can eat`
    }
    
    changeLocation (newLocation) {
      return this.location = newLocation;

    }
    
    summary  () {
        return` I live in ${this.location} and I have ${this.numberOfLegs} `
    }
    
 
 } 

 // dog

 class  Dog extends Animal  {

     constructor (location , numberOfLegs, name ,color) {

       super(location , numberOfLegs);

      this.name = name;
      this.color = color;
    
 } 

    bark () {
        return `I am ${this.name} and I can bark 🐶`
    }

    changeName (newName) {
    return this.name = newName;
    }

    changeColor (newColor) {
    return this.color = newColor;
    }

    summary  () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

 }