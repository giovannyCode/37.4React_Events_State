import React, { useState } from "react";
import "./EightBall.css";

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const EightBall = () => {
  const [color, setColor] = useState("Black");
  const [text, setText] = useState("Think of a Question");

  function getRandom() {
    const max = answers.length;
    console.log(max);
    return Math.floor(Math.random() * max);
  }

  function getColorOrText(position, type) {
    if (type === "color") {
      return answers[position].color;
    } else {
      return answers[position].msg;
    }
  }

  function handleClick() {
    const randomAnswerNum = getRandom();
    setColor(getColorOrText(randomAnswerNum, "color"));
    setText(getColorOrText(randomAnswerNum, "text"));
  }

  function resetBall() {
    setColor("Black");
    setText("Think of a Question");
  }
  return (
    <>
      <div
        onClick={handleClick}
        className="circle"
        style={{ backgroundColor: color }}
      >
        {text}
      </div>
      <br></br>
      <button className="reset-btn" onClick={resetBall}>
        Reset
      </button>
    </>
  );
};

export default EightBall;
