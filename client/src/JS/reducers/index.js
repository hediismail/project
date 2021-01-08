import { combineReducers } from "redux";
import { userReducer } from "./user";
import { profileReducer } from "./profile";
import { publicationReducer } from "./Publication";
import { reservationReducer } from "./reservation";
export const rootReducer = combineReducers({
  userReducer,
  profileReducer,
  publicationReducer,
  reservationReducer,
});
