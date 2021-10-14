import React, { useState } from "react";
import ReactDOM from "react-dom";


const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad;
    if (all === 0) {
      return <div>No feedback given</div>;
  }

  const average = () => (good - bad) / all;
  const positive = () => (good * 100 / all);

  return (
    <table>
    <StatisticsLine text="Good" value={good} />
    <StatisticsLine text="Neutral:" value={neutral} />
    <StatisticsLine text="Bad:" value={bad} />
    <StatisticsLine text="All:" value={all} />
    <StatisticsLine text="Average:" value={average()} />
    <StatisticsLine text="Positive:" value={positive()} />
    </table>
  )
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const H1 = ({ text }) => (
<h1>{text}</h1>
);

const StatisticsLine = ({ text, value }) => {
  return (
  <table>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  </table>
  )
};

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

  return (
  <div>
    <H1 text={"Give me feedback"} />

      <Button onClick={addGoodScore} text={"good"} />
      <Button onClick={addNeutralScore} text={"neutral"} />
      <Button onClick={addBadScore} text={"bad"} />
   
    <H1 text={"Statistics"} />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
