import logo from './logo.svg';
import './App.css';
import Posts from './components/Post';
import Notes from './components/Notes';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts />
        <Notes/>
        <Comments/>
      </header>
    </div>
  );
}

export default App;
