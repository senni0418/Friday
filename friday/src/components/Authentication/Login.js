import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../helpers/AuthManager";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const theme = createTheme();
  const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 400,
        minHeight: 300,
        margin: "10vw 10vw auto auto",

        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    login: {
      display: "flex",
      flexDirection: "column"

    }
}));
  const classes = useStyles();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    console.log(user)
    if (user) navigate("/about");
  }, [user, loading]);

  return (
    <ThemeProvider theme={theme}>

      <Card spacing={10} className={classes.card}>
      <Box sx={{ p:1 }}>
        <CardContent className={classes.login}>
          <Typography variant="h4">
            <Box sx={{ fontWeight: 'bold' }}>Sign Into</Box>
            <Box sx={{ fontWeight: 'bold' }}>Your Account.</Box>
          </Typography>
          </CardContent>
          <CardContent className={classes.login}>
          <TextField
            type="text"
            className="login__texBox"a
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <TextField
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />


          </CardContent>
          <CardContent className={classes.login}>
          <Button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </Button>
          <Button className="login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
          </Button>
          <Typography>
            <Link to="/reset">Forgot Password</Link>
          </Typography>
          <Typography>
            Don't have an account? <Link to="/register">Register</Link> now.
          </Typography>
        </CardContent>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
export default Login;
