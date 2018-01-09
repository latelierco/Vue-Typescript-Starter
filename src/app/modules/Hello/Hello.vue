<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <img :src="img">
        Name: <input v-model="name" type="text">
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        {{ aProp }} and {{ aSecondProp }}
        <button @click="changeVal(5)">Modify value of 3712</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import * as enthousiasm from "../../store/enthousiasm/enthousiasm";


@Component({ name: "hello-component" })
export default class HelloComponent extends Vue {
    @Prop() aProp: string;
    @Prop() initialEnthusiasm: number;
    @Prop() aSecondProp: number;
    name: string = "World";

    enthusiasm = this.initialEnthusiasm;

    data() {
        return {
            img: "./static/logo.png"                
        }
    }

    @Emit('change')
    changeVal(n: number) {  }

    increment() { 
        enthousiasm.dispatchEnthousiasmInc( this.$store );
    }

    decrement() {
        enthousiasm.dispatchEnthousiasmDec( this.$store );
    }

    addTwo(n: number): number {
        return n + 2;
    }

    get exclamationMarks() {
        if( process.env.NODE_ENV === "test" ) return "";
        return Array( enthousiasm.readEnthousiasm( this.$store ) +1 ).join( "!" ); 
    }
}
</script>

<style>
    .greeting {
        font-size: 20px;
    }
</style>
