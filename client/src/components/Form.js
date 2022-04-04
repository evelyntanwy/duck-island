import React from "react";

function Form({ inputValue, setInputValue, handleSubmit }) {
  return (
    <div>
      <div className="form">
        <label>Ice-cream name :</label>
        <input
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
          className="input"
          placeholder="Whats the flavour"
          type="text"
        />
        <label>Score :</label>

        <input type="text" name="score" />
        <button onClick={handleSubmit} className="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
