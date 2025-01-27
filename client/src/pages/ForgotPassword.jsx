import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        {!isSubmitted ? (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Enter your email address and we'll send you a link to reset your password.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Reset Link
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link href="/login" variant="body2">
                Back to Sign In
              </Link>
            </Box>
          </Box>
        ) : (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              If an account exists for {email}, you will receive a password reset link in your email.
            </Typography>
            <Link href="/login" variant="body2">
              Return to Sign In
            </Link>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPassword; 