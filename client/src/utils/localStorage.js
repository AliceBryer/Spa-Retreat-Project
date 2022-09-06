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

export const removeTreatmentId = (treatmentId) => {
  const savedTreatmentIds = localStorage.getItem("saved_treatments")
    ? JSON.parse(localStorage.getItem("saved_treatments"))
    : null;

  if (!savedTreatmentIds) {
    return false;
  }

  const updatedSavedTreatmentIds = savedTreatmentIds?.filter(
    (savedTreatmentId) => savedTreatmentId !== treatmentId
  );
  localStorage.setItem(
    "saved_treatments",
    JSON.stringify(updatedSavedTreatmentIds)
  );

  return true;
};
