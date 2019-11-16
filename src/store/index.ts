import {playersReducer} from "./players/reducers"
import { combineReducers, createStore } from "redux"

const rootReducer = combineReducers({
    players: playersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(rootReducer);
}