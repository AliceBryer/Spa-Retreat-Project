import React from "react";
import TreatmentItem from "./TreatmentItem";

function TreatmentList() {
  return (
    <>
      <div>
        <h2 className="title">TREATMENTS</h2>
      </div>
      <div>
        <TreatmentItem />
      </div>
    </>
  );
}

export default TreatmentList;
