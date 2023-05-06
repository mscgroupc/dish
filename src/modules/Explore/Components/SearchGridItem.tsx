import { Grid } from '@mui/material';
import { SearchResultsGridItem } from './SearchResultsGridItem';
import { SearchGridItemProps } from './types';

export const SearchGridItem = (props: SearchGridItemProps) => {
  // ToDo: Use ID to get correct discription
  const { id } = props;
  return (
    <Grid item>
      <SearchResultsGridItem
        {...props}
        // ToDo: use correct discriptiopn
        discription='This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.'
      />
    </Grid>
  );
};
