import React, { useContext } from "react";
import Chart from "./Chart/Chart";
import DiagnosticList from "./DiagnosticList/DiagnosticList";
import styles from './Main.module.css';
import { PatientsContext } from './../Home';

export default function Main() {
  const { singlePatient } = useContext(PatientsContext);
  return (
    <div className={styles.main}>
      <Chart singlePatient={singlePatient}/>
      <DiagnosticList singlePatient={singlePatient}/>
    </div>
  );
}
