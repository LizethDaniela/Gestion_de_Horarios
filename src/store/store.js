import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { ambienteReducer } from "../reducers/ambienteReducer";
import { authReducer } from "../reducers/authReducer";
import { docenteReducer } from "../reducers/docenteReducer";
import { materiaReducer } from "../reducers/materiaReducer";
import { semestreReducer } from "../reducers/semestreReducer";
import { studentReducer } from "../reducers/studentReducer";

const reducers = combineReducers ({
    auth: authReducer,
    student: studentReducer,
    docente: docenteReducer,
    materia: materiaReducer,
    ambientefisico: ambienteReducer,
    sem: semestreReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(reducers, enhancer);

export default store;