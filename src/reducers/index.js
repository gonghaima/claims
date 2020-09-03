import { claimReducers, sourceDatatate } from "./claim";
import { displayReducers, displayState } from "./display";

export const initialState = { ...sourceDatatate, ...displayState };

export default {
  ...claimReducers,
  ...displayReducers
};
