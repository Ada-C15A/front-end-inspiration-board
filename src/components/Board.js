import { useState } from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CardList from './CardList.js';
import NewCardForm from './NewCardForm';

const axios = require('axios');

const Board = (props) => {
  const [makeNewCard, setMakeNewCard] = useState(false);

  const onNewCardButtonClick = event => {
    setMakeNewCard(true);
  }
  
  const addCard = message => {
    axios.post(`http://localhost:5000/boards/${props.board_id}/cards`, message)
    .then( response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
    .finally('Tried to make a new card')
  }
  return (
    <section className="board">
      <h2>Title: {props.title}</h2>
      <p>Owner: {props.owner}</p>
      <CardList board_id={props.board_id} />
      <button onClick={onNewCardButtonClick}>create new card</button>

      {makeNewCard && <NewCardForm addCardCallback={addCard} />}
    </section>
  );

};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};
    
export default Board;
