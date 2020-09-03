/* istanbul ignore file */
import React from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import ContentItem from "../ContentItem";
import ItemDetails from "../ItemDetails";
import { StoreContext } from "../../store";

export default () => {
  const [state, dispatch] = React.useContext(StoreContext);

  function showdetails(claim) {
    dispatch({ type: "showDetails", payload: claim });
  }

  return (
    <>
      {/* {state.details.display ? "T" : "F"}
      {JSON.stringify(state.displayData)} */}
      {
        <div
          className={`${styles.contentWrapper} ${
            state.darkMode ? styles.dark : ""
            }`}
        >
          <div className={styles.contentItemWrapper}>
            {state.details.display ? (
              <ItemDetails />
            ) : (
                <>
                  <Search />
                  {state.displayData &&
                    state.displayData.map((claim, index) => (
                      <ContentItem
                        index={index}
                        key={index}
                        claim={claim}
                        showdetails={showdetails}
                      />
                    ))}
                </>
              )}
          </div>
        </div>
      }
    </>
  );
};
