import React from "react";
import styles from "./ScrollBat.module.css";
export default function ScrollBar({ containerHeight,thumbHeight }) {
  return (
    <div style={{ height: containerHeight }} className={`${styles.scrollContainer}`}>
      <div style={{ height: thumbHeight }} className={`${styles.scrollThumb}`}></div>
    </div>
  );
}
