import React, { useContext } from "react";
import styles from "./Patient.module.css";
import PatientInfo from "./PatientInfo/PatientInfo";
import LabList from "./LabList/LabList";
import { PatientsContext } from "./../Home";

export default function Patient() {
  let { singlePatient } = useContext(PatientsContext);
  return (
    <div className={styles.PatientSection}>
      <PatientInfo singlePatient={singlePatient}/>
      <LabList singlePatient={singlePatient}/>
    </div>
  );
}
