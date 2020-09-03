import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "../../store";
import SearchText from "./SearchText";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { initialState } from "../../reducers";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("SearchText with ReactDOM should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreContext.Provider value={[initialState, () => { }]}>
        <Router>
          <SearchText />
        </Router>
      </StoreContext.Provider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("searchSection");
});
