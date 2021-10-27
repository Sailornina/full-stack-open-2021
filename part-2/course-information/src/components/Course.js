import React from 'react';

const Header = ({ course }) => (
    <h1>{course}</h1>
)

const Content = ({ parts }) => {
  return (
    parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    ))
  )
}

const Part = ({ name, exercises, id }) => (
    <p>
      {name} {exercises} {id}
    </p>
)

const Total = ({ course }) => {
  const sum = course.parts.reduce((t, e) => 
    t + e.exercises, 0);
   
   return(
    <p><b>Total of {sum} exercises</b></p>
  ) 
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  )
}

export default Course;