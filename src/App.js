import React, { useState } from "react";
import Form from "./components/Form";
import Flavours from "./components/Flavours";

import "./App.css";
import firebase from "firebase/compat/app";

const initialData = [
  {
    _id: 0,
    text: "Butterscotch pecan",
    et_score: 5,
    jy_score: 4.5,
    score: 5,
  },
  {
    _id: 1,
    text: "Hotcross bun",
    et_score: 4.5,
    jy_score: 3.5,
    score: 5,
  },
  {
    _id: 2,
    text: "Mapel honeycomb smoked almond",
    et_score: 4,
    jy_score: 4.5,
    score: 5,
  },
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputScore, setInputScore] = useState("");
  const [flavours, setFlavours] = useState(initialData);

  const handleSubmit = () => {
    if (inputValue === "") return;
    const newFlavour = { _id: Date.now(), text: inputValue, score: inputScore };
    setFlavours([...flavours, newFlavour]);
    setInputValue("");
  };

  const handleDeleteFlavours = (id) => {
    const newFlavours = flavours.filter((flavour) => flavour._id !== id);
    setFlavours(newFlavours);
  };

  return (
    <div className="App">
      <div className="flavourslist">
        <h1>Duck Island Ice-Cream</h1>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputScore={inputScore}
          setInputScore={setInputScore}
          handleSubmit={handleSubmit}
        />
        {flavours.map((flavour, index) => {
          <Flavours
            flavour={flavour}
            index={index}
            handleDeleteFlavours={handleDeleteFlavours}
            key={flavour._id}
          />;
        })}
       
          <table>
            {flavours.map((item) => (
              <tr key={item}>
                <td>{item.text} </td>
                <td> {item.score}</td>
              </tr>
            ))}
          </table>
        
      </div>
    </div>
  );
}

export default App;
