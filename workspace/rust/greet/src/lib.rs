use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub unsafe fn greet(name: &str){
    let window = web_sys::window().expect("Kein Window gefunden.");
    let document = window.document().expect("Ein Window sollte ein Document beinhalten");
    let p = document.get_element_by_id("greeting").expect("Das Dokument sollte ein Element mit id 'greeting' beinhalten");

    p.set_inner_html(&format!("Hello, {}!", name));    
}