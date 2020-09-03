import React from "react";
import styles from "./SubHeader.module.scss";
import { MoreVert, Sort, Settings, ViewModule } from "../../icons";
import { StoreContext } from "../../store";

export default ({ displayState = { visible: true } }) => (
  <StoreContext.Consumer>
    {([state]) => {
      return (
        <div
          className={`${styles.subheader} ${state.darkMode ? styles.dark : ""} ${state.showMenu ? "" : styles.hide}`}
          data-test-id={state.selected.queryValue}
        >
          <h3>Assessors</h3>
          <div className={styles.container}>{state.selected.displayText}</div>
          <div className={styles.iconWrapper}>
            <ViewModule />
            <Sort />
            <Settings />
            <MoreVert />
          </div>
        </div>
      );
    }}
  </StoreContext.Consumer>
);
