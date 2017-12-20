import Vue, { ComponentOptions, AsyncComponent } from 'vue';
import VueRouter from 'vue-router';
import * as localforage from "localforage";
import HelloPage from "../app/pages/Hello-Page.vue";
import LoginPage from "../app/pages/Login-Page.vue";
import { AuthenticationState } from '../app/store/authentication/authenticationState';

Vue.use( VueRouter );

const router = new VueRouter({
    routes: [
        {
            name: "default-route",
            path: "",
            redirect: "/hello"
        },
        {
            name: "hello-route",
            path: "/hello", 
            component: HelloPage
        },
        {
            name: "login-route",
            path: "/login", 
            component: LoginPage
        }
    ]
});

router.beforeEach( (to, from, next) => {  
    if( to.path !== "/login" ) {
        checkIfHaveAppContext()
            .then( ctx => {
                if( ctx ) next();
                else next( { path: "/login" } );
            })
            .catch( err => err )
    } else {
        checkIfHaveAppContext()
            .then( ctx => {
                if( ctx ) next( { name: "default-route" } );
                else next();
            })
            .catch(err => err)
    }
});

function checkIfHaveAppContext(): Promise<boolean> {
    return localforage.getItem( "user_context" )
        .then( (ctx: any) => { 
            if( !ctx ) return false;
            if( ctx && !ctx.userIsLogged ) return false;
            if( ctx && ctx.userIsLogged ) return true;
        })  
        .catch( err => err );
}

export default router;