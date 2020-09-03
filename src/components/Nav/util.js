/* istanbul ignore file */
import React from "react";
import { send } from "../../common";

export const generateNavItems = (
  children,
  key,
  displayText,
  qVal,
  styleSelected,
  dispatch
) => (
    <li key={key} className={`${qVal === key ? styleSelected : ""}`}>
      <button onClick={e => send(dispatch, "setAssessor")(displayText)} data-test-id={key}>
        <div>{children}</div>
        <div>
          <span>{displayText}</span>
        </div>
      </button>
    </li>
  );
