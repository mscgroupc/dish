import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RecipeCardProps } from '../modules/Explore/components/types';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  media: {
    height: 200,
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
    backgroundColor: '#f4f4f4',
    borderTop: '1px solid #e2e2e2',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#222',
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: '#e2e2e2',
    margin: '1rem 0',
  },
});

export const RecipeCard = ({ title, image }: RecipeCardProps) => {
  const classes = useStyles();
  const discription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique urna, euplacerat justo elementum vel. Nulla facilisi. Nullam a justo at tortor rhoncus auctorvel ac turpis.';
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <div className={classes.content}>
          <Grid container alignItems='center'>
            <Grid item xs>
              <Typography variant='h5' component='h2' className={classes.title}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.divider}></div>
          <Typography variant='body2' color='textSecondary' component='p'>
            {discription}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};
