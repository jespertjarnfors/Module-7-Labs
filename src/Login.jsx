import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    alert('Login Rejected');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h2" variant="h5">
        Login
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}
