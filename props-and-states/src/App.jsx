// 6a

import { useState } from 'react';

function Student(props) {
  return <h2>Student Name: {props.name}</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Working with Props and State</h1>

      <Student name="Dinni" />

      <h2>Count value is {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;