import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodScore = () => {
    setGood(good + 1); 
  };

  const addNeutralScore = () => {
    setNeutral(neutral + 1);
  };

  const addBadScore = () => {
    setBad(bad + 1);
  };

  const getTotalReviews = () => {
    return good + neutral + bad;
  };

  return (
    <div>
      <h1>Give me feedback</h1>

      <div>
        <button onClick={addGoodScore}>good</button>
        <button onClick={addNeutralScore}>neutral</button>
        <button onClick={addBadScore}>bad</button>
      </div>

      <div>
        <p>Statistics</p>
        Good: {good} <br/>
        Neutral: {neutral} <br/>
        Bad: {bad} <br/>
        All: {getTotalReviews()} <br/>
        Average: {good - bad / getTotalReviews()} <br/>
        Positive: {good * 100 / getTotalReviews()}
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
