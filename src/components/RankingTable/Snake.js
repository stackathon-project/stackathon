import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { selectMathScores, GetAllScore } from "../../store/MathGameSlice";

export default function BasicTable() {
  let mathScores = useSelector(selectMathScores);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllScore());
  }, []);

  function createData(game, name, calories, fat, date) {
    return { game, name, calories, fat, date };
  }

  function generateTable(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(
        createData(
          i + 1,
          arr[i].game,
          arr[i].user,
          arr[i].score,
          arr[i].createdAt
        )
      );
      console.log(1);
      console.log(newArr);
    }
    return newArr;
  }

  const rows = generateTable(mathScores);
  console.log("rows", rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ranking</TableCell>
            <TableCell align="right">Game</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.game}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
