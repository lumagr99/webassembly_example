package de.graef;

import de.mirkosertic.bytecoder.api.Export;
import de.mirkosertic.bytecoder.api.web.HTMLElement;
import de.mirkosertic.bytecoder.api.web.Window;

public class Main {

    public static void main(String[] args) {
    }

    @Export("start")
    public void start(){
        final Window w = Window.window();
        final HTMLElement input = w.document().getElementById("input");
        final HTMLElement output = w.document().getElementById("output");

        String inputText = input.innerHTML();
        String[] values = inputText.split("\n");

        values = mergeSort(values);
        output.innerHTML("");
        for (String s : values) {
            output.innerHTML(output.innerHTML() + "\n" + s);
        }
    }

    private static String[] merge(String[] left, String[] right) {
        String[] result = {};
        int i = 0;
        int j = 0;
        while (i < left.length && j < right.length) {
            if (left[i].compareTo(right[j]) < 0) {
                result = add(result, left[i]);
                i++;
            } else {
                result = add(result, right[j]);
                j++;
            }
        }
        while (i < left.length) {
            result = add(result, left[i]);
            i++;
        }
        while (j < right.length) {
            result = add(result, right[j]);
            j++;
        }
        return result;
    }

    private static String[] add(String[] array, String value) {
        String[] result = new String[array.length + 1];
        for (int i = 0; i < array.length; i++) {
            result[i] = array[i];
        }
        result[array.length] = value;
        return result;
    }

    public static String[] mergeSort(String[] values) {
        if (values.length < 2) {
            return values;
        }

        double middle = Math.floor(values.length / 2);
        String[] left = {};
        String[] right = {};
        for (int i = 0; i < values.length; i++) {
            if (i < middle) {
                left = add(left, values[i]);
            } else {
                right = add(right, values[i]);
            }
        }

        return merge(mergeSort(left), mergeSort(right));
    }
}