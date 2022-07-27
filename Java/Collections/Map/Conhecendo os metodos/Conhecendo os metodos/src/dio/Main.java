package dio;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Crie um dicionario e relacione os modelos e seus respectivos consumos
        Map<String, Double> carrosPopulares = new HashMap<>() {{
            put("gol", 14.4);
            put("uno", 15.6);
            put("mobi", 16.1);
            put("hb20", 14.5);
            put("kwid", 15.6);
        }};
        System.out.println("Dicionario MAP" + carrosPopulares.toString());

        // Substitua o consumo do gol por 15.2km/l
        carrosPopulares.put("gol", 15.2);
        System.out.println("Gol substituido" + carrosPopulares.toString());

        // Confira se o modelo tucson esta no dicionario
        System.out.println("Existe Tucson = " + carrosPopulares.containsKey("tucson"));

        // Exiba o consumo do UNO
        System.out.println("O consumo do UNO = " + carrosPopulares.get("uno"));

        // Exiba os modelos
        System.out.println("Os modelos sao = " + carrosPopulares.keySet());

        // Exiba o consumo dos carros
        System.out.println("O consumo dos carros = " + carrosPopulares.values());

        // Exiba o modelo mais economico e seu consumo
        Double consumoMaisEficiente = Collections.max(carrosPopulares.values());
        Set<Map.Entry<String, Double>> entries = carrosPopulares.entrySet();
        String modeloMaisEficiente = "";
        for (Map.Entry<String, Double> entry:entries) {
            if (entry.getValue().equals(consumoMaisEficiente))
                modeloMaisEficiente = entry.getKey();
        }
        System.out.println("Modelo mais eficiente = " + modeloMaisEficiente);
        System.out.println("Consumo mais eficiente = " + consumoMaisEficiente);

        // Exiba o modelo menos economico e seu consumo
        Double consumoMenosEficiente = Collections.min(carrosPopulares.values());
        String modeloMenosEficiente = "";

        for (Map.Entry<String, Double> entry : carrosPopulares.entrySet()) {
        if (entry.getValue().equals(consumoMenosEficiente))
            modeloMenosEficiente = entry.getKey();
        }

        System.out.println("Modelo menos eficiente = " + modeloMenosEficiente);
        System.out.println("Consumo menos eficiente = " + consumoMenosEficiente);

        // Exiba a soma dos consumos
        Iterator<Double> iterator = carrosPopulares.values().iterator();
        Double soma = 0d;
        while (iterator.hasNext()) {
            soma += iterator.next();
        }

        System.out.println("A soma do consumo dos carros = " + soma);

        // Exiba a média dos consumos desse dicionario
        System.out.println("A media do consumo = " + (soma / carrosPopulares.size()));

        // Remova os modelos com o consumo igual a 15.6km/l
        Iterator<Double> iterator1 = carrosPopulares.values().iterator();
        while (iterator1.hasNext()) {
            if (iterator1.next().equals(15.6)) iterator1.remove();
        }
        System.out.println("Modelo 15.6 removido = " + carrosPopulares);

        // Exiba os carros na ordem q foram informados
        Map<String, Double> carrosPopulares1 = new LinkedHashMap<>() {{
            put("gol", 14.4);
            put("uno", 15.6);
            put("mobi", 16.1);
            put("hb20", 14.5);
            put("kwid", 15.6);
        }};
        System.out.println("Exiba os carros na ordem que foram imformados = " + carrosPopulares1.toString());

        // Exiba o dicionario ordenado pelo modelo
        Map<String, Double> carrosPopulares2 = new TreeMap<>(carrosPopulares1);
        System.out.println("Dicionario ordenado pelo modelo = " + carrosPopulares2.toString());

        // Apague o conjunto de carros
        carrosPopulares.clear();
        System.out.println("Carros populares apagado = " + carrosPopulares.toString());

        // Confira se o dicionario esta vazio
        System.out.println("Carros populares esta vazio = " + carrosPopulares.isEmpty());
    }
}
