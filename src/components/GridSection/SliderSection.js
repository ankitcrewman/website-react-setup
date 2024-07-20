import React from "react";
import Slider from "react-slick";
import { Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "300px",
    background: "linear-gradient(to top right, #113155, #000000)",
    margin: "3px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.7s ease-in-out, color 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      background: "linear-gradient(to top right, #000811, #031c90)",
      color: "black",
      "& $typography": {
        color: "white",
      },
    },
  },
  typography: {
    color: "white",
    transition: "color 0.3s ease-in-out",
  },
}));

const SliderSection = ({ sections }) => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sections.map((section, index) => (
        <Box key={index} p={2}>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="h6" className={classes.typography}>
              {section.title}
            </Typography>
            <Typography className={classes.typography}>
              {section.content}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Slider>
  );
};

SliderSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SliderSection;
