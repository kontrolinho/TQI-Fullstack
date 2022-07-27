package dio;


import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<Double> notas = new HashSet<>(Arrays.asList(7.3, 4.9, 9.3, 6.8, 2.2, 3.4, 9.1));
        System.out.println(notas.toString());

        // Confira se a nota 5.0 está no conjunto
        System.out.println("Nota 5 esta no conjunto = " + notas.contains(5.0));

        // Exiba a menor nota
        System.out.println("A menor nota = " + Collections.min(notas));

        //Exibir a maior nota
        System.out.println("A maior nota = " + Collections.max(notas));

        // Exibir a soma dos valores utilizando iterator
        Iterator<Double> iterator = notas.iterator();
        Double soma = 0.0;
        while(iterator.hasNext()) {
            Double next = iterator.next();
            soma += next;
        }
        System.out.println("A soma das notas é = " + soma);

        // Exibir a media das notas
        System.out.println("A media das notas é = " + (soma / notas.size()));

        // Remover a nota 7.3
        notas.remove(7.3);
        System.out.println("Nota 7.3 removida = " + notas);

        // Remova as notas menores que 5 e exiba na lista
        notas.iterator();
        Iterator<Double> iterator1 = notas.iterator();
        while(iterator1.hasNext()) {
            Double next = iterator1.next();
            if (next < 5) iterator1.remove();;
        }
        System.out.println("Notas menores do que 5 removidas = " + notas);

        // Exiba todas as notas na ordem crescente
        Set<Double> notas2 = new TreeSet<>(notas);
        System.out.println("Notas em ordem crescente" + notas2);

        // Apague o conjunto
        notas.clear();
        System.out.println("Notas limpas");

        // Confira se o conjunto esta vazio
        System.out.println(notas.isEmpty());
        System.out.println(notas2.isEmpty());
    }
}
