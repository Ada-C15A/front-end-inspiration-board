import React, { useState, useEffect } from "react";
import Board from './Board';
import PropTypes from 'prop-types';
import NewBoardForm from './NewBoardForm'

const axios = require('axios');

const BoardList = (props) => {
  const[boards, setBoards] = useState([]);
  const[selectedBoard, setSelectedBoard] = useState({
    owner: '',
    board_id: null,
    title: ''
  });
  const[makeNewBoard, setMakeNewBoard] = useState(false);

  const getBoards = () => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    .then(response => {
      console.log(process.env.REACT_APP_BACKEND_URL);
      setBoards(response.data);
      if (response.data.length > 0 ){
        setSelectedBoard(response.data[0]);
      }
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => console.log("Tried to get boards"));  
  }
  const onNewBoardButtonClick = event => {
    setMakeNewBoard(true);
  }

  const addBoard = ({title, owner}) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    .then( response => {
      console.log(response.data);
      getBoards();
    })
    .catch(error => console.log(error))
    .finally('Tried to make a new board')
  }

  const onBoardSelect = (event) => {
    console.log("OnBoardSelect about to axios call")
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${event.target.value}`)
      .then( response => {
        setSelectedBoard(response.data.board);
        console.log(response.data)
      })
      .catch( error => console.log(error))
      .finally("finished axios attem")
  }
  useEffect( () => {
    getBoards();
  }, []);

  return (
    <>
      <h2>Choose a board</h2>
      <select className="board-list" onChange={onBoardSelect}>
        {boards.map(board =>
          <option key={board.board_id} value={board.board_id}>{board.title}</option>
        )}
      </select>
      {selectedBoard.board_id && <Board key={selectedBoard.board_id} board_id={selectedBoard.board_id}title={selectedBoard.title} owner={selectedBoard.owner}addBoard={addBoard} />}
      <button onClick={onNewBoardButtonClick}>Create New Board</button>
      {makeNewBoard && <NewBoardForm addBoardCallback={addBoard} />}
    </>
  );
};

export default BoardList;