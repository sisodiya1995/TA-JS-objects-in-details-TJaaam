
class Question {

    constructor(title ,options ,currectAnswer) {

        this.title = title ;
        this.options = options;
        this.currectAnswer = currectAnswer;
    }

    isCurrect (Answer) {
      return this.options[this.currectAnswer] ===Answer;
    }

    getCorrectAnswer() {
       this.options[this.currectAnswer]
    }


}



let root1 =  document.querySelector(".question");
let next =document.querySelector(".next");
let prev =document.querySelector(".prev");
     
 

class Quiz {
    constructor (allQuestions = []){
      this.allQuestions =allQuestions;
      this.activeIndex = 0;
      this.score = 0;
     
    }
    nextQuestion (){
      this.activeIndex = this.activeIndex + 1;
      this.createUI();
    }

    prevQuestion(){
        this.activeIndex = this.activeIndex -1;
        this.createUI();
    }

    addQuestion (title ,options ,answerIndex){
      let question = new Question(title ,options ,answerIndex);
       this.allQuestions.push(question);

       this.createUI();
    }

    handleButton(){
        if(this.activeIndex === 0){
            prev.style.visibility ="hiddeen"
        }
        else if(this.activeIndex === (this.allQuestions.length-1)){
            next.style.visibility ="hiddeen" 
        } else {

            prev.style.visibility ="visible" ;
            next.style.visibility ="visible" ;
        }
        
    }
     createUI (){
          root1.innerHTML = "";
    //     let li = document.createElement('li');
    //     let Question = document.createElement('p');
    //       Question.innerText = this.title;
    //     let option1 = document.createElement("span");
    //     option1.innerText = this.options[0];
    //     let option2 = document.createElement("span");
    //     option2.innerText = this.options[1];
    //     let option3 = document.createElement("span");
    //     option3.innerText = this.options[2];
    //     let option4 = document.createElement("span");
    //     option3.innerText = this.options[3];
    //    li.append(Question ,option1 ,option2 ,option3 ,option4);
    //    return li;
    let activeques =this.allQuestions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset")
    let legend = document.createElement("legend");
    legend.innerText=activeques.title;
    let optionsElm=document.createElement('div');
    optionsElm.classList.add('options');
    let buttonWrapper=document.createElement('div');
    let button= document.createElement('button');
    button.innerText="submit"
    button.type="submit"
    buttonWrapper.append(button)

    activeques.options.forEach((option ,index) =>{
      let input = document.createElement("input");
      let div = document.createElement("div");
      input.id = `option - ${index}`
      input.type = "radio";
      input.name = "options"
      input.value =option;

     let label = document.createElement("label")
     label.for =`option -${index}`
     label.innerText = option;
form.addEventListener("submit" ,(event)=>{
    event.preventDefault();
if(input.checked){
    console.log(input.value);
    alert(activeques.isCurrect(input.value));
}

})

     div.append(input ,label);
     optionsElm.append(div);
    })

      this.handleButton()

      
    fieldset.append(legend,optionsElm ,buttonWrapper)
    form.append(fieldset);
     
    root1.append(form);
    }

}


//data 



let quiz = new Quiz();

quizCollection.forEach((ques) =>{
    quiz.addQuestion(ques.title ,ques.options ,ques.answerIndex);
    
});

quiz.createUI();
next.addEventListener("click" ,quiz.nextQuestion.bind(quiz));
prev.addEventListener("click" ,quiz.prevQuestion.bind(quiz));

