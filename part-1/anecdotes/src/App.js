import React, { useState } from 'react';

const H1 = ({ text }) => (
  <h1>{text}</h1>
);

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const Anecdote = ({ anecdote, value }) => (
  <div>
  <p> {anecdote} </p>
  <p> {value} </p>
  </div>
);

const Voting = ({ votes, value }) => (
 <div>
  <p> has {votes} votes </p>
  <p> {value} </p>
 </div>
);

const App = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const aNewAnecdote = () => {
    const newQuoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelectedIndex(newQuoteIndex);
  };

  
 const votesToNewAnecdotes = () => {
   const copy = { ...votes }
   copy[selectedIndex] += 1
   setVotes(copy)
 };

 const highestVotes = () => Math.max(...votes);
 const biggestAnecdoteVoted = () => anecdotes.indexOf(highestVotes);

  return (
  <div>
    <H1 text={"Anecdotes of the day"} />
    <Anecdote anecdote={anecdotes[selectedIndex]} />
    <Button onClick={aNewAnecdote} text={"I want an anecdotes"} />
    <Button onClick={votesToNewAnecdotes} text={"My vote is for this anecdotes"} />
    <H1 text={"Anecdote with most votes"} />
    <Voting votes={votes[selectedIndex]} value={highestVotes}/>
    <Anecdote value={biggestAnecdoteVoted} />
  </div>
  )

};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
];

export default App;