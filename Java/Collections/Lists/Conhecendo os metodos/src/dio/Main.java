package dio;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Crie uma lista e adicione sete notas.

        List<Double> notas = new ArrayList<Double>();
        notas.add(68.9);
        notas.add(23.8);
        notas.add(44.3);
        notas.add(81.1);
        notas.add(12.2);
        notas.add(95.7);
        notas.add(89.3);
        System.out.println("Todas as notas: " + notas.toString());

        // Exibir a posicao da nota 81.1
        System.out.println("Posicao da Nota 81.1 = " + notas.indexOf(81.1));

        // Adicionar a lista a nota 73.2 na posicao 4
        notas.add(4, 73.2);

        // Substitua a nota 12.2 pela nota 17.8
        notas.set(notas.indexOf(12.2), 17.8);
        System.out.println("Nota 12.2 substituida pela nota 17.8 = " + notas);

        // Confira se a nota 95.7 esta na lista / boolean
        notas.contains(95.7);
        System.out.println("95.7 esta na lista = " + notas.contains(95.7));

        // Exibir todas as notas na ordem que foi informada, utilizando foreach
        for (Double nota:notas) {
            System.out.println(nota);
        }

        // Exibir a terceira nota adicionada
        System.out.println("Terceira nota adicionada = " + notas.get(2));
        System.out.println(notas.toString());

        // Exibir a menor nota
        System.out.println("Menor nota = " + Collections.min(notas));

        // Exibir a maior nota
        System.out.println("Maior nota = " + Collections.max(notas));

        // Exibir a soma dos valores
        Iterator<Double> iterator = notas.iterator();
        Double soma = 0d;
        while (iterator.hasNext()) {
            Double next = iterator.next();
            soma += next;
        }
        System.out.println("Soma dos valores = " + soma);

        // Exibir a media das notas
        System.out.println("Media das notas = " + (soma / notas.size()));

        // Remover a nota 73.2
        notas.remove(73.2);
        System.out.println(notas);

        // Remover a nota da posicao 0
        notas.remove(0);
        System.out.println(notas);

        // Remover as notas menores que 50 e exiba a lista
        Iterator<Double> iterator1 = notas.iterator();
        while(iterator1.hasNext()) {
            Double next = iterator1.next();
            if (next < 20d) iterator1.remove();
        }
        System.out.println("Notas menores que 20 removidas: " + notas);

        // Apagar toda a lista
        notas.clear();
        System.out.println("Lista apagada" + notas);

        // Verificar se a nota esta vazia / boolean
        System.out.println("Lista esta vazia? = " + notas.isEmpty());
    }
}
