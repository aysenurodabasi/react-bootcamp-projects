import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
import Square from "./Square";

export default function TicTacToe({ squares,onClick }) {
  return (
    <div className="container">
      {squares.map((item, i) => (
        <Square key={i} value={item} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
