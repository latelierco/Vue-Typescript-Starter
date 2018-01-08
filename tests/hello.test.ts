let Vue = require("vue");
let HelloComponent = require("../src/app/modules/Hello/Hello.vue");

describe( "Sample", () => {
    it("Should works", () => {
        expect( true ).toBe( true );
    });
});

describe("Test w/ Vue component", () => {
    it("Works or not?", () => {
        const HelloCmp = Vue.extend( HelloComponent );
        const vm = new HelloCmp().$mount();
        expect(vm).not.toBe(undefined);
        expect(vm.name).toBe("World");
    });
});