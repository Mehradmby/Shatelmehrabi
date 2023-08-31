import React from "react";

// Import styles
import styles from "./Loading.module.css";

const DotPluseLoading = () => {
  return (
    <div className={styles.stage}>
      <div className={styles.dot_pulse}></div>
    </div>
  );
};

export default DotPluseLoading;
