import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.button`
  min-width: 120px;
  min-height: 120px;
  height: auto;
  width: auto;
  margin: 10px;
  cursor: pointer;
  font-size: 80px;
  background-color: #228c22;
  border-radius: 5px;
`;

const Square = ({ onClick, square, turn, finished }) => {
  const [text, setText] = useState("");
  const [clickable, setClickable] = useState(true);

  useLayoutEffect(() => {
    setClickable((prev) => true);
    setText((prev) => "");
  }, [finished]);

  const click = () => {
    setClickable((prev) => false);
    if (clickable) {
      onClick(square);
      setText((prev) => (turn === "player1" ? "X" : "O"));
    }
  };

  return <Container style={{color: text === "X" ? "black" : "white"}} onClick={() => click()}>{text}</Container>;
};

export default Square;
