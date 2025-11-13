// Pacote: com.seuprojeto.repository
// Nome do arquivo: ClienteRepository.java

import org.springframework.data.mongodb.repository.MongoRepository; // Ou JpaRepository
import java.util.Optional;

// Repositório para a coleção "clientes"
public interface ClienteRepository extends MongoRepository<Cliente, String> {

    /**
     * Método para buscar um cliente pelo CPF.
     * (Implementação do Projeto 208)
     */
    Optional<Cliente> findByCpf(String cpf);
    
    // Outros métodos que você precisar...
}