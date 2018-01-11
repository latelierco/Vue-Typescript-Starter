<template>
    <div class="login">
        <input id="username" type="text" v-model="user.username">
        <input id="password" type="password" v-model="user.password">
        <button id="login" @click="login()">Login</button>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import VueRouter from "vue-router";
    import * as enthousiasm from "../../store/enthousiasm/enthousiasm";
    import * as authentication from "../../store/authentication/authentication";
    
    @Component({ name: "login-component" })
    export default class LoginComponent extends Vue {
        user: any = {
            username: "",
            password: ""
        }

        login() {
            authentication.dispatchLogUser( this.$store, this.user )
                .then( () => {
                    this.$router.push( "/" );
                })
                .catch(err => err);
        }
    }
</script>