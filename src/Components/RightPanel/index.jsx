import React from "react";
import FlipImage from "../Animations/FlipImage";
import styles from "./.module.css";
import { FaAngular } from "react-icons/fa";

const RightPanel = () => {
  return (
    <div className={styles["right-panel"]}>
      <FaAngular
        style={{
          backgroundColor: "red",
          color: "white",
          width: "5vh",
          height: "5vh",
          borderRadius: "1.5vh",
        }}
      />
      <FlipImage />
    </div>
  );
};

export default RightPanel;
