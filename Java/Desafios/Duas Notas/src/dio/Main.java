package dio;

import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int[] notas = {2, 5, 10, 20, 50, 100};
        boolean possivel = false;
        int N,M;

        while ((N = leitor.nextInt()) != 0 && ( M = leitor.nextInt())!=0) {
            int troco = M - N;

            for (int i = 0; i < 6; i++) {
                for (int j = 0; j < 6; j++) {
                    if (troco - notas[j] == notas[i]) {
                        possivel = true;
                        break;
                    }
                }
            }

            if (possivel) System.out.println("possible");
            else System.out.println("impossible");
        }
    }

}