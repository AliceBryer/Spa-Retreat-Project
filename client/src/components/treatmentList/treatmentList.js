import React from "react";
import TreatmentItem from "../treatmentItem/treatmentItem";

function treatmentList() {
  return (
    <>
      <div>
        <h2 className="title">TREATMENT</h2>
      </div>
      <div>
        <TreatmentItem />
      </div>
    </>
  );
}

export default treatmentList;
