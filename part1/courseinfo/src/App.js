const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercise={props.exercise1} />
      <Part name={props.part2} exercise={props.exercise2} />
      <Part name={props.part3} exercise={props.exercise3} />
    </div>
  );
};

const Hello = (props) => {
  return (<>
    <p>{props.test}</p>
  </>);

}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  );
}
const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};


const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7
  const part3 = 'State of a component';
  const exercises3 = 14

  return (
    <>
      <Header title={course} />
      <Content
        part1={part1}
        exercise1={exercises1}
        part2={part2}
        exercise2={exercises2}
        part3={part3}
        exercise3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </>
  );
};

export default App;