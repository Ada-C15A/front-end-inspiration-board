import './App.css';
import {useState} from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';


function App() {
  return (
    <div className="App">
      <header>
        <h1>
          🥭 Mango Mania Inspiration Boards 🥭 🥭
        </h1>
      </header>
      <BoardList />
    </div>
  );
}

export default App;
