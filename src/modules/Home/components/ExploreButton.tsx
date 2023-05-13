import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExploreButton = () => {
  return (
    <RouteLink to='/explore'>
      <Button variant='contained'>Explore More</Button>
    </RouteLink>
  );
};

const RouteLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
`;
