import { sourceDatatate, claimReducers } from "./claim";
import mockedClaimsData from "../mocks/claimsData.json";

it("should set claim data when default payload is provided", () => {
  const setClaimsDataResult = claimReducers.setClaimsData(sourceDatatate, mockedClaimsData);
  expect(setClaimsDataResult.query).toEqual("all");
});

it("should set claim data when api payload is provided", () => {
  sourceDatatate.data = mockedClaimsData;
  sourceDatatate.filteredData = mockedClaimsData;
  const setClaimsDataResult = claimReducers.setAssessor(
    sourceDatatate,
    "John Smith"
  );
  expect(setClaimsDataResult.data.claims.length).toEqual(8);
  expect(setClaimsDataResult.selected.displayText).toEqual("All");
});
