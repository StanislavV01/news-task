import { Container, CssBaseline, Box, Avatar, Typography, TextField,  Button, Alert } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { errorLogin, loginUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function SignForm() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state=>state)
let navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(login === 'admin' && password==='12345'){
            dispatch(loginUser())
            navigate("/news-task/profile")
            window.localStorage.setItem('isLogin','true')
        }
        else{
        dispatch(errorLogin())
        }
      };
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="login"
          label="Login"
          name="login"
          value={login}
          autoComplete="login"
          onChange={(e)=>setLogin(e.target.value)}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
        />
       
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        {
        user.error && <Alert severity="error">Wrong login or password</Alert>
        }
      </Box>
    </Box>
    </Container>
  )
}

export default SignForm;
