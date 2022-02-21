
// Prototypal pattern of object creation
let bookMethods ={
     isAnswerCorrect: function(index) {
       return index === this.correctIndex;
     }
  ,
      getCorrectAnswer: function() {

       return this.option[this.correctIndex];
     }

}

function createBook(title , option , currentIndex) {

      let book = Object.create(bookMethods);
       book.title = title;
       book.option = option;
       book.correctIndex = currentIndex;
      return book;
}

//Pseudoclassical Pattern

function createBook(title , option , currentIndex) {

    let book = Object.create(createBook.prototype);
     book.title = title;
     book.option = option;
     book.correctIndex = currentIndex;
    return book;
}

createBook.prototype = {
    isAnswerCorrect: function(index) {
        return index === this.correctIndex;
      }
   ,
       getCorrectAnswer: function() {
 
        return this.option[this.correctIndex];
      }

} 

// Create using class
class book {


    constructor(title ,option , currentIndex){
       this.title = title;
       this.option = option ;
       this.correctIndex =currentIndex ;

    }

    isAnswerCorrect(index) {
        return index === this.correctIndex;
      }
   
       getCorrectAnswer() {
 
        return this.option[this.correctIndex];
      }
 
}