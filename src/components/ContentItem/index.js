/* istanbul ignore file */
import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./ContentItem.module.css";
import { Arrow, Location } from "../../icons";
import Avatar from "../Avatar";
import config from "../../config";

export default ({ claim, showdetails, index }) => {
  const style = useSpring(config.animate);
  return (
    <animated.div
      style={style}
      className={styles.contentItemWrapper}
      data-test-id="dataContent"
    >
      <Avatar>
        <Location />
      </Avatar>
      <div className={styles.contentItemDetails}>
        <div className={styles.section}>
          <div className={styles.name}>{claim.claimant}</div>
          <small>{claim.status}</small>
        </div>
        <div className={styles.detailsSection}>
          <small>Updated: {claim.updated_hours} hrs</small>
          <small>Exceeded: {claim.exceeded_hours} hrs</small>

          <button
            data-test-id={`detailsButton${index}`}
            onClick={() => showdetails(claim)}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </animated.div>
  );
};
