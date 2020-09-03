import React from "react";
import styles from "./Header.module.scss";
import { BurstMode, ChromeReaderMode, Dehaze } from "../../icons";
import { StoreContext } from "../../store";
import { toggleDisplay } from "./util";

export default () => (
  <StoreContext.Consumer>
    {([state, dispatch]) => {
      return (
        <div
          className={`${styles.header} ${state.darkMode ? styles.dark : ""}`}
        >
          <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
              <a className={styles.iconWrapper} href="/">
                <Dehaze />
              </a>
              <h4>Swiss Re</h4>
            </div>
            <div
              className={styles.icon}
              data-test-id="switchMode"
              onClick={toggleDisplay(dispatch)}
            >
              {state.darkMode ? <BurstMode /> : <ChromeReaderMode />}
            </div>
          </div>
        </div>
      );
    }}
  </StoreContext.Consumer>
);
