import {createStore} from "redux";
import {todosReducer} from "./todosReducer";

export const store = createStore(todosReducer);
