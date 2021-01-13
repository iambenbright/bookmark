import React from 'react';

// material-ui
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// component
import NestedContainer from '../../common/components/container';

// styles
import useStyles from './styles';

// extensions data
import { data, IExtension } from './data';

function ExtensionCard(props: IExtension) {
  const { title, image, action, body, backgroundDot } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.cardWrapper}>
      <Card classes={{ root: classes.card }}>
        <CardContent classes={{ root: classes.cardContent }}>
          <img src={image} alt="google chrome" />
          <Box mt={3}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" classes={{ body2: classes.body2 }}>
              {body}
            </Typography>
          </Box>
        </CardContent>
        <img src={backgroundDot} alt="background dots" width="100%" />
        <CardActions classes={{ root: classes.cardActions }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            classes={{ containedPrimary: classes.containedPrimary }}
          >
            {action}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Extensions() {
  const classes = useStyles();

  return (
    <NestedContainer className={classes.extensionWrapper}>
      <Typography variant="h4" className={classes.middleFixed}>
        Download the extension
      </Typography>
      <Typography className={classes.middleFixed}>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize
      </Typography>
      <Grid container spacing={5} className={classes.cardsWrapper}>
        {data.map(item => (
          <ExtensionCard key={item.id} {...item} />
        ))}
      </Grid>
    </NestedContainer>
  );
}
