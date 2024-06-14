import React, { useContext } from 'react';
import styles from './DiagnosticList.module.css';
import { PatientsContext } from './../../Home';
import ScrollBar from '../../../../components/ScrollBar/ScrollBar';

export default function DiagnosticList() {
  const { singlePatient } = useContext(PatientsContext);
  let diagnostic = singlePatient["diagnostic_list"];
  
  return (
    <div>
      <h3 className="card-title-24pt capitalize">Diagnostic List</h3>
      <div className={styles.tableContainer}>
        <ScrollBar containerHeight="210px" thumbHeight="100px"/>
        <div className={`${styles.tableRow} ${styles.tableHeader}`}>
          <div className={`${styles.tableCell} body-emphasized-14pt`}>Problem/Diagnosis</div>
          <div className={`${styles.tableCell} body-emphasized-14pt`}>Description</div>
          <div className={`${styles.tableCell} body-emphasized-14pt`}>Status</div>
        </div>
        {diagnostic.map((diagnostic, index) => (
          <div className={styles.tableRow} key={index}>
            <div className={`${styles.tableCell} body-regular-14`}>{diagnostic.name}</div>
            <div className={`${styles.tableCell} body-regular-14`}>{diagnostic.description}</div>
            <div className={`${styles.tableCell} body-regular-14`}>{diagnostic.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
