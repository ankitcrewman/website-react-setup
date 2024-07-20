import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CounterSection.css';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    color: '#fff', 
    boxShadow: theme.shadows[3],
    backgroundColor: 'black', 
    marginLeft: '4px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'red', 
    },
  },
  statisticValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  statisticLabel: {
    fontSize: '1rem',
    color: 'white',
  },
}));

const counterSection = [
  { value: '10M+', label: 'End Users' },
  { value: '20K+', label: 'Trust Vuexy' },
  { value: '5,000+', label: 'Resolved Tickets' },
  { value: '600+', label: '5 ⭐ Reviews' },
  { value: '800+', label: 'New Customers' },
  { value: '1,200+', label: 'Projects Completed' },
];

const CounterSection = () => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className={classes.container} sx={{ width: '100%', padding: 4 }}>
      <div className={classes.sliderWrapper}>
        <Slider {...settings}>
          {counterSection.map((stat, index) => (
            <div key={index}>
              <Paper className={classes.paper}>
                <Typography className={classes.statisticValue}>
                  {stat.value}
                </Typography>
                <Typography className={classes.statisticLabel}>
                  {stat.label}
                </Typography>
              </Paper>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default CounterSection;
