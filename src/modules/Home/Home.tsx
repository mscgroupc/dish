import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';
import { HomeRecipeCard } from './components/HomeRecipeCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("/katie-smith-uQs1802D0CQ-unsplash.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
    textShadow: '2px 2px #fff',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
    textShadow: '2px 2px #fff',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant='h1' className={classes.title}>
          Welcome to Dish
        </Typography>
        <Typography gutterBottom variant='h2' className={classes.subtitle}>
          Discover delicious new dishes and old favorites
        </Typography>
        <Typography gutterBottom variant='body1'>
          At Dish, we&apos;re passionate about food and helping you find your next favorite recipe.
          Search our extensive collection of culinary categories, from comfort food classics to
          exotic international dishes. Whether you&apos;re a seasoned chef or just starting out in
          the kitchen, we&apos;ve got something for everyone. So why wait? Start exploring today and
          let your taste buds take the lead!
        </Typography>
        <HomeRecipeCard />
      </div>
    </div>
  );
};
