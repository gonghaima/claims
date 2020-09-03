import React from "react";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";
import { generateNavItems } from "./util";

export default () => {
  const [state, dispatch] = React.useContext(StoreContext);
  const icons = [AccountCircle, Star, VerifiedUser, People, Inbox];

  const navItemsData = Array.from(
    state.sourceData.claims.reduce((aclr, cVal, idx) => {
      const Icon = icons[idx] || icons[0];
      const key = btoa(cVal.assignedTo);
      if (!aclr.has(key)) {
        const htmlTag = { icon: <Icon />, key: btoa(cVal.assignedTo), display: cVal.assignedTo };
        aclr.set(key, htmlTag);
      }
      return aclr;
    }, new Map())
  )
    .map(([_, val]) => val);

  return (
    <div className={`${styles.nav} ${state.darkMode ? styles.dark : ""}`}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          {navItemsData.map(({ icon, key, display }) =>
            generateNavItems(
              icon,
              key,
              display,
              state.selected.queryValue,
              styles.selected,
              dispatch
            )
          )}
        </ul>
      </div>
    </div>
  );
};
