import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper sx={{padding: '1rem 2rem',}}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
            />

           <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default SignIn
