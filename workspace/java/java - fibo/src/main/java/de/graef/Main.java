package de.graef;

import de.mirkosertic.bytecoder.api.Export;
import de.mirkosertic.bytecoder.api.web.*;

import java.lang.reflect.Field;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {

    }

    @Export("exportFibo")
    public void exportFibo(int rounds) {
        final Window w = Window.window();
        final Document document = w.document();
        final HTMLElement table = w.document().getElementById("table");

        // Manufacture the element we're gonna append
        if (rounds % (rounds/10) == 0) {
            HTMLElement tr = document.createElement("tr");

            HTMLElement td = document.createElement("td");
            td.innerHTML(rounds + "");
            tr.appendChild(td);

            HTMLElement td2 = document.createElement("td");
            td2.innerHTML(fibo(rounds).toString());
            tr.appendChild(td2);

            table.appendChild(tr);
        }
        fibo(rounds);
    }

    public static BigInteger fibo(int rounds) {
        BigInteger z1 = BigInteger.ZERO;
        BigInteger z2 = BigInteger.ONE;

        for (int i = 2; i <= rounds; i++) {
            z2 = z2.add(z1);
            z1 = z2.subtract(z1);
        }

        if (rounds == 0) {
            z2 = BigInteger.ZERO;
        }
        return z2;
    }
}