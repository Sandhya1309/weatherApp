import React from 'react';
import './style.css';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  TextField,
  Paper,
  IconButton
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import Cell from './Cell.js';

export default function App() {
  const [weather, setWeather] = useState({});
  const [input, setInput] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f2d50b697f0c54b8a0089f29f0c2e66b&unit=standard`;

  const search = evt => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result);
      });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CITY</TableCell>
              <TableCell align="left">WEATHER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
            <TableRow>
              <Cell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
