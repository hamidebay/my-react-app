import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              
        <a
          className="App-link"
          //href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Input Format</h3>
          <p>First line contains <strong><i>N.N</i></strong> lines follow, each having a PAN number.</p>
          <h3>Constraints</h3>
          <ul>
            <li><strong><i>1 &#8804; N &#8804; 10</i></strong></li>
            <li>Each char is an uppercase letter, i,e., <strong><i>char &#8712; ['A','Z']</i></strong>.</li>
            <li>Each digit lies between 9 and 9, i.e., <strong><i>digit &#8712; [0,9]</i></strong>.</li>
            <li>The length of the PAN number is alwasys 10, i.e.,<strong><i>length(PAN) = 10</i></strong></li>
            <li>Every character in PAN is either char or digit satisfying the above constraints.</li>
          </ul>
          <h3>Output Format</h3>
          <p>For every PAN number listed, print YES if it is valid and NO if it isn't.</p>
        </a>
      </header>
    </div>
  );
}

export default App;
