import React from 'react';

const Header = ({ course }) => (
    <h1>{course.name}</h1>
)

const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

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