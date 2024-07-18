import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    boxShadow: theme.shadows[3],
  },
  statisticValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color : "white",
  },
  statisticLabel: {
    fontSize: '1rem',
    color : "white",
  },
 
}));

const counterSection = [
  { value: '10M+', label: 'End Users' },
  { value: '20K+', label: 'Trust Vuexy' },
  { value: '5,000+', label: 'Resolved Tickets' },
  { value: '600+', label: '5 ⭐ Reviews' },
];

const CounterSection = () => {
  const classes = useStyles();

  return (
    <Container sx={{ width: '100%', padding: 4, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4}>
        {counterSection.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper className={classes.paper} sx={{ backgroundColor: "black" }}>
              <Typography className={classes.statisticValue}>
                {stat.value}
              </Typography>
              <Typography className={classes.statisticLabel}>
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CounterSection;
