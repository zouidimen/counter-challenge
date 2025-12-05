// import { useState } from "react";

// import { useState } from "react";

// const Cards = [
//   {
//     id: 3457,
//     question: "What language is React Based on ?",
//     answer: "javascript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of react apps ?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question:
//       "What's the name of the syntaxe we use to describe a ui in React ?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components ?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory ?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completly synchronised with state ?",
//     answer: "Controlled element",
//   },
// ];

// export default function App() {
//   return (
//     <div className="cards-container">
//       {Cards.map((cardItem) => (
//         <Card
//           key={cardItem.id}
//           question={cardItem.question}
//           answer={cardItem.answer}
//         />
//       ))}
//     </div>
//   );
// }

// function Card({ question, answer }) {
//   const [showAnswer, setShowAnswer] = useState(false);
//   const handleclick = () => {
//     setShowAnswer(!showAnswer);
//   };
//   setTimeout(() => {
//     setShowAnswer(false);
//   }, 2000);

//   return (
//     <div
//       className={`card ${showAnswer ? "show-answer" : ""}`}
//       onClick={handleclick}
//     >
//       <p>{showAnswer ? answer : question}</p>
//     </div>
//   );
// }

import { useState } from "react";

export default function App() {
  const [openItems, setOpenItems] = useState([]);
  const items = [
    {
      id: 1,
      number: "01",
      question: "Where are these chairs assembled ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam esse tempore quam officiis commodi? Doloribus repellendus deserunt nemo harum.",
    },
    {
      id: 2,
      number: "02",
      question: "How long do I have to return my chair ?",
      answer:
        "You have 30 days to return your chair as long as it is in perfect condition.",
    },
    {
      id: 3,
      number: "03",
      question: "Do you ship to countries outside the EU ?",
      answer: "Yes, we ship worldwide. Shipping costs depend on your location.",
    },
  ];

  function handleToggle(id) {
    setOpenItems((old) =>
      old.includes(id) ? old.filter((itemId) => itemId !== id) : [...old, id]
    );
  }
  return (
    <div>
      {items.map((item) => (
        <Accordian
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
function Accordian({ item, isOpen, onToggle }) {
  return (
    <div
      className="accordianItems"
      onClick={onToggle}
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "20px",
        cursor: "pointer",
        transition: "0.3s",
        backgroundColor: "white",
        boxShadow: isOpen
          ? "0px 10px inset green"
          : "0px 4px 10px rgba(0, 0, 0, 0.8)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "10px",
          color: isOpen ? "green" : "",
        }}
      >
        <h3>
          <strong>{item.number}</strong>
        </h3>
        <p>
          <strong>{item.question}</strong>
        </p>
        <span>
          <strong>{isOpen ? "-" : "+"}</strong>
        </span>
      </div>
      {isOpen && <p>{item.answer}</p>}
    </div>
  );
}

