package dio;

public class Test {
    public static void main (String[] args) {
        Singleton lazy = Singleton.getInstancia();
        System.out.println(lazy);
        lazy = Singleton.getInstancia();
        System.out.println(lazy);

        SingletonEager eager = SingletonEager.getInstancia();
        System.out.println(eager);
        eager = SingletonEager.getInstancia();
        System.out.println(eager);

        SingletonEagerHolder holder = SingletonEagerHolder.getInstancia();
        System.out.println(holder);
        holder = SingletonEagerHolder.getInstancia();
        System.out.println(holder);
    }
}
