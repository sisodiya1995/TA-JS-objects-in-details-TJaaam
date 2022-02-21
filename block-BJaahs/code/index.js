// without object

const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };

  let title = testData.title;
   let option = testData.options[0];
   let correctAnswerIndex = 1;

   
   function isAnswerCorrect (option) {
       if(option === "Amaan"){
          return getCorrectAnswer(option);
       } else {
           return false;
       }
   }

   function getCorrectAnswer (option){
    return option;
}   

// Using object
let quizApp = {
    title : testData.title,
    option :testData.options[0],
    correctAnswerIndex = 1,

     isAnswerCorrect (quizApp) {
        if(quizApp.option === "Amaan"){
           return getCorrectAnswer(quizApp.option);
        } else {
            return false;
        }
    },
         getCorrectAnswer (quizApp) {
            return quizApp.option;
        }   
    }

    // use A function to create object

    function createQuiz (testData){
         let user = {};
         user.title = testData.title;
         user.option =testData.option[0];
         user.index = testData.correctAnswerIndex;
         user.isAnswerCorrect = function(user){

            if(user.option === "Amaan"){
                return getCorrectAnswer(user.option);
             } else {
                 return false;
             }

         }

         user.getCorrectAnswer = function(user){
            return user.option; 
         }

    }

// Convert the function to use `this` keyword

function createQuiz (testData){
    let user = {};
    user.title = testData.title;
    user.option =testData.option[0];
    user.index = testData.correctAnswerIndex;
    user.isAnswerCorrect = function(user){

       if(this.option === "Amaan"){
           return getCorrectAnswer(this.option);
        } else {
            return false;
        }

    }

    user.getCorrectAnswer = function(user){
       return this.option; 
    }

}





