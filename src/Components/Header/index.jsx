import React from "react";
import LoopProp from "../Animations/LoopProp";
import styles from "./.module.css";

const Header = ({ details, menus }) => {
  return (
    <div className={styles["header-pane"]}>
      <div className={styles["name"]}>
        {details.first_name}
        <LoopProp absolute={true} />
      </div>
      <div className={styles["header"]}>
        <div className={styles["right-pane"]}>
          {menus.map((m, i) => {
            return (
              <div key={i} className={styles["header-labels"]}>
                {m.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["last-panel"]}>
        <label>Let's Chat</label>
      </div>
    </div>
  );
};

export default Header;
