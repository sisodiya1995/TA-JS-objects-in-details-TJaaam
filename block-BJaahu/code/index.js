
// Prototypal pattern of object creation
let bookMethods ={
     isAnswerCorrect(index) {
       return index === correctIndex;
     }
  ,
      getCorrectAnswer() {

       return option[correctIndex];
     }

}

function createBook(title , option , index) {

      let book = Object.create(bookMethods);
       book.title = title;
       book.option = option;
       correctIndex = 1;
      return book;
}

//Pseudoclassical Pattern

function createBook(title , option , index) {

    let book = Object.create(createBook.prototype);
     book.title = title;
     book.option = option;
     correctIndex = 1;
    return book;
}

createBook.prototype = {
    isAnswerCorrect: function(index) {
        return index === correctIndex;
      }
   ,
       getCorrectAnswer: function() {
 
        return option[correctIndex];
      }

} 

// Create using class
class book {


    constructor(title ,option , index){
       this.title = title;
       this.option = option ;
       this.correctIndex =index ;

    }

    isAnswerCorrect(index) {
        return index === this.correctIndex;
      }
   
       getCorrectAnswer() {
 
        return this.option[this.correctIndex];
      }
 
}