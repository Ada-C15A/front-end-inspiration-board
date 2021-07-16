import React, { useState, useEffect } from "react";
import Card from './Card';
import './CardList.css';
import PropTypes from 'prop-types';

const axios = require('axios');

const CardList = props => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({card:{board_id: null, card_id: null, message:'', like_count:''}});

  const getCards = () => {
    axios
    .get(`http://localhost:5000/boards/${props.board_id}/cards`)
    .then( response => {
      setCards(response.data);
    })
    .catch(error => console.log(error))
    .finally( () => console.log(`Tried to get cards for board ${props.board_id}`))
  }

  useEffect( () => {
    getCards();
    }, []);

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

  return (
    <section id="card-list">
    {cards.map( card => 
      <Card key={card.card_id} 
        board_id={card.board_id} 
        card_id={card.card_id} 
        message={card.message} 
        votes={card.votes} 
        onDeleteCard={onDeleteCard}
        onVoteCard={onVoteCard} 
      />
    )};
    </section>
  );
};
export default CardList;