/* istanbul ignore file */
export const displayState = {
  darkMode: false,
  initialised: false,
  queryString: "",
  displayData: [],
  details: {
    display: false,
    item: null
  },
  showMenu: true
};

export const displayReducers = {
  showDetails: (state, payload) => {
    state.details.display = true;
    state.details.item = payload;
    return state;
  },
  showMaster: state => {
    state.details.display = false;
    return state;
  },
  toggleDisplayMode: (state, payload) => {
    const data = {
      ...state,
      darkMode: !state.darkMode
    };
    return data;
  },
  updateMenuDisplay: (state, payload) => {
    console.log(payload);

    if (state.showMenu === payload.showMenu) return state;
    const data = {
      ...state,
      showMenu: payload.showMenu
    };
    return data;
  },
};
