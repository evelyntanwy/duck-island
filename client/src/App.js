import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="form">
        <label>Ice-cream name :</label>
        <input type="text" name="iceCreamName" />
        <label>Score :</label>

        <input type="text" name="score" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
