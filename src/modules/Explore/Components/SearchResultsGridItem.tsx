import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { SearchResultsGridItemProps } from './types';

export const SearchResultsGridItem = ({
  title,
  image,
  discription,
}: SearchResultsGridItemProps) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345, minHeight: 450 }}>
        <CardHeader title={title} sx={{ minHeight: 95 }} />
        <CardMedia component='img' height='194' image={image} alt='Paella dish' />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {discription}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
