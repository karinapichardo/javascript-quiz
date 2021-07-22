// a multidimensional array to hold quiz questions and answers
const quiz = [
  ['What does DOM stand for in programming?', 'Document Object Model'],
  ['What does NaN represent in javaScript?', 'Not a number'],
  ['To use the spread operator what three characters must be used?', '...'],
  ['What year was JavaScript created?', '1995']
];

// arrays that will get questions pushed into them
let wrongAnswers = [];
let rightAnswers = [];

// stores the number of questions answered correctly
let correctAnswers = 0;

/* loops through each question
      - Presents each question to the user
      - Compares the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
      - If the question was answered correctly, the question gets added to the empty rightAnswers array,
      if its wrong, the question gets added the empty wrongAnswers array.
*/

function quizTally(arr) {
    for (let i = 0; i < arr.length; i++) {
        let questions = arr[i][0];
        let answers = arr[i][1];
        let userResponses = prompt(questions).toLowerCase();

        if (userResponses === answers.toLowerCase()) {
            rightAnswers.push(questions);
            correctAnswers++;
        } else {
            wrongAnswers.push(questions);
        }
    }
    return correctAnswers;
}

// loops through an array and creates a list item out of each element inside the array

function createListItem(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

// displays the number of correct answers to the user and shows them the list of questions that were answered correct / incorrect

document.querySelector('main').innerHTML = `
<h2>You got <strong>${quizTally(quiz)}</strong> question(s) correct!</h2>

<ol>
<h3>These are the questions you got right:</h3>
${createListItem(rightAnswers)}
</ol>

<ol>
<h3>These are the questions you got wrong:</h3>
${createListItem(wrongAnswers)}
</ol>
`;
