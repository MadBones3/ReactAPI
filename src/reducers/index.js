import { combineReducers } from "redux";
import gameReducers from "./gamesReducers";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
    games: gameReducers,
    detail: detailReducer, 

});

export default rootReducer;