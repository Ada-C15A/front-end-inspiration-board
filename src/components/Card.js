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
        <button onClick={onVoteButtonClick}> Vote: {props.votes}</button>
        <button onClick={onDeleteButtonClick}> Delete </button>
      </div>
    );
};

// TODO
// Card.propTypes = {
//     title: PropTypes.string.isRequired,
//     onDeleteCard: PropTypes.func.isRequired

// };

export default Card;
