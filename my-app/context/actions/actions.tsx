export const SET_PERSONAL_FORM = "SET_PERSONAL_FORM";
export const CLEAR_ALL_VALUES = "CLEAR_ALL_VALUES";

export const setForm = (value: object) => ({
  type: SET_PERSONAL_FORM,
  payload: value,
});

export const clearAllValues = () => ({
  type: CLEAR_ALL_VALUES,
  payload: {},
});
