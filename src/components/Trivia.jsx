import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
const Trivia = ({ data, questionNumber, setStop, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("active");
    delay(3000, () => setClassName(ans.correct ? "correct" : "wrong"));
    delay(6000, () => {
      if (ans.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
       })
      }
    });
  };
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  return (
    <div className="trivia">
      {questionNumber === 15 ? (
        <div>You will be a millionare</div>
      ) : (
        <>
          <div className="question">{question?.question}</div>
          <div className="answers">
            {question?.answers.map((a) => (
              <div
                className={`answer ${selectedAnswer === a && className}`}
                onClick={() => handleClick(a)}>
                {a.text}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Trivia;
