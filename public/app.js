var quizQuestions = [
    {
      question: "Q:01 What is the capital of Pakistan?",
      option1: "Lahore",
      option2: "Islamabad",
      option3: "Karachi",
      option4: "Peshawar",
      correctAnswer: "Islamabad"
    },
    {
      question: " Q:02 Which city is known as the City of Gardens in Pakistan?",
      option1: "Karachi",
      option2: "Faisalabad",
      option3: "Lahore", 
      option4: "Islamabad",
      correctAnswer: "Lahore"
    },
    {
      question: "Q:03 Which river is often referred to as the lifeline of Pakistan?",
      option1: "Sutlej",
      option2: "Chenab",
      option3: "Ravi",
      option4: "Indus",
      correctAnswer: "Indus"
    },
    {
      question: "Q:04 What is the highest mountain in Pakistan?",
      option1: "Nanga Parbat",
      option2: "K2",
      option3: "Gasherbrum I",
      option4: "Tirich Mir",
      correctAnswer: "K2"
    },
    {
      question: "Q:05 Who is the founder of Pakistan?",
      option1: "Allama Iqbal",
      option2: "Liaquat Ali Khan",
      option3: "Muhammad Ali Jinnah",
      option4: "Sir Syed Ahmad Khan",
      correctAnswer: "Muhammad Ali Jinnah"
    },
    {
      question: "Q:06 Which is the national bird of Pakistan?",
      option1:"Chukar",
      option2: "Markhor",
      option3: "Peacock",
      option4: "Parrot",
      correctAnswer: "Chukar"
    },
    {
      question: "Q:07 In which year did Pakistan become an independent country?",
      option1: "1947",
      option2: "1956",
      option3: "1971", 
      option4: "1990",
      correctAnswer: "1947"
    },
    {
      question: "Q:08 What is the national flower of Pakistan?",
      option1: "Rose",
      option2: "Jasmine",
      option3: "Tulip", 
      option4:"Lily",
      correctAnswer: "Jasmine"
    },
    {
      question: "Q:09 Which city is known as the City of Lights in Pakistan?",
      option1:"Faisalabad",
      option2: "Karachi", 
      option3:"Islamabad",
      option4: "Lahore",
      correctAnswer: "Karachi"
    },
    {
      question: "Q:10 Which is the national game of Pakistan?",
      option1:"Hockey",
      option2: "Cricket",
      option3: "Polo",
      option4: "Squash",
      correctAnswer: "Hockey"
    }
  ];

  
  var displayQues = document.getElementById("displayQues");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");
  var option4 = document.getElementById("opt4");
  var button = document.getElementById("btn");
  var timer = document.getElementById("timer");

  var index = 0;
  var min = 1;
  var sec = 59;
var score = 0;
var countdown;

function startTimer() {
  min = 1;
  sec = 59;
  clearInterval(countdown);
  countdown = setInterval(function () {
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
    }
    if (min < 0) {
      sec = 59;
      min = 1;
      nextQuestion();
    }
  }, 1000);
}


  function nextQuestion(){
    var getOptions = document.getElementsByName("options");

    for(var i = 0;i<getOptions.length;i++)
    {
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
        //     var selectedQues = quizQuestions[index - 1]["question"];
            var selectedAns = quizQuestions[index-1][`option${selectedValue}`]
            var correctAns = quizQuestions[index - 1]["correctAnswer"]
            if(selectedAns == correctAns){
                score++;
                
            }
        }
        getOptions[i].checked = false;
    }
    button.disabled = true;

    if(index >quizQuestions.length-1 ){
  var percentage = ((score / quizQuestions.length) * 100 ).toFixed(2);
  
      
      if(percentage >= 100 || percentage >= 90){

        Swal.fire(
            'Very Good!',
            `Your percentage is ${percentage}`,
            'success'
          )
      }
      else if(percentage >= 80 || percentage >= 70){
        Swal.fire(
          'Good!',
          `Your percentage is ${percentage}`,
          'success'
        )
      }

      else if(percentage >= 60 || percentage >= 50){
        Swal.fire(
          'Umm! Do it better',
          `Your percentage is ${percentage}`,
          'success'
        )
      }
      else if(percentage >= 40){
        Swal.fire(
          'Better Luck Next Time!',
          `Your percentage is ${percentage}`,
          'warning'
        )
      }
      else if(percentage < 40){
        Swal.fire(
          'Fail!',
          `Your percentage is ${percentage}`,
          'error'
        )
      }
    }
    else{    
        displayQues.innerHTML =  quizQuestions[index].question;
        option1.innerHTML = quizQuestions[index].option1;
        option2.innerHTML = quizQuestions[index].option2;
        option3.innerHTML = quizQuestions[index].option3;
        option4.innerHTML = quizQuestions[index].option4;
        startTimer();
        index++;
    }


  }

  function clicked(){
    button.disabled = false;
  }