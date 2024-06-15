import React from "react";
import styles from "./LabList.module.css";
import ScrollBar from "../../../../components/ScrollBar/ScrollBar";

export default function LabList({singlePatient}) {
  return (
    <div style={{ marginTop: "30px" }} className={styles.LabList}>
      <ScrollBar containerHeight="207px" thumbHeight="51px" />
      <h3 className="card-title-24pt capitalize">Lab Results</h3>
      <div className={styles.results}>
        {singlePatient["lab_results"].map((result) => (
          <div className={`${styles.result} flex`}>
            <p className="body-emphasized-14pt capitalize">{result}</p>
            <img
              src="sources/images/HealthCareDashboard/download_FILL0_wght300_GRAD0_opsz24 (1).png "
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
