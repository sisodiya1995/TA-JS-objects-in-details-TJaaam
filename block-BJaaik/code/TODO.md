## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js

class Person {
    constructor (name , age , gender){
      this.name = name ;
      this.age = age;
      this.gender = gender
    }
    eat() {

    };
   sleep() {

   }
   walk() {

   }
}


class Player extends Person {
  constructors (name , age , gender ,sportName)
  super(name , age , gender)
  this.sport = sportName;
}
play();

}


class Teacher extends Person {
  constructors (name , age , gender ,insititueName)
  super(name , age , gender)
  this.insititue =insititueName ;
}
teach();

}

class Artist extends Person {
  constructors (name , age , gender ,kind)
  super(name , age , gender)
  this.insititue = insititueName ;
}
createArt();

}

class Cricketer extends Player {
  constructors (name , age , gender ,sportName ,teamName)
  super(name , age , gender ,sportName)
  this.teamName = teamName ;
}

}

```
