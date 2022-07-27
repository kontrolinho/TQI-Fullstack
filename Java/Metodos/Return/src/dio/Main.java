package dio;

public class Main {
    public static void main(String[] args) {
        // retornos
        System.out.println("Retornos");

        double areaQuadrado = Quadrilatero.area(5);
        System.out.println("Area do Quadrado: " + areaQuadrado);

        double areaRetangulo = Quadrilatero.area(7,7);
        System.out.println("Area do Retangulo: " + areaRetangulo);

        double areaTrapezio = Quadrilatero.area(7, 8, 9);
        System.out.println("Area do Trapezio: " + areaTrapezio);
    }
}
