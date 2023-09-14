const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 15
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 22

  return (
    <div>
      <Header coursename = {course} />
      <Content
       name1 = {part1} exercises1 = {exercises1}
       name2= {part2} exercises2 = {exercises2}
       name3 = {part3} exercises3 = {exercises3}
      />
      <Total 
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}
      />
    </div>
  )
}

const Header = (props) => {

  return (

      <h1>
      {props.coursename}
      </h1>
  )
}

const Content = (props) => {

  return (
    <>
    <Part name = {props.name1} number = {props.exercises1} />
    <Part name = {props.name2} number = {props.exercises2} />
    <Part name = {props.name3} number = {props.exercises3} />
    </>
  )
}

const Total = (props) => {

  return (

    <>
      <p>
      Number of exercises {props.exercises1
       + props.exercises2
      + props.exercises3}
      </p>
    </>
  )
}

const Part = (props) => {

  return (
    <p>
    {props.name } {props.number}
    </p>
  )
}

export default App