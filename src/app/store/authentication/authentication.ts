import { ActionContext, Store } from "vuex";
import * as localForage from "localforage";
import axios from "axios";
import { getStoreAccessors } from "vuex-typescript";
import { AuthenticationState, User } from "./authenticationState";
import { State as RootState } from "../state";
import { UserLogin } from "../../models/userLogin";

type AuthenticationContext = ActionContext<AuthenticationState, RootState>;

export const authentication = {
    namespaced: true,
    state: {
        user: {},
        userIsLogged: false
    },
    getters: {
        
    },
    actions: {
        async tryAuthenticate(context: AuthenticationContext, user: UserLogin): Promise<void> {
            //... Some call to API
            let fakeUser: User = { account: {}, apikey: "test-key", jwt: "test-jwt" };
            commitSetUserInformations( context, fakeUser );
            
        },
        async logout(): Promise<void> {
            throw new Error( "Not implemented yet" );
        }
    },
    mutations: {
        setUserInformations(state: AuthenticationState, user: User): void { 
            state.user.account = user.account;
            state.user.apikey = user.apikey;
            state.user.jwt = user.jwt;
            state.userIsLogged = true;
            localForage.setItem( "user_context", state );
        },
        unSetUserInformations(state: AuthenticationState): void {
            localForage.removeItem( "user_context" );
            state.user.account = {};
            state.user.apikey = "";
            state.user.jwt = "";
            state.userIsLogged = false;
        }
    }
};

const { commit, read, dispatch } = getStoreAccessors<AuthenticationState, RootState>( "authentication" );
const getters = authentication.getters;

const actions = authentication.actions;
export const dispatchLogUser = dispatch( actions.tryAuthenticate );
export const dispatchLogoutUser = dispatch( actions.logout );

const mutations = authentication.mutations;
export const commitUnsetUserInformations = commit( mutations.unSetUserInformations );
export const commitSetUserInformations = commit( mutations.setUserInformations );