

var myQuestions = [
  {
      questionTitle: "Commonly used data types DO NOT include:",
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      correct: "C"
  },
  {
      questionTitle: "The condition in an if / else statement is enclosed within ____.",
      choice1: "quotes",
      choice2: "curly brackets",
      choice3: "parentheses",
      choice4: "square brackets",
      correct: "C"
  },
  {
      questionTitle: "Arrays in Javascript can be used to store ____.",
      choice1: "number and strings",
      choice2: "other arrays",
      choice3: "booleans",
      choice4: "all of the above",
      correct: "D"
  },
  {
      questionTitle: "String values must be enclosed within ____ when being assigned to variables.",
      choice1: "commas",
      choice2: "curly brackets",
      choice3: "quotes",
      choice4: "parenthese",
      correct: "C"
  },
  {
      questionTitle: "A very useful tool in development and debugging for printing content to the debugger",
      choice1: "JavaScript",
      choice2: "terminal/bash",
      choice3: "for loops",
      choice4: "console.log",
      correct: "D"
  }
]

var button1=document.getElementById ("A");
var button2=document.getElementById ("B");
var button3=document.getElementById("C");
var button4=document.getElementById ("D");
var choicesList=document.getElementById("choices");
var questionHeader=document.getElementById("questionHeader");
var lastQuestionIndex = myQuestions.length - 1;
var correctOrIncorrect=document.getElementById("correctOrIncorrect")
var scoreCard=document.getElementById("scoreCard");

var timeleft = 60;

var currentQuestionIndex = 0;

 
var score=0;
var initialsPlusScore =[];



    
      
      // function myFunction hides elements from view and displays only relevant information
      function myFunction() {
        document.getElementById("quiz").style.visibility = "hidden";
        document.getElementById("choices").style.visibility = "visible";
        
        startCounter();
        showQuestion();

      }
      
      function showQuestion() {
        
          questionHeader.textContent = myQuestions[currentQuestionIndex].questionTitle;
          button1.textContent = myQuestions[currentQuestionIndex].choice1;
          button2.textContent = myQuestions[currentQuestionIndex].choice2;
          button3.textContent = myQuestions[currentQuestionIndex].choice3;
          button4.textContent = myQuestions[currentQuestionIndex].choice4;
          
        
      }
      function checkAnswer(answer){
        if( answer === myQuestions[currentQuestionIndex].correct){
    
            score += 10;
            correctOrIncorrect.textContent="correct!"
            correctOrIncorrect.style.visibility= "visible"

        }else{
    
            timeleft -= 0;
             correctOrIncorrect.textContent="incorrect!"
             correctOrIncorrect.style.visibility= "visible"

        }
        count = 0;
        if(currentQuestionIndex < lastQuestionIndex){
            currentQuestionIndex++;
            showQuestion();
        }else{
    
            clearInterval(timeleft);
            endQuiz();
            correctOrIncorrect.style.visibility= "hidden"
        }
    }
      


    
        // this is the code for the timer
        
        document.getElementById("countDownTimer").textContent = timeleft;
        function startCounter(){
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countDownTimer").textContent = timeleft;
        //clear interval clears the timer out each second and replaces it with a new time
        if(timeleft < 0){
        clearInterval(downloadTimer);
        }
        //when time left is equal to zero, questions are cleared and the user has the ability to submit their score
        if(timeleft ==0){
        clearInterval(downloadTimer);
        document.getElementById("choices").style.visibility = "hidden";
        document.getElementById("card").style.visibility = "visible";
        document.getElementById("yourFinalScore").textContent = score;
        }
      
        
        },1000);
        
      }
        function endQuiz(){
          document.getElementById("choices").style.visibility = "hidden";
          document.getElementById("card").style.visibility = "visible";
          document.getElementById("yourFinalScore").textContent = score;
          correctOrIncorrect.style.visibility= "hidden"
          timeleft = "1";

        }
        function submitScore(){
          var initials =localStorage.getItem("yourInitials");
          var score = localStorage.getItem("score");
          initialsPlusScore = initials + "" + score;
          if(initials === null){
              alert="please enter initials";
          }
          else{
            scoreCard.textContent=initialsPlusScore;
          }

        }


        
        

        
        
      
       
      
