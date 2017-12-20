import Vue from "vue";
import Vuex from "vuex";
import HelloPage from "./app/pages/Hello-Page.vue";
import router from "./router/router";
import { createStore } from "./app/store";

Vue.use( Vuex );

let store = createStore();

let v = new Vue({
    el: "#app",
    template: `        
        <div class="main"> 
            <router-view></router-view>
        </div>
    `,
    store,
    router,
    data: { },
    components: {
        HelloPage
    }
});
