import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
    todos: todosReducer 
})

export const store = createStore(rootReducer, composeWithDevTools())