import React from "react";
import PropTypes from "prop-types";
import { LabelText } from "../../typography/typography";
import styles from "./Service.module.css";

const Service = ({ service }) => {
  return (
    <div style={{ background: service.background }} className={styles.service}>
      <div>{service.icon}</div>
      <LabelText color={service.color} margin="0.5rem">
        {service.text}
      </LabelText>
    </div>
  );
};

Service.propTypes = {};

export default Service;
