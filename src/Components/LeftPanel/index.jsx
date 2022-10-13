import React from "react";
import { details } from "../../utils/const";
import styles from "./.module.css";

const LeftPanel = () => {
  return (
    <div className={styles["left-panel"]}>
      <div className={styles["greetings"]}>
        Hi! I Am <span>{details.position}</span>
        <p>{details.full_name}</p>
      </div>
    </div>
  );
};

export default LeftPanel;
