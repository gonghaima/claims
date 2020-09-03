/* istanbul ignore file */
import mockedClaimsData from "../mocks/claimsData.json";

const claimsDataPromise = () =>
  new Promise(resolve => {
    resolve(mockedClaimsData);
  });

export default claimsDataPromise;
