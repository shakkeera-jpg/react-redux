import { applyMiddleware, createStore } from "redux";
import UserReducer from "./Users";
import { thunk } from "redux-thunk";


const Store=createStore(UserReducer,applyMiddleware(thunk));
 
export default Store