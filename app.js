$(document).ready(function() {
    var correctAnswersTotal = 0;
    var incorrectAnswersTotal = 0;
    hideQuestions();
    var correctAnswersParent = {
        answer1: "True", // Lickitonuges tounge is twice the length of its body
        answer2: "True", // Ninetales only evolves from Volpix by use of fire stone
        answer3: "False", // hitmonlee is not the punching demon
        answer4: "True", // magicarp only knows splash
        answer5: "True", // caterpie is the worlds smallest pokemon... What about togepie?
        answer6: "False" // kofffing was not found in a bathhouse

    }

    // Answers first question.
    $(".submitAnswerButton1").click(function(e) {
        //prevents form from submitting.
        e.preventDefault();
        userInput1 = $('input[class=input1]:checked').val();

        // grabs answer from model and store in varible.
        var correctAnswerVar = correctAnswersParent.answer1;

        // offer feed back on answer. Increments correct or false by 1.
        giveFeedBack(userInput1, correctAnswerVar);
        $(".questionSet1").hide();
        $(".nextQuestion").show();
    });

    $(".submitAnswerButton2").click(function(e) {
        //prevents form from submitting.
        e.preventDefault();
        userInput2 = $('input[class=input2]:checked').val();

        // grabs answer from object and stores in varible.
        var correctAnswerVar = correctAnswersParent.answer2;

        // offer feed back on answer. Increments correct or false by 1.
        giveFeedBack(userInput2, correctAnswerVar);

        $(".nextQuestion").show();
    });


    $(".nextQuestion").click(function(e){
      //prevents form from submitting.
      e.preventDefault();
      if (userInput1 === "True" || "False" ){
        questionSet2();
      }
      else if (userInput2 === "True" || "False"){
        questionSet3();
      }
      else if (userInput3 === "True" || "False"){
        questionSet4();
      }
      else if (userInput4 === "True" || "False") {
        questionSet5();
      }
      else if (userInput5 === "True" || "False"){
        questionSet6();
      }
    })

    function giveFeedBack(userInput, correctAnswerFromParentModel) {
        if (userInput == correctAnswerFromParentModel) {
            $(".usersFeedback").html("You got it correct!");
            correctAnswersTotal ++;
            $(".usersCurrentScoreCorrect").html("You have " + correctAnswersTotal + "out of 6 correct");

        }
        else {
          $(".usersFeedback").html("Wrong!");
          incorrectAnswersTotal ++;
          $(".usersCurrentScore").html("You have " + incorrectAnswersTotal + "out of 6 correct");

        }
    }

    userInput1 = $('input[class=input1]:checked').val();
    userInput2 = $('input[class=input2]:checked').val();
    userInput3 = $('input[class=input3]:checked').val();
    userInput4 = $('input[class=input4]:checked').val();
    userInput5 = $('input[class=input5]:checked').val();
    userInput6 = $('input[class=input6]:checked').val();








    $(".startButton").on('click', function(e) {
        e.preventDefault();
        $(".mainArea1").hide();
        $("header").hide();
        questionSet1();
    })


    //  $(".h2").html(user.name)

    // Start up hide questions
    function hideQuestions() {
        $(".pokedex").hide();
        $(".questionSet1").hide();
        $(".questionSet2").hide();
        $(".questionSet3").hide();
        $(".questionSet4").hide();
        $(".questionSet5").hide();
        $(".questionSet6").hide();
        $(".nextQuestion").hide();
    }

    function questionSet1() {
        $(".pokedex").show();
        $(".questionSet1").show();
        $(".questionSet2").hide();
        $(".questionSet3").hide();
        $(".questionSet4").hide();
        $(".questionSet5").hide();
        $(".questionSet6").hide();
    }

    function questionSet2() {
        $(".questionSet1").hide();
        $(".questionSet2").show();
        $(".questionSet3").hide();
        $(".questionSet4").hide();
        $(".questionSet5").hide();
        $(".questionSet6").hide();
        $(".usersFeedback").hide();
    }

    function questionSet3() {
        $(".questionSet1").hide();
        $(".questionSet2").hide();
        $(".questionSet3").show();
        $(".questionSet4").hide();
        $(".questionSet5").hide();
        $(".questionSet6").hide();
        $(".usersFeedback").hide();
    }

    function questionSet4() {
        $(".questionSet1").hide();
        $(".questionSet2").hide();
        $(".questionSet3").hide();
        $(".questionSet4").show();
        $(".questionSet5").hide();
        $(".questionSet6").hide();
        $(".usersFeedback").hide();
    }

    function questionSet5() {
        $(".questionSet1").hide();
        $(".questionSet2").hide();
        $(".questionSet3").hide();
        $(".questionSet4").hide();
        $(".questionSet5").show();
        $(".questionSet6").hide();
        $(".usersFeedback").hide();
    }

    function questionSet6() {
        $(".questionSet1").hide();
        $(".questionSet2").hide();
        $(".questionSet3").hide();
        $(".questionSet4").hide();
        $(".questionSet5").hide();
        $(".questionSet6").show();
        $(".usersFeedback").hide();
    }



})
