import React, { useContext } from "react";
import styles from "./HealthMetrics.module.css";
import { PatientsContext } from './../../Home';

export default function HealthMetrics() {
  const {singlePatient} = useContext(PatientsContext);
  let metrics = singlePatient["diagnosis_history"][0];
  return (
    <>
      <div className={`${styles.metricsCards} flex`}>
        <div className={`${styles.metricCard}`}>
          <img
            src="sources/images/HealthCareDashboard/respiratory rate@2x.png"
            alt=""
          />
          <h5 className="body-regular-14">Respiratory Rate</h5>
          <p className="card-title-24pt">
            {metrics["respiratory_rate"].value} bpm
          </p>
          <span className="body-regular-14">
            {metrics["respiratory_rate"].levels}
          </span>
        </div>
        <div className={`${styles.metricCard}`}>
          <img
            src="sources/images/HealthCareDashboard/temperature@2x.png"
            alt=""
          />
          <h5 className="body-regular-14"> Temperature </h5>
          <p className="card-title-24pt">{metrics["temperature"].value} bpm</p>
          <span className="body-regular-14">
            {metrics["temperature"].levels}
          </span>
        </div>
        <div className={`${styles.metricCard}`}>
          <img
            src="sources/images/HealthCareDashboard/HeartBPM@2x.png"
            alt=""
          />
          <h5 className="body-regular-14"> Heart Rate </h5>
          <p className="card-title-24pt">{metrics["heart_rate"].value} bpm</p>
          <div className={`flex ${styles.triangleContainer}`}>
            <div className={styles.triangle}></div>
            <span className="body-regular-14">
              {metrics["heart_rate"].levels}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
