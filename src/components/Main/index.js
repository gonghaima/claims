import React from "react";
import styles from "./Main.module.css";
import { StoreContext } from "../../store";
import Loading from "../Loading";

export default ({ children }) => (
  <StoreContext.Consumer>
    {([state]) => {
      /* istanbul ignore next */
      return state.initialised ? (
        <div className={styles.main}>{children}</div>
      ) : (
        <Loading />
      );
    }}
  </StoreContext.Consumer>
);
