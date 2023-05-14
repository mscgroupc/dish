import styled from 'styled-components';
import { Typography } from '@mui/material';
import { HomeRecipeCard } from './components/HomeRecipeCard';
import { ExploreButton } from './components/ExploreButton';

export const Home = () => {
  return (
    <RootDiv>
      <ContentDiv>
        <TitleTypography variant='h3'>Welcome to Dish</TitleTypography>
        <SubtitleTypography gutterBottom variant='h4'>
          Discover delicious new dishes and old favorites
        </SubtitleTypography>
        <Typography gutterBottom variant='body2'>
          At Dish, we&apos;re passionate about food and helping you find your next favorite recipe.
          Search our extensive collection of culinary categories, from comfort food classics to
          exotic international dishes. Whether you&apos;re a seasoned chef or just starting out in
          the kitchen, we&apos;ve got something for everyone. So why wait? Start exploring today and
          let your taste buds take the lead!
        </Typography>
        <HomeRecipeCard />
        <ExploreButton />
      </ContentDiv>
    </RootDiv>
  );
};

const RootDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/dish/katie-smith-uQs1802D0CQ-unsplash.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const TitleTypography = styled(Typography)`
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-shadow: 2px 2px #fff;
`;

const SubtitleTypography = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-shadow: 2px 2px #fff;
`;
