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
          Mango Mania Inspiration Board
        </h1>
      </header>
      <section id="boardListSection">
        <BoardList />
      </section>
    </div>
  );
}

export default App;
