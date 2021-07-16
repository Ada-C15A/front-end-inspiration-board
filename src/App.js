import './App.css';
import {useState} from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';


function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1>
          <span className="h1-line1">Mango Mania</span> <span className="h1-line2">Inspiration</span> <span className="h1-line2">Board</span>
        </h1>
      </header>
      <main id="main-content">
        <BoardList />
      </main>
    </div>
  );
}

export default App;
