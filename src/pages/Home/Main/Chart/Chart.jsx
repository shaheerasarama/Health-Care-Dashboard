import React from "react";
import HealthMetrics from "../HealthMetrics/HealthMetrics";
import { LineChart } from "./LineChart";
export default function Chart({ singlePatient }) {
  return (
    <div>
      <h3
        className="card-title-24pt capitalize"
        style={{ marginBottom: "30px" }}
      >
        Diagnosis History
      </h3>
      <div
        style={{
          backgroundColor: "#F4F0FE",
          borderRadius: "12px",
        }}
      >
        <div
          className="flex"
          style={{
            alignItems: "start",
            padding: "16px",
            justifyContent: "start",
          }}
        >
          <div style={{ width: "80%" }}>
            <div
              className="flex"
              style={{ width: "95%", marginBottom: "15px" }}
            >
              <h3 className="inner-card-title-18pt capitalize">
                Blood Pressure
              </h3>
              <div
                className="flexGap"
                style={{ alignItems: "center", gap: "10px" }}
              >
                <p className="body-regular-14">Last 6 months</p>
                <img
                  src="sources/images/HealthCareDashboard/expand_more_FILL0_wght300_GRAD0_opsz24.png"
                  alt=""
                />
              </div>
            </div>
            <LineChart />
          </div>
          <div style={{ width: "25%", boxSizing: "border-box" }}>
            <div
              className="metrics"
              style={{
                borderBottom: "1px solid #cbc8d4",
                paddingBottom: "10px",
                marginBottom: "15px",
              }}
            >
              <div
                className="heading flexGap"
                style={{ gap: "5px", marginBottom: "8px" }}
              >
                <div
                  className="circleHading"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "#E66FD2",
                    borderRadius: "50%",
                  }}
                ></div>
                <h5 className="body-emphasized-14pt">Systolic</h5>
              </div>
              <p className="inner-card-title-18pt" style={{ margin: "10px 0" }}>
                160
              </p>
              <div className="status flexGap" style={{ gap: "5px" }}>
                <img
                  src="sources/images/HealthCareDashboard/ArrowUp.png"
                  alt=""
                />
                <span
                  className="body-regular-14"
                  style={{ textWrap: "nowrap" }}
                >
                  Higher than Average
                </span>
              </div>
            </div>
            <div className="metrics" style={{ paddingBottom: "10px" }}>
              <div
                className="heading flexGap"
                style={{ gap: "5px", marginBottom: "8px" }}
              >
                <div
                  className="circleHading"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "#8C6FE6",
                    borderRadius: "50%",
                  }}
                ></div>
                <h5 className="body-emphasized-14pt">Diastolic</h5>
              </div>
              <p className="inner-card-title-18pt" style={{ margin: "10px 0" }}>
                78
              </p>
              <div className="status flexGap" style={{ gap: "5px" }}>
                <img
                  src="sources/images/HealthCareDashboard/ArrowUp.png"
                  alt=""
                />
                <span
                  className="body-regular-14"
                  style={{ textWrap: "nowrap" }}
                >
                  Lower than Average
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HealthMetrics singlePatient={singlePatient} />
    </div>
  );
}