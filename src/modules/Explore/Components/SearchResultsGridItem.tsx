import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const SearchResultsGridItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='Shrimp and Chorizo Paella'
        // subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='194'
        image='https://source.unsplash.com/qt6b5042lrw'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};
