import React from "react";
import styles from "./typography.module.css";

const H1 = ({ children, color }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

const H2 = ({ children, color, padding, margin }) => {
  return (
    <h2 className={styles.h2} style={{ color, padding, margin }}>
      {children}
    </h2>
  );
};

const H3 = ({ children, color }) => {
  return <h1>{children}</h1>;
};

const Text = ({ children, color }) => {
  return <text className={styles.text}>{children}</text>;
};

const LabelText = ({ children, color, padding, margin }) => {
  return (
    <text className={styles.labelText} style={{ color, padding, margin }}>
      {children}
    </text>
  );
};

export { H1, H2, H3, Text, LabelText };
