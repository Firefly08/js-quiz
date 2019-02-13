function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which event occurs when the user clicks on an HTML element?", ["onchange", "onmouseover", "onclick", "onmouseclick"], "onclick"),
    new Question("How do you write 'Hello World' in an alert box?", ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"], "alert('Hello World');"),
    new Question("How to write an IF statement in JavaScript?", ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"], "if (i == 5)"),
    new Question("How does a FOR loop start?", ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"], "for (i = 0; i <= 5; i++)"),
    new Question("How do you round the number 7.25, to the nearest integer?", ["round(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"], "Math.round(7.25)"),
    new Question("Which operator is used to assign a value to a variable?", ["x", "=", "-", "*"], "=")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





