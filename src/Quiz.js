import React from "react";

var q1 = {
  text:
    " We'll start with what might be the most important Greek word in terms of philosophy: Lógos. This word appears in general Greek culture, but also in specific philosohical authors and systems, from Heraclitus to Plato. What does it mean?",
  choices: [
    "Knowledge, science, art, technique",
    "Symbol, icon, figure, image",
    "Word, rational thinking, speech, discourse, treaty",
    " Being, existence, reality, truth",
  ],
  answer: "Word, rational thinking, speech, discourse, treaty",
};
var q2 = {
  text: " Sophós is an adjective; who was a sophós in ancient Greece?",
  choices: ["A philosopher", "A politician", "A poet", "A wise man"],
  answer: "A wise man",
};
var q3 = {
  text: "And finally, do you know what philosophy means?",
  choices: [
    "The possession of wisdom",
    "The love of wisdom",
    "The search for wisdom",
    "The desire of wisdom",
  ],
  answer: "The love of Wisdom",
};
var questions = [q1, q2, q3];
//   q1.checkAnswer("Word, rational thinking, speech, discourse, treaty")
// );

// Start Quiz
//var quiz = new Quiz(questions);

const Quiz1 = () => {
  const [index, setIndex] = React.useState(0); // active question index
  const [rightAnswerCount, setRightAnswerCount] = React.useState(0);
  const activeQuestion = questions[index];

  const handleAnswer = (answerIndex) => {
    console.log("handle answer", answerIndex);
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-12 mt-5">
          <div className="card">
            <div className="card-header">Quiz</div>
            <div className="card-body">
              <h5 id="question" className="card-title">
                {activeQuestion.text}
              </h5>
              <hr />
              <div id="buttons">
                {activeQuestion.choices.map((c, i) => {
                  return (
                    <button
                      key={c}
                      className="btn btn-primary"
                      onClick={() => setIndex(i)}
                    >
                      <span>{c}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div
              id="progress"
              className="card-footer"
              onClick={setRightAnswerCount}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz1;
