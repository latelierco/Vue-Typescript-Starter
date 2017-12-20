import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { EnthousiasmState } from "./enthousiasmState";
import { State as RootState } from "../state";

type EnthousiasmContext = ActionContext<EnthousiasmState, RootState>;

export const enthousiasm = {
    namespaced: true,
    state: {
        enthousiasm: 0
    },
    getters: {
        getEnthousiasm(state: EnthousiasmState): number { 
            return state.enthousiasm;
        }
    },
    mutations: {
        increaseEnthousiasm(state: EnthousiasmState): void { 
            state.enthousiasm++;
        },
        decreaseEnthousiasm(state: EnthousiasmState): void {
            if( state.enthousiasm < 1 ) state.enthousiasm = 0;
            else state.enthousiasm--;
        }
    },
    actions: {
        async callExternalApiForExample(): Promise<number> {
            throw new Error( "Not implemented yet" );
        }
    }
};

const { commit, read, dispatch } = getStoreAccessors<EnthousiasmState, RootState>( "enthousiasm" );
const getters = enthousiasm.getters;
const mutations = enthousiasm.mutations;

export const readEnthousiasm = read( getters.getEnthousiasm );

export const dispatchEnthousiasmInc = commit( mutations.increaseEnthousiasm );
export const dispatchEnthousiasmDec = commit( mutations.decreaseEnthousiasm );
