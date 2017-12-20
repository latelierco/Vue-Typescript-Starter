<template>
    <hello-component :name="name"/>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import HelloComponent from "../modules/hello/Hello.vue";

    @Component({
        name: "hello-page",
        components: { HelloComponent }
    })
    export default class HelloPage extends Vue {
        name: string = "world";
    }
</script>

<style lang="scss" scoped>
    .greeting {
        font-size: 20px;
    }
</style>
