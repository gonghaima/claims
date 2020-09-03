/* istanbul ignore file */
import moment from "moment";
import { sortBy } from "lodash";

export const sourceDatatate = {
  data: [],
  filteredData: [],
  message: "",
  query: "all",
  selected: { queryValue: "all", displayText: "All" }
};

export const claimReducers = {
  setClaimsData: (state, payload) => {
    const slas = new Map();
    payload.slas.map(sla => {
      return slas.set(sla.status, sla.hours);
    });

    const claims = payload.claims.map(claim => {
      const updated_hours = moment(moment.now()).diff(moment(claim.updatedAt), 'hours');
      claim['updated_hours'] = updated_hours;
      claim['exceeded_hours'] = updated_hours - slas.get(claim.status) || 0;
      return claim;
    });
    payload['claims'] = sortBy(claims, claim => -claim.exceeded_hours);

    const data = {
      ...state,
      sourceData: payload,
      filteredData: payload.claims,
      displayData: payload.claims,
      initialised: true
    };
    return data;
  },
  searchClaim: (state, payload) => {
    console.log(`search payload ${payload}`);
    if (payload === "") {
      state.displayData = state.filteredData;
      return state;
    }
    state.displayData = state.filteredData.filter(claim => claim.claimant.toLowerCase().includes(payload.toLowerCase()));
    return state;
  },
  setAssessor: (state, payload) => {
    if (!state || !state.sourceData) return state;
    const fData = state.sourceData.claims.filter(claim => claim.assignedTo === payload);;
    state.filteredData = fData;
    state.displayData = fData;
    state.details.display = false;
    state.selected = { queryValue: btoa(payload), displayText: payload };
    return state;
  }
};
