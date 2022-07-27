package dio;

public class SingletonEagerHolder {
    private static class InstanceHolder {
       public static SingletonEagerHolder instancia = new SingletonEagerHolder();
    }

    private SingletonEagerHolder() {
        super();
    }
    public static SingletonEagerHolder getInstancia() {
        return InstanceHolder.instancia;
    }
}
