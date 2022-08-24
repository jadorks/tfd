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


