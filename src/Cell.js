import React from 'react';
import './style.css';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Paper
} from '@material-ui/core';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableCell';

import { useState } from 'react';

export default function Cell() {
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
      <TableRow>
        <TableCell style={{ width: 300 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100px',
              justifyContent: 'space-around'
            }}
          >
            <TextField
              autoComplete="off"
              id="standard-basic"
              label="Your Location"
              required
              value={input}
              onChange={event => setInput(event.target.value)}
            />
            <Button
              onClick={() => {
                search();
              }}
            >
              Search
            </Button>
          </div>
        </TableCell>
        <TableCell align="left">
          {typeof weather.main != 'undefined' ? (
            <div>
              <Card style={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {weather.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {weather.weather[0].main}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Our Api Indicates {weather.weather[0].description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Temperature : {Math.round(weather.main.temp)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Wind Speed : {Math.round(weather.wind.speed)}, Deg :
                    {Math.round(weather.wind.deg)}
                  </Typography>
                  <Typography>
                    {Math.round(weather.clouds.all)} % Cloudy
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ) : null}
        </TableCell>
      </TableRow>
    </div>
  );
}
