import styled from 'styled-components';
import { useState } from 'react';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { RecipeInformation } from '../types/RecipeInfromation';

export const RecipeCard = ({ recipeInformations }: { recipeInformations: RecipeInformation }) => {
  const { title, image, summary } = recipeInformations;
  const [expanded, setExpanded] = useState(false);

  const summaryMarkup = { __html: summary };

  return (
    <RootCard>
      <CardActionArea>
        <MediaCardMedia image={image} title={title} />
        <ContentDiv>
          <Grid container alignItems='center'>
            <Grid item xs>
              <TitleTypography variant='h5'>{title}</TitleTypography>
            </Grid>
          </Grid>
          <DividerDiv />
          <Typography variant='body2' color='textSecondary' component='p'>
            <>
              <div
                dangerouslySetInnerHTML={
                  expanded ? summaryMarkup : { __html: `${summary.substring(0, 200)}...` }
                }
              />
              {summary.length > 200 && (
                <span onClick={() => setExpanded(!expanded)}>
                  {expanded ? 'Read less' : 'Read more'}
                </span>
              )}
            </>
          </Typography>
        </ContentDiv>
      </CardActionArea>
    </RootCard>
  );
};

const RootCard = styled(Card)`
  max-width: 350px;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MediaCardMedia = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
`;

const ContentDiv = styled.div`
  padding: 16px;
  background-color: #f4f4f4;
  border-top: 1px solid #e2e2e2;
`;

const TitleTypography = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
`;

const DividerDiv = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e2e2e2;
  margin: 1rem 0;
`;
