import { combineReducers } from "redux";
import counter from "./counter";

const rootReducre = combineReducers({
  counter,
});

export default rootReducre;
export type RootState = ReturnType<typeof rootReducre>;
