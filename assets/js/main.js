async function readQuestions() {
  var questions = {};
  await fetch("/assets/data/questions.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      questions = data;
    });
  return questions;
}

function getQuestion(questions, card) {
  const categoryQuestions = questions[card];
  if(categoryQuestions){
    return categoryQuestions[
        Math.floor(Math.random() * categoryQuestions.length)
      ];
  }
  return "Something went wrong! Please refresh the page";
}

async function runGame(card) {
  const questions = await readQuestions();
  const selectedQuestion = getQuestion(questions, card);
  document.getElementById('question_view').innerHTML = selectedQuestion;
}
