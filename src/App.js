import { useState } from "react";

const Cards = [
  {
    id: 3457,
    question: "What language is React Based on ?",
    answer: "javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntaxe we use to describe a ui in React ?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completly synchronised with state ?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="cards-container">
      {Cards.map((cardItem) => (
        <Card
          key={cardItem.id}
          question={cardItem.question}
          answer={cardItem.answer}
        />
      ))}
    </div>
  );
}

function Card({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleclick = () => {
    setShowAnswer(!showAnswer);
  };
  setTimeout(() => {
    setShowAnswer(false);
  }, 2000);

  return (
    <div
      className={`card ${showAnswer ? "show-answer" : ""}`}
      onClick={handleclick}
    >
      <p>{showAnswer ? answer : question}</p>
    </div>
  );
}
