import React from "react";
import Button from "../../../components/atoms/button/Button";
import { H1 } from "../../../components/typography/typography";
import styles from "./Main.module.css";
import NavBar from "../../../components/atoms/nav-bar/NavBar";
import image from "../../../divine-star.png";

const Main = ({}) => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <H1>Alege sa fii divina in fiecare zi.</H1>
        <Button text="programeaza-te" />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
      </div>
    </div>
  );
};

export default Main;
