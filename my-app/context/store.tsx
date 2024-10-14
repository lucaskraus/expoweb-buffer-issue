import { configureStore } from "@reduxjs/toolkit";

import { setForm } from "./actions/actions";
import reducer from "./reducers/reducer";
// ...

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const dispatchSessionExpiredAlertState = () => {
  store.dispatch(setForm({ sessionExpiredAlert: true }));
};
