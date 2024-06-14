import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart/Chart";
import HealthMetrics from "./HealthMetrics/HealthMetrics";
import DiagnosticList from "./DiagnosticList/DiagnosticList";
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.main}>
      <Chart />
      <HealthMetrics />
      <DiagnosticList />
    </div>
  );
}
