import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExploreButton = () => {
  return (
    <Wrapper>
      <Button component={Link} to='/dish/explore' variant='contained' color='primary'>
        Go to Explore
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
`;
