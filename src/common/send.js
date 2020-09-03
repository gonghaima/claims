/* istanbul ignore file */
export const send = (dispatch, type) => value => {
  dispatch({ type, payload: value });
};
