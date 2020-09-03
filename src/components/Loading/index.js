import React from "react";
import "./Loading.scss";
import { Loading } from "../../icons";
export default () => {
  return (
    <div className="fullScreenWrapper">
      <div className="loader-ios">
        <Loading />
      </div>
    </div>
  );
};
