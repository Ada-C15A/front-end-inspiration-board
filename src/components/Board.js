import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CardList from './CardList.js';
import NewCardForm from './NewCardForm';

const axios = require('axios');

const Board = (props) => {
  const [cards, setCards] = useState([]);
  const [makeNewCard, setMakeNewCard] = useState(false);

  const getCards = () => {
    axios
    .get(`http://localhost:5000/boards/${props.board_id}/cards`)
    .then( response => {
      setCards(response.data);
    })
    .catch(error => console.log(error))
    .finally( () => console.log(`Tried to get cards for board ${props.board_id}`))
  }
  const onDeleteCard = id => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/${id}`)
      .then( response => {
          const newCards= cards.filter( (card) => card.card_id !== id)
        setCards(newCards);
      })
      .catch(error => console.log(error))
      .finally( () => console.log(`Tried to get cards for board ${id}`))
    }

    const onVoteCard = (id, vote )=> {
      axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/${id}/votes?like_count=${vote}`)
      .then( response => {
        getCards();
    })
    .catch(error => console.log(error))
    .finally( () => console.log(`Tried to update votes`))
    }

    useEffect( () => {
    getCards();
    }, [props.board_id]);

  const onNewCardButtonClick = event => {
    setMakeNewCard(true);
  }
  
  const addCard = message => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board_id}/cards`, message)
    .then( response => {
      console.log(response.data)
      getCards();
    })
    .catch(error => console.log(error))
    .finally('Tried to make a new card')
  }
  return (
    <section className="board">
      <h2>Title: {props.title}</h2>
      <p>Owner: {props.owner}</p>
      <CardList
        cards={cards}
        board_id={props.board_id} 
        onDeleteCard={onDeleteCard}
        onVoteCard={onVoteCard}
       />
      <button className="create-button" onClick={onNewCardButtonClick}>Create New Card</button>

      {makeNewCard && <NewCardForm addCardCallback={addCard} />}
    </section>
  );

};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};
    
export default Board;
