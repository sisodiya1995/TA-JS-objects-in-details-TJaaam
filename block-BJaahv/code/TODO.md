# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
```js
function userDetail (name , id , numberOfProject){
     let userData = {};
     userData.name = name;
     userData.id  = id;
     userData.projects = numberOfProject ;

     return userData;
}
  function getProject () {
      return userData.projects

    }

   function changeName (newName) {
     return userData.name = newName;
   }

   function  incrementProject() {
    return  ++userData.projects

   }

 function  decrementProject(){
    return --userData.projects
  }


return userData;
}



```
- [ ] Using Object.create (prototypal pattern)

```js

let methodObj = {
    getProject: function () {
      return this.projects

    }
,
   changeName: function (newName) {
     return this.name = newName;
   }
,
   incrementProject: function () {
    return  ++this.projects

   }
,
  decrementProject: function () {
    return --this.projects
  }
}

function userDetail (name , id , numberOfProject){
     let userData = Object.create(methodObj);
     userData.name = name;
     userData.id  = id;
     userData.projects = numberOfProject ;

return userData;
}

```


- [ ] Using Pseudoclassical 
```js


function userDetail (name , id , numberOfProject){
     let userData = Object.create(userDetail.prototype)
     userData.name = name;
     userData.id  = id;
     userData.projects = numberOfProject ;

    return userData;

}

userDetail.prototype = {

 getProject: function () {
      return this.projects

    }
,
   changeName: function (newName) {
     return this.name = newName;
   }
,
   incrementProject: function () {
    return  ++this.projects

   }
,
  decrementProject: function () {
    return --this.projects
  }

 
}




```



- [ ] Using Class

```js
class userDetail {
   constructor(name , id , numberOfProject){
     this.name = name;
     this.id = id;
     this.projects = numberOfProject;

   }

    getProject () {
      return this.projects

    }

   changeName (newName) {
     return this.name = newName;
   }

   incrementProject() {
    return  ++this.projects

   }

  decrementProject(){
    return --this.projects
  }

}

let newUser1 =  new("Akash" , 5 , 3);

```

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
