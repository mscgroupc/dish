import styled from 'styled-components';
import React, {useState} from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    Tabs, Tab, Button, DialogActions
} from '@mui/material';
import {Info} from '@mui/icons-material'; // Import the Info icon from Material-UI Icons
import {RecipeInformation} from '../types/RecipeInfromation';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RecipeCard = ({recipeInformations}: { recipeInformations: RecipeInformation }) => {
    const {title, image, summary, extendedIngredients} = recipeInformations;
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);

    const summaryMarkup = {__html: summary};

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <RootCard>
            <CardActionArea>
                <MediaCardMedia image={image} title={title}/>
                <ContentDiv>
                    <Grid container alignItems='center'>
                        <Grid item xs>
                            <TitleTypography variant='h5'>{title}</TitleTypography>
                            <IconWrapper>
                                <InfoIcon onClick={handleOpen}/>
                            </IconWrapper>
                        </Grid>
                    </Grid>
                    <DividerDiv/>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        <>
                            <div
                                dangerouslySetInnerHTML={
                                    expanded ? summaryMarkup : {__html: `${summary.substring(0, 200)}...`}
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label="Summary" />
                    <Tab label="Shopping List" />
                </Tabs>
                <DialogContent>
                    {tabValue === 0 && (
                        <Typography variant="body1" color="textPrimary" component="p" dangerouslySetInnerHTML={summaryMarkup} />
                    )}
                    {tabValue === 1 && (
                        <Typography variant="body1" color="textPrimary" component="p">
                            <div>
                                {extendedIngredients.map((ingredient, index) => (
                                    <div className="card" key={index}>
                                        <div className="card-body">
                                            <h3 className="card-title">{ingredient.name}</h3>
                                            <p className="card-text">
                                                Original Name: {ingredient.originalName} <br />
                                                Amount: {ingredient.amount} {ingredient.unit}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

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

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const InfoIcon = styled(Info)`
  color: #777;
  margin-right: 0.2rem;
`;
