import React from "react";
import PropTypes from "prop-types";
import { H2, Text } from "../../../components/typography/typography";
import styles from "./About.module.css";

const About = ({}) => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <H2 margin="0 0 2rem 0">Divine Star Beauty Salon Timisoara</H2>
        <Text>
          Adevarata frumusete vine din sublim si simplitate. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore. Dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore.
        </Text>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
