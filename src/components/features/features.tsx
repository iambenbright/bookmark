import React, { Fragment } from 'react';

// material-ui components
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// custom component
import NestedContainer from '../../common/components/container';
import { TabPanel } from './tabPanel';

// svg
import SimpleBookmarking from '../../assets/images/illustration-features-tab-1.svg';
import SpeedySearching from '../../assets/images/illustration-features-tab-2.svg';
import EasySharing from '../../assets/images/illustration-features-tab-3.svg';

// styles
import useStyles from './styles';

// features data
import { data } from './data';

function a11yProps(index: any) {
  return {
    id: `feature-tab-${index}`,
    'aria-controls': `feature-tabpanel-${index}`,
  };
}

export default function Features() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const svgs = [SimpleBookmarking, SpeedySearching, EasySharing];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <NestedContainer style={{ marginTop: 100 }}>
      <Typography variant="h4" className={classes.middleFixed}>
        Features
      </Typography>
      <Typography className={classes.middleFixed}>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </Typography>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="bookmark features"
        >
          <Tab
            label="Simple Bookmarking"
            {...a11yProps(0)}
            className={classes.tab}
          />
          <Tab
            label="Speedy Searching"
            {...a11yProps(1)}
            className={classes.tab}
          />
          <Tab label="Easy Sharing" {...a11yProps(2)} className={classes.tab} />
        </Tabs>
        {data.map((feature, idx) => {
          return (
            <Fragment key={feature.id}>
              <TabPanel value={value} index={idx}>
                <Box className={classes.feature}>
                  <Box className={classes.panelLeft}>
                    <Box
                      className={classes.svg}
                      style={{
                        top: idx === 0 ? '40px' : '',
                      }}
                    >
                      <img src={svgs[idx]} alt={`${svgs[idx]}-feature`} />
                    </Box>
                    <Box className={classes.pillLeft} />
                  </Box>
                  <Box className={classes.panelRight}>
                    <Typography variant="h4">{feature.title}</Typography>
                    <Typography
                      className={classes.middleFixed}
                      classes={{ body1: classes.featureBody }}
                    >
                      {feature.body}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: 30 }}
                    >
                      More info
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
            </Fragment>
          );
        })}
      </div>
    </NestedContainer>
  );
}
