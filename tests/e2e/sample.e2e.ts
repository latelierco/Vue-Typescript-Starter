import { Selector } from "testcafe";
import VueSelector from "testcafe-vue-selectors";

fixture( "First fixture for Login Component" )
    .page( "http://localhost:8080/" );

test( "Logs with username, password", async t => {
    const loginSelector = Selector( "#login" );
    const usernameInput = Selector( "#username" );
    const passwordInput = Selector( "#password" );
    const howdySelector = Selector( ".howdy" );
    const greetingClass = Selector( ".greeting" );

    const increaseEl = Selector( "#increase" );

    await t 
        .typeText( usernameInput, "Michat" )
        .typeText( passwordInput, "123456" )
        .click( loginSelector )
        .expect( howdySelector.exists ).ok()
        .expect( increaseEl.exists ).ok()
        .expect( Selector(".greeting").textContent ).eql( "Hello World" )
        .click( increaseEl )
        .click( increaseEl )
        .click( increaseEl )
        .click( increaseEl )
        .expect( Selector(".greeting").textContent ).eql( "Hello World!!!!" )
});