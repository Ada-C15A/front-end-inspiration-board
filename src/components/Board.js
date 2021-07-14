import { useState } from 'react';
import PropTypes from 'prop-types';
import './Board.css';


const Board = (props) => {
    return (
      <div>
        <h2>Title: {props.title}</h2>
        <p>Owner: {props.owner}</p>
      </div>
    );

};

// Board.propTypes = {
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
//     // onClickCallback: PropTypes.func.isRequired,
//     // id: PropTypes.number.isRequired,
// };
    
export default Board;
