import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Square from "./Components/Square";

const Container = styled.div`
  background-color: #98ff98;
  align-items: center;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const GameContainer = styled.div`
  width: 500px;
  height: 500px;
`;
const SquareContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 5px solid #004225;
  border-radius: 5%;
`;
const App = () => {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [turn, setTurn] = useState("player1");
  const [counter, setCounter] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (compareFinishMoves(player1, finishMoves)) {
      alert("Player 1 Won!");
      finishGame();
    } else if (compareFinishMoves(player2, finishMoves)) {
      alert("Player 2 Won!");
      finishGame();
    } else if (counter === 9) {
      alert("Tie");
      finishGame();
    }
  }, [turn]);

  const finishMoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const compareTwoArrays = (ar1, ar2) => {
    return ar2.every((item) => ar1.includes(item));
  };

  const compareFinishMoves = (ar1, move) => {
    return move.some((item) => compareTwoArrays(ar1, item));
  };

  const finishGame = () => {
    setCounter((prev) => 0);
    setPlayer1([]);
    setPlayer2([]);
    setFinished((prev) => !prev);
  };

  const onClick = (square) => {
    setCounter((prev) => prev + 1);
    switch (turn) {
      case "player1":
        setPlayer1((prev) => [...prev, square]);
        setTurn("player2");
        break;
      case "player2":
        setPlayer2((prev) => [...prev, square]);
        setTurn("player1");
        break;
      default:
        return false;
    }
  };

  return (
    <Container>
      <GameContainer>
        <SquareContainer>
          {squares.map((square) => (
            <Square
              key={square}
              onClick={onClick}
              square={square}
              turn={turn}
              finished={finished}
            />
          ))}
        </SquareContainer>
      </GameContainer>
    </Container>
  );
};

export default App;
