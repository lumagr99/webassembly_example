package de.graef;

import de.mirkosertic.bytecoder.api.web.Event;
import de.mirkosertic.bytecoder.api.web.EventListener;
import de.mirkosertic.bytecoder.api.web.HTMLElement;
import de.mirkosertic.bytecoder.api.web.Window;

public class Main {
    public static void main(String[] args) {
        final Window w = Window.window();
        final HTMLElement button = w.document().getElementById("submit");
        button.addEventListener("click", new EventListener<Event>() {
            @Override
            public void run(Event event) {
                String name = ((InputField)w.document().getElementById("name")).getValue();
                w.document().getElementById("greeting").innerHTML("Hallo " + name);
            }
        });
    }
}