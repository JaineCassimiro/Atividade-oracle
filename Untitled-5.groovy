// Pacote: com.seuprojeto.repository
// Nome do arquivo: OrdemServicoRepository.java

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

// Repositório para a coleção "ordens_servico"
public interface OrdemServicoRepository extends MongoRepository<OrdemServico, String> {

    /**
     * Método para buscar registros pela Ordem de Serviço.
     * (Implementação do Projeto 208)
     */
    Optional<OrdemServico> findByNumeroOrdemServico(String numeroOS);

    /**
     * Método para buscar todas as ordens de serviço de um CPF.
     * (Implementação bônus baseada no seu projeto)
     */
    List<OrdemServico> findByCpfCliente(String cpfCliente);
}