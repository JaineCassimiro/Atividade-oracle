// Pacote: com.seuprojeto.model
// Nome do arquivo: Cliente.java

// Se for MongoDB/DynamoDB, use @Document
// Se for SQL (JPA), use @Entity

import com.seuprojeto.validation.ValidCPF;
import jakarta.validation.constraints.NotBlank;

// Exemplo para MongoDB/DynamoDB
@Document(collection = "clientes") // O nome da coleção que você criou!
public class Cliente {

    @Id
    private String id;
    
    @NotBlank(message = "O nome é obrigatório")
    private String nome;

    @NotBlank(message = "O CPF é obrigatório")
    @ValidCPF // <-- SUA ANOTAÇÃO PERSONALIZADA SENDO USADA AQUI!
    private String cpf;

    // Getters e Setters...
}

// Classe para a Ordem de Serviço
@Document(collection = "ordens_servico")
public class OrdemServico {

    @Id
    private String id;
    
    // O campo que você mencionou
    private String numeroOrdemServico; 
    
    private String cpfCliente; // CPF usado para vincular
    private String descricao;

    // Getters e Setters...
}