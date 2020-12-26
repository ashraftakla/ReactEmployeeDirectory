import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <table>
        <thead className="header">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Picture</th>
        </thead>
        <tbody>
          <tr>
            <td>Sam</td>
            <td>Pierce</td>
            <td>Image</td>
          </tr>
        </tbody>
      </table>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
