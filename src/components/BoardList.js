import React, { useState, useEffect } from "react";
import Board from './Board';
import PropTypes from 'prop-types';

const axios = require('axios');


const BoardList = (props) => {
  const[boards, setBoards] = useState([]);
  const[selectedBoard, setSelectedBoard] = useState({
    owner: '',
    board_id: null,
    title: ''
  });

  const onBoardSelect = (event) => {
    console.log("OnBoardSelect about to axios call")
    axios
      .get(`http://localhost:5000/boards/${event.target.value}`)
      .then( response => {
        setSelectedBoard(response.data.board);
        console.log(response.data)
      })
      .catch( error => console.log(error))
      .finally("finished axios attem")
  }
  useEffect( () => {
    axios
    .get('http://localhost:5000/boards')
    .then(response => {
      setBoards(response.data);
      if (response.data.length > 0 ){
        setSelectedBoard(response.data[0]);
      }
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => console.log("Tried to get boards"));
    
  }, []);

  return (
    <>
      <h2>Choose a board</h2>
      <select className="board-list" onChange={onBoardSelect}>
        {boards.map( board =>
          <option key={board.board_id} value={board.board_id}>{board.title}</option>
        )}
      </select>
      {selectedBoard.board_id && <Board board_id={selectedBoard.board_id} title={selectedBoard.title} owner={selectedBoard.owner} />}
    </>
  )
};

export default BoardList;