import './App.css';
import './App.scss';

function App() {
  const students = [
    { id: 1, name: 'Dinni', course: 'CSE' },
    { id: 2, name: 'Ravi', course: 'ECE' },
    { id: 3, name: 'Priya', course: 'IT' }
  ];

  return (
    <div>
      <h1>Student Details</h1>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <h2>{student.name}</h2>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default App;