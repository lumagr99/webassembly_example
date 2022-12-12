use wasm_bindgen::prelude::*;
use num_bigint::BigUint;
use num_traits::{Zero, One};

#[wasm_bindgen]
pub fn rust(rounds: u32, show: u32) -> Result<(), JsValue> {
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let table = document.get_element_by_id("table").expect("should have a table for rust");

    if rounds % show == 0{
        let tr = document.create_element("tr")?;

        let td = document.create_element("td")?;
        td.set_inner_html(&format!("{}", rounds));
        _ = tr.append_child(&td);
    
        let td2 = document.create_element("td")?;
        td2.set_inner_html(&format!("{}", fibo(rounds).to_string()));
        _ = tr.append_child(&td2);
    
        table.append_child(&tr)?;
    }
    Ok(())
}

fn fibo(rounds: u32) -> BigUint{
    let mut z1 : BigUint = Zero::zero();
    let mut z2 : BigUint = One::one();

    for _ in 1..rounds{
        z2 = &z1 + z2;
        z1 = &z2 - z1;
    }

    if rounds == 0{
        z2 = Zero::zero()
    }
    return z2;
}