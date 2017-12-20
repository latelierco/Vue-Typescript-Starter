<template>
    <hello-component v-on:change="changeVal($event)" :aProp="aProp" :aSecondProp="aSecondProp"/>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import HelloComponent from "../modules/hello/Hello.vue";

    @Component({
        name: "hello-page",
        components: { HelloComponent }
    })
    export default class HelloPage extends Vue {
        aProp: string = "my property";  // it's just for example, because this binding props is useless in fact. 
                                        // Do not try to mutate this variable from child, otherwise 
                                        // you'll have a direct mutation property from child which is a bad practice. App will throw an exception. Use emit decorator from 
                                        // vue-property-decorator instead
        aSecondProp: number = 3712;

        changeVal(e: number) {
            this.aSecondProp += e ;
        }
    }
</script>

<style lang="scss" scoped>
    .greeting {
        font-size: 20px;
    }
</style>
