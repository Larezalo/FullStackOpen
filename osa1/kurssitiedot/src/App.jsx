const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  
  return (
    <div>
      <Header coursename = {course.name} />
      <Content parts = {course.parts}/>
      <Total  parts = {course.parts}/>
      
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

const Content = ({parts}) => {

  return (
    <>
    <Part name = {parts[0].name} number = {parts[0].exercises} />
    <Part name = {parts[1].name} number = {parts[1].exercises} />
    <Part name = {parts[2].name} number = {parts[2].exercises} />
    </>
  )
}

const Total = ({parts}) => {

  return (

    <>
      <p>
      Number of exercises {parts[0].exercises
       + parts[1].exercises
      + parts[2].exercises}
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