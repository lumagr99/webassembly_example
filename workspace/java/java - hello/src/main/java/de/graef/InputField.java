package de.graef;

import de.mirkosertic.bytecoder.api.web.HTMLElement;

public abstract class InputField implements HTMLElement {

    /** Setter um den Value eines Input-Fields zu setzen
     *
     * @param value - Neues Value
     */
    @de.mirkosertic.bytecoder.api.OpaqueProperty
    public abstract void setValue(float value);

    /** Getter um den Value eines Input-Fields zu erhalten
     *
     * @param value - Neues Value
     */
    @de.mirkosertic.bytecoder.api.OpaqueProperty
    public abstract String getValue();
}