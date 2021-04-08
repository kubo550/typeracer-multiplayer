import {
  Button,
  Container,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import honda from "../assets/honda-car.png";

// Todo Kurwa może by uzyc react-hook-form

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const history = useHistory();

  const handleJoinRoom = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!name || !room) {
      return;
    }

    history.push(`/race?name=${name}&room=${room}`);
  };

  return (
    <Container maxWidth='xs'>
      <Typography variant='h5' gutterBottom>
        Typeracer – the clone of Global Typing Competition
      </Typography>
      <Typography variant='body1' gutterBottom>
        Increase your typing speed while racing against others
      </Typography>
      <Paper elevation={10} style={{ padding: "20px" }}>
        <FormGroup>
          <TextField
            label='Name'
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
            // error={true}
            // helperText={"kurwa ale błąd"}
          />

          <TextField
            label='Room'
            fullWidth
            value={room}
            onChange={e => setRoom(e.target.value)}
          />

          <br />
          <Button variant='contained' color='primary' onClick={handleJoinRoom}>
            Join Race
          </Button>

          <Typography variant='h6' align='center'>
            OR
          </Typography>

          <Link to='race' style={{ textDecoration: "none" }}>
            <Button variant='contained' color='secondary' fullWidth>
              Play Solo
            </Button>
          </Link>
        </FormGroup>
      </Paper>
      <img
        src={honda}
        alt='Honda car'
        style={{ width: "145%", marginLeft: "-20%" }}
      />
    </Container>
  );
};

export default Home;
