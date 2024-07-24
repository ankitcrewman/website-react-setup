import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Hero from "../components/Home/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import SliderSection from "../components/GridSection/SliderSection";
import InfoSectionInverse from "../components/InfoSectionInverse/InfoSectionInverse";
import CounterSection from "../components/CounterSection/CounterSection";
import "../assets/css/Home.css";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "",
    borderRadius: "10px",
    boxShadow: "1px 3px 69px #dfd9d9",
    marginTop: "10px",
    marginBottom: "10px",
    animation: "$floating 3s ease-in-out infinite",
  },
  sectionSet: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  "@keyframes floating": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(
          "http://localhost/node-js-project/react-back-end/api/sections"
        );
        setSections(response.data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  return (
    <>
      <Hero />
      <Container className={classes.container}>
        <div className={classes.sectionSet}>
          <SliderSection sections={sections} />
        </div>
        <InfoSection
          heading="Master Heading"
          imageSrc="https://img.freepik.com/free-photo/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic_23-2151488734.jpg?t=st=1721284309~exp=1721287909~hmac=155e02ea1213619cf35cf123f9ec4701aea8e5d86064e188cc182d58f80ac66e&w=996"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
        <InfoSectionInverse
          heading="Master Heading Inverse"
          imageSrc="https://img.freepik.com/free-photo/cyberpunk-woman-warrior-with-car_23-2150712322.jpg?t=st=1721283963~exp=1721287563~hmac=079f2f2e35bfdcc1921b62ede29c06e100761f729cbeef9a4ede9960951ad4a3&w=1380"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
        <InfoSection
          heading="Master Heading @"
          imageSrc="https://img.freepik.com/free-photo/person-using-futuristic-virtual-reality-headset_23-2150946731.jpg?t=st=1721284142~exp=1721287742~hmac=5f8888b0c64303343962b585a4471a687c7d801d69408c85e9b10d8f1c8a69ee&w=1380"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
        <InfoSectionInverse
          heading="Master Heading Inverse $"
          imageSrc="https://img.freepik.com/free-photo/futuristic-style-adorable-dog_23-2151107728.jpg?t=st=1721284198~exp=1721287798~hmac=8774c9dcc517cf3a260561c108dfd5bd5ac7838721db84e3116826d39f3a8ac2&w=1060"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
      </Container>
      <CounterSection />
    </>
  );
};

export default Home;
