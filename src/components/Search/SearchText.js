/* istanbul ignore file */
import React, { useState, useEffect } from "react";
import styles from "./SearchText.module.css";
import { StoreContext } from "../../store";
import { send, useDebounce } from "../../common";

export default () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setResults] = useState([]);
  /********************************************************************
   * State for search status (whether there is a pending API request) *
   ********************************************************************/
  const [isSearching, setIsSearching] = useState(false);

  const [state, dispatch] = React.useContext(StoreContext);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (
      debouncedSearchTerm ||
      (debouncedSearchTerm === "" && state.initialised)
    ) {
      setIsSearching(true);
      send(dispatch, "searchClaim")(debouncedSearchTerm);
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm, isSearching, state.initialised, dispatch]);
  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        placeholder="Search"
        onChange={e => e.stopPropagation && setSearchTerm(e.target.value)}
        className={styles.searchInput}
        data-test-id="textSearch"
      />
    </div>
  );
};
