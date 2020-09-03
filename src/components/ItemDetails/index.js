/* istanbul ignore file */
import React from "react";
import moment from "moment"
import "./table.scss";
import styles from "./ItemDetails.module.css";
import { StoreContext } from "../../store";
import { useSpring, animated } from "react-spring";
import { send } from "../../common";
import config from "../../config";

export default () => {
  const [state, dispatch] = React.useContext(StoreContext);
  const showMaster = send(dispatch, "showMaster");
  const style = useSpring(config.animate);

  return (
    <animated.div
      style={style}
      className={styles.contentItemWrapper}
      data-test-id="itemDetailtitle"
    >
      <h1
        className={styles.detailtitle}
        data-test-id="dataContent"
      >{`${state.details.item.claimant} claim`}</h1>
      <section className="performance-facts">
        <table className="performance-facts__table">
          <tbody>
            <tr>
              <th colSpan="2">
                <b>Details</b>
              </th>
              <td></td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>ID</th>
              <td>{state.details.item.id}</td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Name</th>
              <td>{state.details.item.claimant}</td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Created: </th>
              <td>{moment(state.details.item.createdAt).format('DD-MM-YYYY')}</td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Last Updated: </th>
              <td>{moment(state.details.item.updatedAt).format('DD-MM-YYYY')}</td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Status</b>
              </th>
              <td></td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Assigned To:</th>
              <td>
                <b>{state.details.item.assignedTo}</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Status</th>
              <td>
                <b>{state.details.item.status}</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Hours since last upate:</th>
              <td>
                <b>{state.details.item.updated_hours}</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Hours exceed SLA:</th>
              <td>
                <b>{state.details.item.exceeded_hours}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <button
        className="back-button"
        data-test-id="backButton"
        onClick={() => showMaster()}
      >
        Back
      </button>
    </animated.div>
  );
};
