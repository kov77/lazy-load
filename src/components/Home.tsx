import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

const MyContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
});

const MyTitle = styled(Typography)({
  marginBottom: '16px',
  color: '#333',
  fontWeight: 'bold',
});

const MyButton = styled(Button)({
  borderRadius: '20px',
  backgroundColor: '#7bc043',
  color: 'white',
  padding: '12px 32px',
  '&:hover': {
    backgroundColor: '#5ca62c',
  },
});

export const Home = () => {
  const navigate = useNavigate()

  return (
    <MyContainer>
      <MyTitle variant="h3">Lazy Load Component</MyTitle>
      <MyButton variant="contained" onClick={() => navigate('test')}>Let's check!</MyButton>
    </MyContainer>
  );
};
