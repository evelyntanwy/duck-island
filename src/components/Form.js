import React from "react";

function Form({
  inputValue,
  setInputValue,
  inputScore,
  setInputScore,
  handleSubmit,
}) {
  return (
    <div>
      <div className="form">
        <div className="input">
          <label>Ice-cream name :</label>
          <input
            value={inputValue}
            onChange={(evt) => setInputValue(evt.target.value)}
            className="input"
            placeholder="Whats the flavour"
            type="text"
          />
        </div>
        <div>
          <label>Score :</label>
          <input
            value={inputScore}
            onChange={(evt) => setInputScore(evt.target.value)}
            className="input"
            placeholder="Rate 1 - 5"
            type="number"
          />
        </div>
        <button onClick={handleSubmit} className="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
