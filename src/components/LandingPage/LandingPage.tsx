import React from "react";
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import classes from './LandingPage.module.css';

export function LandingPage() {
  const navigate = useNavigate(); 

  const handlePredictClick = () => {
    navigate('/predictpage'); 
  };

  const handleGetStartedClick = () => {
    navigate('/'); 
  };
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Signnary BISINDO Dictionary{' '}
          <Text component="span" inherit className={classes.highlight}>
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Let's Learn BISINDO with Signnary!
          </Text>
        </Container>

        <div className={classes.controls}>

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
