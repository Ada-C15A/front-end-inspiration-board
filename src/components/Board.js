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
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board_id}/cards`, message)
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
      <button onClick={onNewCardButtonClick}>Create New Card</button>

      {makeNewCard && <NewCardForm addCardCallback={addCard} />}
    </section>
  );

};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};
    
export default Board;
