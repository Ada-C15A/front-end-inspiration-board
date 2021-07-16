import React from "react";
import Card from './Card';
import './CardList.css';
// import PropTypes from 'prop-types';

const CardList = props => {
  // const [selectedCard, setSelectedCard] = useState({card:{board_id: null, card_id: null, message:'', like_count:''}});

  return (
    <section id="card-list">
    {props.cards.map( card => 
      <Card key={card.card_id} 
        board_id={card.board_id} 
        card_id={card.card_id} 
        message={card.message} 
        votes={card.votes} 
        onDeleteCard={props.onDeleteCard}
        onVoteCard={props.onVoteCard} 
      />
    )}
    </section>
  );
};
export default CardList;