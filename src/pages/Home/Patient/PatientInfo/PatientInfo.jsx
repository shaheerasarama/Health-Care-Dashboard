import React from "react";
import styles from "./PatientInfo.module.css";
export default function PatientInfo({singlePatient}) {
  return (
    <div className={styles.patientPersonal}>
      <div className={styles.patientPersonalInfo}>
        <img src={singlePatient["profile_picture"]} alt="" />
        <h3 className="card-title-24pt capitalize">{singlePatient.name}</h3>
      </div>
      <ul>
        <li className={`flexGap ${styles.listItemFlex}`}>
          <img src="sources/images/HealthCareDashboard/BirthIcon.png" alt="" />
          <div className="infoText">
            <h6 className="body-regular-14 capitalize">date of birth</h6>
            <span className="body-emphasized-14pt">
              {singlePatient["date_of_birth"]}
            </span>
          </div>
        </li>
        <li className={`flexGap ${styles.listItemFlex}`}>
          <img src="sources/images/HealthCareDashboard/FemaleIcon.png" alt="" />
          <div className="infoText">
            <h6 className="body-regular-14 capitalize">gender</h6>
            <span className="body-emphasized-14pt">{singlePatient.gender}</span>
          </div>
        </li>
        <li className={`flexGap ${styles.listItemFlex}`}>
          <img src="sources/images/HealthCareDashboard/PhoneIcon.png" alt="" />
          <div className="infoText">
            <h6 className="body-regular-14 capitalize">Contact Info.</h6>
            <span className="body-emphasized-14pt">
              {singlePatient["phone_number"]}
            </span>
          </div>
        </li>
        <li className={`flexGap ${styles.listItemFlex}`}>
          <img src="sources/images/HealthCareDashboard/PhoneIcon.png" alt="" />
          <div className="infoText">
            <h6 className="body-regular-14 capitalize">Emergency Contacts</h6>
            <span className="body-emphasized-14pt">
              {singlePatient["emergency_contact"]}
            </span>
          </div>
        </li>
        <li className={`flexGap ${styles.listItemFlex}`}>
          <img
            src="sources/images/HealthCareDashboard/InsuranceIcon.png"
            alt=""
          />
          <div className="infoText">
            <h6 className="body-regular-14 capitalize">Insurance Provider</h6>
            <span className="body-emphasized-14pt">
              {singlePatient["insurance_type"]}
            </span>
          </div>
        </li>
      </ul>
      <button className="body-emphasized-14pt capitalize">
        Show All Information
      </button>
    </div>
  );
}
