import React, { createContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import Main from "./Main/Main";
import Patient from "./Patient/Patient";
import styles from "./Home.module.css";
export let PatientsContext = createContext();

export default function Home() {
  const [patients, setPatients] = useState([]);
  const [singlePatient,setSinglePatient] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      let response;
      try {
        const username = "coalition";
        const password = "skills-test";
        const authString = `${username}:${password}`;
        const encodedAuthString = btoa(authString);

        response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${encodedAuthString}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPatients(data);
        setSinglePatient(data.find((pa) => pa.name === "Jessica Taylor"));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (patients.length === 0) {
    return <>waiting</>;
  }
  return (
    <>
      <LayoutContainer className={`${styles.mainContainer} flex`}>
        <PatientsContext.Provider value={{ patients, singlePatient }}>
          <Sidebar />
          <Main />
          <Patient />
        </PatientsContext.Provider>
      </LayoutContainer>
    </>
  );
}
