package dio;

import cep.CepAPI;
import crm.Service;

public class Facade {
    public void migrarCliente(String nome, String cep) {
        String cidade = CepAPI.getInstancia().recuperarCidade(cep);
        String estado = CepAPI.getInstancia().recuperarEstado(cep);
        Service.gravarCliente(nome, cep, cidade, estado);
    }
}
