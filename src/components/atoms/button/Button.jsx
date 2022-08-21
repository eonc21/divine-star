import React from "react";
import { LabelText } from "../../typography/typography";
import styles from "./Button.module.css";

export const Button = ({ text }) => {
  return (
    <div className={styles.button}>
      <button className={styles.remove}>
        <LabelText color="white">{text}</LabelText>
      </button>
    </div>
  );
};

export default Button;
