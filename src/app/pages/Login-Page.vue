<template>
  <login-component/>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import LoginComponent from "../modules/login/Login.vue";

    @Component( { name: "login-page", components: { LoginComponent } } )
    export default class LoginPage extends Vue {

    }
</script>
<style lang="scss" scoped>

</style>
