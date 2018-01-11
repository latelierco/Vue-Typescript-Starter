let Vue = require("vue");
let HelloComponent = require("../../src/app/modules/Hello/Hello.vue");

describe( "Sample", () => {
    it("Should works", () => {
        expect( true ).toBe( true );
    });
});

describe("Hello.vue", () => {
    it("Shows how does it works", () => {
        const HelloCmp = Vue.extend( HelloComponent );
        const vm = new HelloCmp().$mount();

        expect(vm).not.toBe(undefined);
        expect(vm.name).toBe("World");
        expect(vm.img).toBe("./static/logo.png");

        let v = vm.addTwo(6);
        expect( v ).toBe( 8 );
    });
});