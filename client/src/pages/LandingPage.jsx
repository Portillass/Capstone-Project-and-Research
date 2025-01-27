import { useState } from 'react';
import { Box, Button, Container, Typography, AppBar, Toolbar, Grid, Card, CardContent, IconButton, Dialog, DialogContent, DialogTitle, TextField, Link, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupIcon from '@mui/icons-material/Group';
import HexagonIcon from '@mui/icons-material/Hexagon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

// Honeybee theme colors
const theme = {
  primary: '#FFB800', // Rich honey
  secondary: '#1A1A1A', // Deep black
  accent: '#FFD54F', // Light honey
  text: '#FFFFFF', // White text
  background: 'rgba(26, 26, 26, 0.9)', // Semi-transparent black
};

const LoginModal = ({ open, onClose, onSwitchToSignUp, onSwitchToForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login:', formData);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          background: theme.background,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.primary}`
        }
      }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ color: theme.text, fontWeight: 600 }}>
            Sign in to Beehive
          </Typography>
          <IconButton onClick={onClose} sx={{ color: theme.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                '&:hover fieldset': { borderColor: theme.primary },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
              '& .MuiOutlinedInput-input': { color: theme.text }
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                '&:hover fieldset': { borderColor: theme.primary },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
              '& .MuiOutlinedInput-input': { color: theme.text }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: theme.primary,
              color: theme.secondary,
              '&:hover': { backgroundColor: theme.accent }
            }}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Link
              component="button"
              variant="body2"
              onClick={onSwitchToSignUp}
              sx={{ color: theme.primary }}
            >
              Don't have an account? Sign Up
            </Link>
            <Link
              component="button"
              variant="body2"
              onClick={onSwitchToForgotPassword}
              sx={{ color: theme.primary }}
            >
              Forgot password?
            </Link>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const SignUpModal = ({ open, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'staff',
    adminCode: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // TODO: Implement signup logic
    console.log('Signup:', formData);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: theme.background,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.primary}`
        }
      }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ color: theme.text, fontWeight: 600 }}>
            Create your Beehive account
          </Typography>
          <IconButton onClick={onClose} sx={{ color: theme.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                    '&:hover fieldset': { borderColor: theme.primary },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                  '& .MuiOutlinedInput-input': { color: theme.text }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                    '&:hover fieldset': { borderColor: theme.primary },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                  '& .MuiOutlinedInput-input': { color: theme.text }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                    '&:hover fieldset': { borderColor: theme.primary },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                  '& .MuiOutlinedInput-input': { color: theme.text }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                    '&:hover fieldset': { borderColor: theme.primary },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                  '& .MuiOutlinedInput-input': { color: theme.text }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                    '&:hover fieldset': { borderColor: theme.primary },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                  '& .MuiOutlinedInput-input': { color: theme.text }
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: theme.primary,
              color: theme.secondary,
              '&:hover': { backgroundColor: theme.accent }
            }}
          >
            Sign Up
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link
              component="button"
              variant="body2"
              onClick={onSwitchToLogin}
              sx={{ color: theme.primary }}
            >
              Already have an account? Sign in
            </Link>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const ForgotPasswordModal = ({ open, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // TODO: Implement password reset logic
    console.log('Reset password for:', email);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          background: theme.background,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.primary}`
        }
      }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ color: theme.text, fontWeight: 600 }}>
            Reset Password
          </Typography>
          <IconButton onClick={onClose} sx={{ color: theme.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {!isSubmitted ? (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="body2" sx={{ mb: 3, color: theme.text }}>
              Enter your email address and we'll send you a link to reset your password.
            </Typography>
            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(255, 184, 0, 0.3)' },
                  '&:hover fieldset': { borderColor: theme.primary },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiOutlinedInput-input': { color: theme.text }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: theme.primary,
                color: theme.secondary,
                '&:hover': { backgroundColor: theme.accent }
              }}
            >
              Send Reset Link
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link
                component="button"
                variant="body2"
                onClick={onSwitchToLogin}
                sx={{ color: theme.primary }}
              >
                Back to Sign In
              </Link>
            </Box>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="body1" sx={{ mb: 3, color: theme.text }}>
              If an account exists for {email}, you will receive a password reset link in your email.
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={onSwitchToLogin}
              sx={{ color: theme.primary }}
            >
              Return to Sign In
            </Link>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const handleOpenLogin = () => {
    setOpenSignUp(false);
    setOpenForgotPassword(false);
    setOpenLogin(true);
  };

  const handleOpenSignUp = () => {
    setOpenLogin(false);
    setOpenForgotPassword(false);
    setOpenSignUp(true);
  };

  const handleOpenForgotPassword = () => {
    setOpenLogin(false);
    setOpenSignUp(false);
    setOpenForgotPassword(true);
  };

  // Update the button click handlers
  const loginButton = (
    <Button
      variant="text"
      onClick={handleOpenLogin}
      sx={{
        color: theme.text,
        fontSize: '1rem',
        fontWeight: 600,
        px: 3,
        '&:hover': {
          color: theme.primary,
          backgroundColor: 'rgba(255, 184, 0, 0.08)',
        },
      }}
    >
      Login
    </Button>
  );

  const signUpButton = (
    <Button
      variant="contained"
      onClick={handleOpenSignUp}
      sx={{
        backgroundColor: theme.primary,
        color: theme.secondary,
        fontSize: '1rem',
        fontWeight: 600,
        px: 3,
        '&:hover': {
          backgroundColor: theme.accent,
        },
      }}
    >
      Sign Up
    </Button>
  );

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: theme.background,
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 184, 0, 0.2)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HexagonIcon sx={{ color: theme.primary, fontSize: '2.5rem' }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.8rem',
                  color: theme.text,
                  letterSpacing: '-0.5px'
                }}
              >
                Beehive
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {loginButton}
              {signUpButton}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          pt: { xs: '5rem', md: '6rem' },
          pb: { xs: '3rem', md: '4rem' },
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 4, md: 6 }} 
            alignItems="center"
            sx={{ minHeight: { md: 'calc(100vh - 10rem)' } }}
          >
            {/* Left Column - Hero Content */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: theme.text,
                    mb: { xs: 2, md: 3 }
                  }}
                >
                  Collaborate Like a
                  <Box 
                    component="span" 
                    sx={{ 
                      color: theme.primary,
                      display: 'block',
                      textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    Busy Bee
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 400,
                    mb: { xs: 3, md: 4 },
                    lineHeight: 1.6,
                    maxWidth: '540px'
                  }}
                >
                  Experience seamless team communication and project management in our intuitive workspace.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/signup')}
                  sx={{
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    padding: '12px 32px',
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(255, 184, 0, 0.3)',
                    '&:hover': {
                      backgroundColor: theme.accent,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(255, 184, 0, 0.4)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>

            {/* Right Column - Role Cards */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      background: theme.background,
                      borderRadius: 4,
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease-in-out',
                      border: `1px solid ${theme.primary}`,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
                        borderColor: theme.accent
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <IconButton 
                          sx={{ 
                            backgroundColor: 'rgba(255, 184, 0, 0.1)',
                            mr: 2,
                            '&:hover': { backgroundColor: 'rgba(255, 184, 0, 0.2)' }
                          }}
                        >
                          <AdminPanelSettingsIcon sx={{ color: theme.primary }} />
                        </IconButton>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: theme.text }}>
                          Admin Dashboard
                        </Typography>
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                        Take control of your workspace with comprehensive system management, user administration, and advanced configuration options.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      background: theme.background,
                      borderRadius: 4,
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease-in-out',
                      border: `1px solid ${theme.primary}`,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
                        borderColor: theme.accent
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <IconButton 
                          sx={{ 
                            backgroundColor: 'rgba(255, 184, 0, 0.1)',
                            mr: 2,
                            '&:hover': { backgroundColor: 'rgba(255, 184, 0, 0.2)' }
                          }}
                        >
                          <GroupIcon sx={{ color: theme.primary }} />
                        </IconButton>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: theme.text }}>
                          Staff Portal
                        </Typography>
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                        Engage in seamless collaboration, manage tasks efficiently, and participate in projects with an intuitive interface designed for productivity.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          width: '100%',
          background: theme.background,
          backdropFilter: 'blur(10px)',
          borderTop: `1px solid ${theme.primary}`,
          py: 4,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* About Us Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: theme.primary }}>
                About Us
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '500px',
                  lineHeight: 1.7
                }}
              >
                Beehive is a collaborative workspace designed to streamline team communication and project management. 
                Our platform brings together the best tools and features to help your team work efficiently and effectively.
              </Typography>
            </Grid>

            {/* Developer Info Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: theme.primary }}>
                Developed By
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.text,
                      fontWeight: 600
                    }}
                  >
                    Rell Portillas
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{ 
                        color: theme.text,
                        '&:hover': { color: theme.primary }
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{ 
                        color: theme.text,
                        '&:hover': { color: theme.primary }
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Full Stack Developer
                </Typography>
              </Box>
            </Grid>

            {/* Copyright */}
            <Grid item xs={12}>
              <Typography 
                variant="body2" 
                align="center" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  mt: 2,
                  borderTop: `1px solid rgba(255, 184, 0, 0.2)`,
                  pt: 3
                }}
              >
                © {new Date().getFullYear()} Beehive. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Add the modals */}
      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onSwitchToSignUp={handleOpenSignUp}
        onSwitchToForgotPassword={handleOpenForgotPassword}
      />
      <SignUpModal
        open={openSignUp}
        onClose={() => setOpenSignUp(false)}
        onSwitchToLogin={handleOpenLogin}
      />
      <ForgotPasswordModal
        open={openForgotPassword}
        onClose={() => setOpenForgotPassword(false)}
        onSwitchToLogin={handleOpenLogin}
      />
    </Box>
  );
};

export default LandingPage; 