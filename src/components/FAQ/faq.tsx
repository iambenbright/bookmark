import React from 'react';

// material-ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// custom components
import NestedContainer from '../../common/components/container';

// styles
import useStyles from './styles';

// data
import { data, IExpansion } from './data';

function Expansion(props: IExpansion) {
  const classes = useStyles();
  const { summary, details } = props;

  return (
    <Accordion classes={{ rounded: 'false', root: classes.accordion }}>
      <AccordionSummary
        classes={{ root: classes.accordionSummary }}
        expandIcon={<ExpandMoreIcon color="primary" />}
      >
        <Typography classes={{ body1: classes.summaryBody }}>
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.accordionDetails }}>
        <Typography classes={{ body1: classes.detailBody }}>
          {details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function FAQ() {
  const classes = useStyles();

  return (
    <NestedContainer className={classes.middleFixed}>
      <Typography variant="h4">Frequently Asked Questions</Typography>
      <Box width="90%">
        <Typography>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Typography>
        <Box mt={5}>
          {data.map(item => (
            <Expansion key={item.id} {...item} />
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          classes={{ containedPrimary: classes.containedPrimary }}
        >
          More info
        </Button>
      </Box>
    </NestedContainer>
  );
}
