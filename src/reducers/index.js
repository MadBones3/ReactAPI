import { combineReducers } from "redux";
import gameReducers from "./gamesReducers";

const rootReducer = combineReducers({
    games: gameReducers, 
});

export default rootReducer;