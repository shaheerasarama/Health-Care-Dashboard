import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { PatientsContext } from "../Home";
import ScrollBar from "../../../components/ScrollBar/ScrollBar";
export default function Sidebar() {
  const { patients } = useContext(PatientsContext);
  return (
    <div className={styles.sidebar}>
      <ScrollBar containerHeight="941px" thumbHeight="100px" />
      <div className={`${styles.patientsBar} flex`}>
        <h3 className="card-title-24pt capitalize">patients</h3>
        <img
          src="sources/images/HealthCareDashboard/search_FILL0_wght300_GRAD0_opsz24.png"
          alt=""
        />
      </div>
      <div className={`${styles.patientsList}`}>
        {patients.map((patient, index) => (
          <div key={index} className={`${styles.patientitem} flex`}>
            <div className="flex">
              <img src={patient["profile_picture"]} width="48px" alt="" />
              <div className={`${styles.patientitemInfo}`}>
                <h4 className="body-emphasized-14pt">{patient.name}</h4>
                <span className="body-secondary-info-14pt">
                  {patient.gender}, {patient.age}
                </span>
              </div>
            </div>
            <img
              src="sources/images/HealthCareDashboard/more_horiz_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
