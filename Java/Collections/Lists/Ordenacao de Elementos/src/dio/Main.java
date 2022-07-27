package dio;

import java.util.*;

public class Main {
    public static void main(String[] args) {
    List<Gato> meusGatos = new ArrayList<>(){{
        add(new Gato("Gatito", 12, "Tigrado"));
        add(new Gato("Gatito", 1, "Laranja"));
        add(new Gato("Simba", 7, "Preto"));
    }};
        // Ordem de inserção
        System.out.println(meusGatos);

        // Ordem Aleatória
        Collections.shuffle(meusGatos);
        System.out.println(meusGatos);

        // Ordem Natural (nome)
        Collections.sort(meusGatos);
        System.out.println(meusGatos);

        // Ordem idade
        Collections.sort(meusGatos, new comparatorIdade());
        System.out.println(meusGatos);

        // Comparacao por cor
        Collections.sort(meusGatos, new comparatorCor());
        System.out.println(meusGatos);

        // Ordenacao por nome, cor ou idade
        meusGatos.sort(new comparatorNomeCorIdade());
        System.out.println(meusGatos);
    }
}

class Gato implements Comparable<Gato> {
    private String nome;
    private Integer idade;
    private String cor;

    public Gato(String nome, Integer idade, String cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    public String getNome() {
        return nome;
    }
    public Integer getIdade() {
        return idade;
    }
    public String getCor() {
        return cor;
    }

    @Override
    public String toString() {
        return "Gato {" +
                "nome='" + nome + '\'' +
                ", idade=" + idade +
                ", cor='" + cor + '\'' +
                '}';
    }

    @Override
    public int compareTo(Gato gato) {
        return this.getNome().compareToIgnoreCase(gato.getNome());
    }
}

class comparatorIdade implements Comparator<Gato> {

    @Override
    public int compare(Gato o1, Gato o2) {
        return Integer.compare(o1.getIdade(), o2.getIdade());
    }
}

class comparatorCor implements Comparator<Gato> {

    @Override
    public int compare(Gato o1, Gato o2) {
        return o1.getCor().compareToIgnoreCase(o2.getCor());
    }
}

class comparatorNomeCorIdade implements Comparator<Gato> {

    @Override
    public int compare(Gato o1, Gato o2) {
        int nome = o1.getNome().compareToIgnoreCase(o2.getNome());
        if (nome != 0) return nome;
        int cor = o1.getCor().compareToIgnoreCase(o2.getCor());
        if (cor != 0) return cor;
        return Integer.compare(o1.getIdade(), o2.getIdade());

    }
}