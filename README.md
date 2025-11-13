# Atividade-oracle
teste atividade oracle
# 🚀 Projeto 208: Sistema de Clientes e Ordens de Serviço (Validação Personalizada)

## 📝 Descrição do Projeto
O Projeto 208 é uma solução de gerenciamento que demonstra a implementação de funcionalidades cruciais em um sistema back-end (conceitualizado em Java/Spring Boot) e sua simulação em um ambiente front-end (HTML/JavaScript).

O diferencial central do projeto é a criação de uma **anotação personalizada para validação de CPF** e a otimização de métodos de busca por identificadores específicos, como CPF e Número da Ordem de Serviço (OS).

## ✨ Funcionalidades Principais

### 1. Anotação de Validação de CPF (@ValidCPF)
Esta é a feature de destaque do projeto. Foi criada uma anotação personalizada que implementa a lógica de validação do CPF (utilizando o algoritmo do Módulo 11).
* **Restrição:** A anotação `@ValidCPF` é definida como uma restrição de validação customizada.
* **Aplicação:** A anotação é aplicada no campo `cpf` da entidade `Cliente` para garantir a integridade dos dados na camada de modelo.

### 2. Métodos de Busca Otimizados
O projeto define interfaces de repositório (simulando Spring Data) para acesso eficiente aos dados:
* **Busca por CPF do Cliente:** O método `findByCpf(String cpf)` permite localizar o registro do cliente de maneira direta.
* **Busca por Ordem de Serviço (OS):** O método `findByNumeroOrdemServico(String numeroOS)` permite buscar o registro de serviço específico.
* **Busca por CPF nas OS:** Inclui um método para buscar todas as ordens de serviço associadas a um determinado cliente (`findByCpfCliente`).

## 💻 Tecnologias Envolvidas

| Camada | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Back-end (Conceito)** | Java (Spring Boot) | Estrutura de classes e repositórios. |
| **Validação** | Jakarta Validation | Utilizada para injetar a lógica da anotação `@ValidCPF`. |
| **Banco de Dados** | MongoDB (ou NoSQL Genérico) | Representado pelas anotações `@Document` nas classes de modelo (`Cliente` e `OrdemServico`). |
| **Front-end (Simulação)** | HTML5, CSS3, JavaScript | Simulação visual da interface e da lógica de validação e busca diretamente no navegador. |

## 📁 Estrutura de Arquivos

Os arquivos de código refletem a arquitetura do projeto:

| Arquivo | Descrição |
| :--- | :--- |
| `Untitled-1.java` | Interface da anotação `@ValidCPF`. |
| `Untitled-2.groovy` | Classe `CPFValidator`, contendo a lógica do Módulo 11. |
| `Untitled-3.java` | Entidades de dados (`Cliente` e `OrdemServico`) com a aplicação da anotação de validação. |
| `Untitled-4.java` | Repositório de Cliente, com o método de busca `findByCpf`. |
| `Untitled-5.groovy` | Repositório de Ordem de Serviço, com métodos de busca por OS e CPF. |
| `Untitled-6.html` | Estrutura HTML da simulação, incluindo campos de validação e busca. |
| `Untitled-8.js` | Lógica JavaScript que simula os bancos de dados e implementa a validação e busca no front-end. |
