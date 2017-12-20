<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <img :src="img">
        Name: <input v-model="name" type="text">
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as enthousiasm from "../../store/enthousiasm/enthousiasm";


@Component({ name: "hello-component" })
export default class HelloComponent extends Vue {
    @Prop() name: string;
    @Prop() initialEnthusiasm: number;

    enthusiasm = this.initialEnthusiasm;

    data() {
        return {
            img: "./static/logo.png"                
        }
    }

    increment() { 
        enthousiasm.dispatchEnthousiasmInc( this.$store );
    }

    decrement() {
        enthousiasm.dispatchEnthousiasmDec( this.$store );
    }

    get exclamationMarks() {
        return Array( enthousiasm.readEnthousiasm( this.$store ) +1 ).join( "!" ); 
    }
}
</script>

<style>
    .greeting {
        font-size: 20px;
    }
</style>
