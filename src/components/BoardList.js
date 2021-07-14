import React, { useState, useEffect } from "react";
import Board from './Board';
import PropTypes from 'prop-types';

const axios = require('axios');


const BoardList = (props) => {
  const[boards, setBoards] = useState([]);
  const[selectedBoard, setSelectedBoard] = useState({
    owner: 'Test',
    board_id: null,
    title: 'Please work'
  });

  const onBoardSelect = (event) => {
    console.log("OnBoardSelect about to axios call")
    axios
      .get(`http://localhost:5000/boards/${event.target.value}`)
      .then( response => {
        setSelectedBoard(response.data);
        console.log(response.data)
      })
      .catch( error => console.log(error))
      .finally("finished axios attem")
  }
  useEffect( () => {
    axios
    .get('http://localhost:5000/boards')
    .then(response => {
      // console.log(response.data);
      setBoards(response.data);
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => console.log("Tried to get boards"));
    
  }, []);

  return (
    <>
      <ul>
        {boards.map( board => 
          <li key={board.board_id}>
            <strong>{board.title}</strong>
            <br />
            owner: {board.owner}
          </li>
        )}
      </ul>
      <select onChange={onBoardSelect}>
        {boards.map( board =>
          <option key={board.board_id} value={board.board_id}>{board.title}</option>
        )}
      </select>
      <Board title={selectedBoard.board.title} owner={selectedBoard.board.owner} />
    </>
  )
};

export default BoardList;