import { createStore, combineReducers } from "redux";
import storeCount from'./storeCount';
import eachOne from "./storeE";
import storeN from "./storeN";
const reduxStor = combineReducers({
storeCount,
eachOne,
storeN
})

export default function  configData(){
    return createStore(reduxStor)
}