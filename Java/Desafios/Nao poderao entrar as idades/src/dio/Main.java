package dio;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        var leitor = new Scanner(System.in);

        int N = leitor.nextInt();
        int idade = 0;

        System.out.println("Nao poderao entrar as idades:");
        while (N-- > 0) {
            idade = leitor.nextInt();
            if (idade < 18) {
                System.out.println(idade);
            }
        }
    }
}