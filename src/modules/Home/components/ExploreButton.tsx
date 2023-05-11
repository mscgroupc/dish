import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExploreButton = () => {
  return (
    <RouteLink to='/explore'>
      <ExploreMoreButton variant='contained'>Explore More</ExploreMoreButton>
    </RouteLink>
  );
};

const RouteLink = styled(Link)`
  text-decoration: none;
`;

const ExploreMoreButton = styled(Button)`
  margin-top: 10px;
`;
