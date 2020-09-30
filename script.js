//this creates an array that stores all of the questions asked as well as the correct answers for each question
var button1=document.getElementById ("button1");
var button2=document.getElementById ("button2");
var button3=document.getElementById ("button3");
var button4=document.getElementById ("button4");
//var userName=document.querySelector ("#name");
var questionHeader=document.getElementById("questionHeader");
var timeleft = 5;
 //var user=userName.value.trim(),
var score;


var myQuestions = [
        {
          question: "Commonly used data types do not include",
          answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
          },
          correctAnswer: "3"
        },
        {
          question: "The condition in an if / else statement is enclosed with _____",
          answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
          },
          correctAnswer: "3"
        },
        {
          question: "Arrays in JavaScript can be used to store",
          answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "bookmarks",
            4: "all of the above"
          },
          correctAnswer: "4"
        },
    {
          question: "String values must be enclosed within ____ when being assigned to variables.",
          answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
          },
          correctAnswer: "3"
        },
    {
          question: "A very useful tool used during development and debugging for printing content to the debugger is:",
          answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console log"
          },
          correctAnswer: "4"
        }
      ];
      
      // function myFunction hides elements from view and displays only relevant information
      function myFunction() {
        document.getElementById("quiz").style.visibility = "hidden";
        document.getElementById("question").style.visibility = "visible";
        //for(var i =1; i< myQuestions.length; i++){
          //console.log(i);
        //}

    
        // this is the code for the timer
        
        document.getElementById("countDownTimer").textContent = timeleft;

        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countDownTimer").textContent = timeleft;
        //clear interval clears the timer out each second and replaces it with a new time
        if(timeleft <= 0){
        clearInterval(downloadTimer);
        }
        //when time left is equal to zero, questions are cleared and the user has the ability to submit their score
        if(timeleft ==0){
        clearInterval(downloadTimer);
        document.getElementById("question").style.visibility = "hidden";
        document.getElementById("card").style.visibility = "visible";
        }
        
        },1000);
        function submitScore(){
           localStorage.setItem("user", JSON.stringify(user));
           var lastUser = JSON.parse(localStorage.getItem("user"));
           console.log(lastUser);
          
          document.getElementById("card").style.visibility = "hidden";

        
        

        }
      }
        
      
       

