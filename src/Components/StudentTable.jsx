import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function StudentTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function createData(no, student, standard, result, score, grade) {
    return { no, student, standard, result, score, grade };
  }

  const rows = [
    createData(1, "Aditya", 9, "pass", 60, "B"),
    createData(2, "Mohit", 8, "fail", 60, "B"),
    createData(3, "Suraj", 9, "pass", 70, "B+"),
    createData(4, "Maya", 7, "pass", 90, "A"),
    createData(5, "David", 10, "fail", 25, "F"),
    createData(6, "Jhon", 10, "fail", 20, "F"),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">No.</StyledTableCell>
            <StyledTableCell>Student</StyledTableCell>
            <StyledTableCell align="right">Class</StyledTableCell>
            <StyledTableCell align="right">Result</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell align="left">{row.no}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.student}
              </StyledTableCell>
              <StyledTableCell align="right">{row.standard}</StyledTableCell>
              <StyledTableCell align="right">{row.result}</StyledTableCell>
              <StyledTableCell align="right">{row.score}</StyledTableCell>
              <StyledTableCell align="right">{row.grade}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentTable;
