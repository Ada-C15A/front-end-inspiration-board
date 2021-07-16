import { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = (props) => {
  const onDeleteButtonClick = event => {
    props.onDeleteCard(props.card_id);
  }
  const onVoteButtonClick = event => {
    props.onVoteCard(props.card_id, 1);
  }
    
  return (
    <div className="card">
      <h2>Message: {props.message}</h2>
      <div className="card-buttons">
        <button className="cardBtns" onClick={onVoteButtonClick}> 🥭: {props.votes}</button>
        <button className="cardBtns" onClick={onDeleteButtonClick}> Delete </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onVoteCard: PropTypes.func.isRequired
};

export default Card;
