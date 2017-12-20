import * as Vuex from "vuex";
import { enthousiasm } from "./enthousiasm";
import { authentication } from "./authentication";

export const createStore = () => new Vuex.Store({
    modules: {
        enthousiasm,
        authentication
    }
});