package dio;

public class Main {
    public static void main(String[] args) {
        // Calculadora
        System.out.println("Calculadora");
        Calculadora.soma(3, 15);
        Calculadora.subtracao(8, 5);
        Calculadora.multiplicacao(6, 12);
        Calculadora.divisao(44, 10);

        //Mensagem
        System.out.println("Mensagem");
        Mensagem.obterMensagem(20);
        Mensagem.obterMensagem(15);
        Mensagem.obterMensagem(6);

        //Empréstimo
        System.out.println("Emprestimo");
        Emprestimo.calcular(1500, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(3000, Emprestimo.getTresParcelas());
        Emprestimo.calcular(1500, 5);
    }
}
