use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // The `console.log` is quite polymorphic, so we can bind it with multiple
    // signatures. Note that we need to use `js_name` to ensure we always call
    // `log` in JS.
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

#[wasm_bindgen]
pub unsafe fn start_merge() {
    let window = web_sys::window().expect("Kein Window gefunden.");
    let document = window.document().expect("Ein Window sollte ein Document beinhalten");
    let input_field = document.get_element_by_id("input").expect("Das Dokument sollte ein Element mit id 'input' beinhalten");
    let output_field = document.get_element_by_id("output").expect("Das Dokument sollte ein Element mit id 'output' beinhalten");

    let binding = input_field.inner_html();
    let input = binding.split("\n").collect::<Vec<&str>>();
    log(input.len().to_string().as_str());
    
    
    let output = merge_sort(input);
    while output_field.has_child_nodes() {
        output_field.remove_child(&output_field.first_child().unwrap());
    }

    for i in 0..output.len() {
        let mut output_string: String = output_field.inner_html().to_string();
        output_string.push_str(output[i]);
        output_string.push_str(" ");
        output_field.set_inner_html(output_string.as_str());
    }
}


fn merge_sort(arr: Vec<&str>) -> Vec<&str> {
    if arr.len() <= 1 {
        return arr;
    }
    let mid = arr.len() / 2;
    let left = merge_sort(arr[..mid].to_vec());
    let right = merge_sort(arr[mid..].to_vec());
    return merge(left, right)
}

fn merge<'a>(left: Vec<&'a str>, right: Vec<&'a str>) -> Vec<&'a str> {
    let mut result = Vec::new();
    let mut left_index = 0;
    let mut right_index = 0;

    while left_index < left.len() && right_index < right.len() {
        if left[left_index] < right[right_index] {
            result.push(left[left_index]);
            left_index += 1;
        } else {
            result.push(right[right_index]);
            right_index += 1;
        }
    }

    while left_index < left.len() {
        result.push(left[left_index]);
        left_index += 1;
    }

    while right_index < right.len() {
        result.push(right[right_index]);
        right_index += 1;
    }

    return result;
}