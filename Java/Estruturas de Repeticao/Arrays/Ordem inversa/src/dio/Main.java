package dio;

public class Main {
    public static void main(String[] args) {
        int [] vetor = {2, -3, 6, 8, 9, 23, -77, -5};
        System.out.println("Vetor: ");
        int count = 0;
        while (count < (vetor.length)) {
            System.out.print(vetor[count] + " ");
            count++;
        }
        System.out.println("\nVetor Inverso: ");
        for(int i = (vetor.length -1); i >= 0; i--){
            System.out.print(vetor[i] + " ");
        }
        System.out.println(vetor);
    }
}
