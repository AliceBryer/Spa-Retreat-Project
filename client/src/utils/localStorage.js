export const getSavedTreatmentIds = () => {
  const savedTreatmentIds = localStorage.getItem("saved_treatments")
    ? JSON.parse(localStorage.getItem("saved_treatments"))
    : [];

  return savedTreatmentIds;
};

export const saveTreatmentIds = (treatmentIdArr) => {
  if (treatmentIdArr.length) {
    localStorage.setItem("saved_treatments", JSON.stringify(treatmentIdArr));
  } else {
    localStorage.removeItem("saved_treatments");
  }
};
