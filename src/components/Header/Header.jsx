import React from "react";
import styles from "./Header.module.css";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

function Header() {
  return (
    <header>
      <LayoutContainer>
        <nav className="flex">
          <div className={`${styles.logo} flex`}>
            <div className={`${styles.menuIcon}`}>
              <img src="sources/images/menuIcon.png" alt="" />
            </div>
            <img src="sources/images/HealthCareDashboard/TestLogo.png" alt="" />
          </div>
          <ul className={`flex ${styles.navLink}`} id="navLinks">
            <li>
              <a href="/" className="flex">
                <img
                  src="sources/images/HealthCareDashboard/home_FILL0_wght300_GRAD0_opsz24.png"
                  alt=""
                />
                <span className="body-emphasized-14pt capitalize">
                  overview
                </span>
              </a>
            </li>
            <li className={`${styles.active}`}>
              <a href="/" className="flex">
                <img
                  src="sources/images/HealthCareDashboard/patients.png"
                  alt=""
                />
                <span className="body-emphasized-14pt capitalize">
                  patients
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="flex">
                <img
                  src="sources/images/HealthCareDashboard/calendar_today_FILL0_wght300_GRAD0_opsz24.png"
                  alt=""
                />
                <span className="body-emphasized-14pt capitalize">
                  schedule
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="flex">
                <img
                  src="sources/images/HealthCareDashboard/chat_bubble_FILL0_wght300_GRAD0_opsz24.png"
                  alt=""
                />
                <span className="body-emphasized-14pt capitalize">
                  messages
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="flex">
                <img
                  src="sources/images/HealthCareDashboard/credit_card_FILL0_wght300_GRAD0_opsz24.png"
                  alt=""
                />
                <span className="body-emphasized-14pt capitalize">
                  transactions
                </span>
              </a>
            </li>
          </ul>
          <div className={`${styles.profile} flex`}>
            <div className={`${styles.profileInfo} flex`}>
              <div>
                <img
                  src="sources/images/HealthCareDashboard/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
                  alt=""
                />
              </div>
              <div className={`${styles.profileText}`}>
                <h2 className="body-emphasized-14pt">Dr. Jose Simmons</h2>
                <p className="body-secondary-info-14pt">General Practitioner</p>
              </div>
            </div>
            <img
              className={`${styles.settingImg}`}
              src="sources/images/HealthCareDashboard/settings_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
            <img
              src="sources/images/HealthCareDashboard/more_vert_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
          </div>
        </nav>
      </LayoutContainer>
    </header>
  );
}

export default Header;
