import { applyMiddleware, createStore } from "redux"
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.log("Action100", JSON.stringify(action))
    console.log("Before state", JSON.stringify(store.getState()))

    const upComingState = [action].reduce(rootReducer, store.getState())
    console.log("Upcoming", JSON.stringify(upComingState))

    return next(action)
}
const store = createStore(rootReducer, applyMiddleware(myLogger))

export default store