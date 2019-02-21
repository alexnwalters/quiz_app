// store question data
const STORE = [
  { question: 'Which state is home to the easternmost capital city in the US?',
    options: ['Maine', 'Florida', 'North Carolina', 'Massachusetts'],
    answer: 'Maine',
    correct: ['images/yes_giphy.gif', 'answer yes'],
    wrong: ['images/no_giphy.gif', 'answer no'],
    feedback: 'Augusta, the capital of Maine is the easternmost state capital.'
  },
  { question: 'Which state waves the flag shown below?<br><img src="images/Ohio.jpg" alt="State flag of Ohio">',
    options: ['Oregon', 'Ohio', 'Wisconsin', 'Oklahoma'],
    answer: 'Ohio',
    correct: ['images/thats_it_giphy.gif', 'right answer'],
    wrong: ['images/wrong_giphy.gif', 'wrong answer'],
    feedback: 'Known as a Brugee, Ohio hosts the only non-rectangular flag in the US.'
  },
  { question: 'Along with the state of Rhode Island, this state is the only other to never ratify the 18th Amendment, known as Prohibition.',
    options: ['West Virginia', 'Kentucky', 'Connecticut', 'New Jersey'],
    answer: 'Connecticut',
    correct: ['images/say_what_giphy.gif', 'answer correct'],
    wrong: ['images/head_shake_giphy.gif', 'answer incorrect'],
    feedback: 'Connecticut, along with Rhode Island never officially signed Prohibition into law.'
  },
  { question: 'Featured on the back of its state flag, the beaver is the state animal of which state?<br><img src="images/Oregon.png" alt="State flag of Oregon">',
    options: ['Washington', 'North Dakota', 'Oregon', 'Idaho'],
    answer: 'Oregon',
    correct: ['images/yes_giphy.gif', 'answer yes'],
    wrong: ['images/no_giphy.gif', 'answer no'],
    feedback: 'The state flag of Oregon is the only state flag with different symbols on each side.',
  },
  { question: 'The city of Hershey is known as the Chocolate Capital of the US, and is found in which state?',
    options: ['Indiana', 'Pennsylvania', 'Vermont', 'Georgia'],
    answer: 'Pennsylvania',
    correct: ['images/thats_it_giphy.gif', 'correct answer'],
    wrong: ['images/wrong_giphy.gif', 'wrong answer'],
    feedback: 'Although Pennsylvania\'s state capital is Harrisburg, Hershey isn\'t bitter, wink.'
  },
  { question: 'Which state is the smallest state in the U.S.?',
    options: ['New Hampshire', 'Delaware', 'Hawaii', 'Rhode Island'],
    answer: 'Rhode Island',
    correct: ['images/say_what_giphy.gif', 'answer correct'],
    wrong: ['images/head_shake_giphy.gif', 'answer incorrect'],
    feedback: 'At a size of 1,212 square miles, Rhode Island is the smallest US state.'
  },
  { question: 'Which state has the smallest population in the U.S.?',
    options: ['New Mexico', 'North Dakota', 'Vermont', 'Wyoming'],
    answer: 'Wyoming',
    correct: ['images/yes_giphy.gif', 'answer yes'],
    wrong: ['images/no_giphy.gif', 'answer no'],
    feedback: 'Even though Wyoming is ten times the size of Vermont, its population is about 50,000 less.'
  },
  { question: 'Which state is home to the southernmost capital city in the U.S.?',
    options: ['Hawaii', 'Louisiana', 'Texas', 'Florida'],
    answer: 'Hawaii',
    correct: ['images/thats_it_giphy.gif', 'correct answer'],
    wrong: ['images/wrong_giphy.gif', 'wrong answer'],
    feedback: 'Hawaii\'s capital city of Honolulu, is not only the southernmost capital but also the westernmost.'
  },
  { question: 'Which state features the highest mountain peak in the U.S.?',
    options: ['Colorado', 'Washington', 'Alaska', 'Utah'],
    answer: 'Alaska',
    correct: ['images/say_what_giphy.gif', 'answer correct'],
    wrong: ['images/head_shake_giphy.gif', 'answer incorrect'],
    feedback: 'Denali, also know as Mount McKinley, found in the Alaska Range is the highest peak in the U.S.'
  },
  { question: 'Which state\'s official state sport is Jousting?',
    options: ['Mississippi', 'Maryland', 'South Carolina', 'Virginia'],
    answer: 'Maryland',
    correct: ['images/yes_giphy.gif', 'answer yes'],
    wrong: ['images/no_giphy.gif', 'answer no'],
    feedback: 'Maryland\'s state sport is jousting, it\'s fitting its state flag is a coat of arms.'
  }    
];

//create variable to track round
let round = 0;

//increments round
function addRound() {
  round++;
}

//create varible to keep score
let score = 0;

//increments score
function addScore() {
  score++;
}

//starts game upon click of start button
function handleStartShow() {
  $('div').on('click', '.js-start-button', function(event) {
    event.preventDefault();
    changeRounds();
    addQuizForm();
    changeToSubmitButton();
    addRound();
    updateDisplay();
  });
}

//switches between img and quiz form
function changeRounds() {
  $('main').find('.js-quiz-tv').toggleClass('hide');
  $('main').find('.js-quiz-form').toggleClass('hide');
}

//delete existing button, create a submit button
function changeToSubmitButton() {
  $('button').remove();
  $('fieldset').append(`<div class="submit-button"><button type="submit" class="game-button ultra">Submit Answer</button></div>`);
}

//handles click of submit button
function handleSubmitButton() {
  $('form').on('submit', function(event) {
  event.preventDefault();
  //determine if next button or results button
  if (round < STORE.length) {
    changeToNextButton();
    changeRounds();
    checkAnswer();
  }
  else {
    changeToResultsButton();
    changeRounds();
    checkAnswer();
  };
  });
}

//updates quiz display numbers
function updateDisplay() {
  $('ul').find('.js-round').text('Round: ' + round);
  $('ul').find('.js-score').text('Score: ' + score);
}

//adds quiz form containing question
function addQuizForm() {
  $('main').find('fieldset').html(loadQuizQuestion)}

//loads the next question
function loadQuizQuestion() {
  return `
  <div class="quiz-form">
    <legend class="question">${STORE[round].question}</legend>
            <label for="${STORE[round].options[0]}" class="state-container">
              <input type="radio" id="${STORE[round].options[0]}" name="state" value="${STORE[round].options[0]}" required>${STORE[round].options[0]}<span class="circle"></span>
            </label>
            <br>
            <label for="${STORE[round].options[1]}" class="state-container">
              <input type="radio" id="${STORE[round].options[1]}" name="state" value="${STORE[round].options[1]}" required>${STORE[round].options[1]}<span class="circle"></span>
            </label>
            <br>
            <label for="${STORE[round].options[2]}" class="state-container">
              <input type="radio" id="${STORE[round].options[2]}" name="state" value="${STORE[round].options[2]}" required>${STORE[round].options[2]}<span class="circle"></span>
            </label>
            <br>
            <label for="${STORE[round].options[3]}" class="state-container">
              <input type="radio" id="${STORE[round].options[3]}" name="state" value="${STORE[round].options[3]}" required>${STORE[round].options[3]}<span class="circle"></span>
            </label>
  </div>`;
}

//delete existing button, create a Next Button
function changeToNextButton() {
  $('button').remove();
  $('#js-game-button').append(`<button type="submit" class="game-button ultra js-next-button">Next Round</button>`);
}

//checks user input vs correct answer
function checkAnswer() {
    let usersChoice = $('input:checked').val();
    let correctAnswer = `${STORE[round - 1].answer}`;
    if (usersChoice === correctAnswer) {
      addScore();
      updateDisplay();
      correctAnswerFeedback();
    }
    else {
      wrongAnswerFeedback();
    }
}

//give correct answer feedback
function correctAnswerFeedback() {
  $('.js-quiz-tv').html(
    `<div><p class="ultra">You Are Correct!</p></div>
    <div><img src=${STORE[round - 1].correct[0]} alt=${STORE[round - 1].correct[1]}></div>
    <div><p class="slabo">${STORE[round - 1].feedback}</p></div>`
  );
}

//give wrong answer feedback
function wrongAnswerFeedback() {
  $('.js-quiz-tv').html(
    `<div><p class="ultra">That is Wrong.</p></div>
    <div><img src=${STORE[round - 1].wrong[0]} alt=${STORE[round - 1].wrong[1]}></div>
    <div><p class="slabo">${STORE[round - 1].feedback}</p></div>`
  );
}

//handles click of next button, loads next question 
function handleNextButton() {
  $('div').on('click', '.js-next-button', function(event) {
    event.preventDefault();
    changeRounds();
    addQuizForm();
    changeToSubmitButton();
    addRound();
    updateDisplay();
  });  
}

//delete existing button, create a Results button
function changeToResultsButton() {
  $('button').remove();
  $('#js-game-button').append(`<button type="submit" class="game-button ultra js-results-button">Show Quiz Results</button>`);
}

//handles click of Results Button, changes to final results page
function handleResultsButton() {
  $('div').on('click', '.js-results-button', function(event) {
    event.preventDefault();
    changeToRestartButton();
    loadQuizResults();
    updateDisplay();
  });
}

//delete existing button, create a Restart button
function changeToRestartButton() {
  $('button').remove();
  $('#js-game-button').append(`<button type="submit" class="game-button ultra js-restart-button">Restart the Show</button>`);
}

//handles click of restart, reloads page
function handleRestartButton() {
  $('div').on('click', '.js-restart-button', function(event) {
    event.preventDefault();
    location.reload();
  });
}

//loads quiz results based on score
function loadQuizResults() {
  if (score >= 8) {
  $('.js-quiz-tv').html(
    `<div><p class="ultra">You Win!</p></div>
    <div><img src="images/win_giphy.gif" alt="High Score Reaction"></div>
    <div><p class="slabo">You are taking home today's Grand Prize...A chance to play agian.</p></div>`
  );
  }
  else if (score >= 5 && score < 8) {
     $('.js-quiz-tv').html(
    `<div><p class="ultra">Good Job! You got most of them Correct.</p></div>
    <div><img src="images/good_giphy.gif" alt="Middle Score Reaction"></div>
    <div><p class="slabo">You can do better, give it another shot to get a higher score.</p></div>`
  );
  }
  else {
     $('.js-quiz-tv').html(
    `<div><p class="ultra">Oh No! You missed a lot.</p></div>
    <div><img src="images/bad_giphy.gif" alt="Low Score Reaction"></div>
    <div><p class="slabo">That wasn't good, we should just start over.</p></div>`
  );
  }
}

//calls button functions that will later be run on user click
function runQuizApp() {
  handleStartShow();
  handleSubmitButton();
  handleNextButton();
  handleResultsButton();
  handleRestartButton();
}

$(runQuizApp);