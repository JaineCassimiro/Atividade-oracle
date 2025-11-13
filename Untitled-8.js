/* ***************************
  ** JAVASCRIPT (A Lógica) **
  ***************************
*/

// Espera o HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Bancos de Dados Falsos (Simulação) ---
    
    // Simula a sua coleção "clientes"
    const fakeClienteDatabase = [
        { id: "c1", nome: "Ana Silva", cpf: "11122233344" },
        { id: "c2", nome: "Bruno Costa", cpf: "98765432100" },
        { id: "c3", nome: "Carla Dias", cpf: "12345678909" }
    ];

    // Simula a sua coleção "ordens_servico"
    const fakeOsDatabase = [
        { id: "os1", numeroOrdemServico: "OS-2024-001", cpfCliente: "11122233344", descricao: "Manutenção de Notebook" },
        { id: "os2", numeroOrdemServico: "OS-2024-002", cpfCliente: "98765432100", descricao: "Troca de tela smartphone" }
    ];

    // --- Elementos da DOM (Pegamos os elementos aqui) ---
    const cpfInput = document.getElementById('cpfInput');
    const cpfHelp = document.getElementById('cpfHelp');
    const resultadoDiv = document.getElementById('resultado');
    const cpfSearchInput = document.getElementById('cpfSearchInput');
    const osInput = document.getElementById('osInput');
    
    // Botões
    const btnBuscarCPF = document.getElementById('btnBuscarCPF');
    const btnBuscarOS = document.getElementById('btnBuscarOS');

    // --- Lógica de Validação (Anotação @ValidCPF) ---
    
    // Adiciona um "listener" que valida em tempo real
    cpfInput.addEventListener('keyup', () => {
        const cpf = cpfInput.value;
        const ehValido = logicaValidarCPF(cpf);

        // Limpa classes
        cpfInput.classList.remove('valid', 'invalid');
        cpfHelp.classList.remove('valid', 'invalid');
        cpfHelp.style.display = 'none';

        if (cpf.length === 0) return; // Não faz nada se estiver vazio

        if (ehValido) {
            cpfInput.classList.add('valid');
            cpfHelp.textContent = 'CPF válido!';
            cpfHelp.classList.add('valid');
        } else {
            cpfInput.classList.add('invalid');
            cpfHelp.textContent = 'CPF inválido!';
            cpfHelp.classList.add('invalid');
        }
    });

    /**
     * A lógica de validação do CPF (Módulo 11)
     * Esta é a sua "Anotação Personalizada" em JavaScript.
     */
    function logicaValidarCPF(cpf) {
        if (typeof cpf !== 'string') return false;
        
        // Remove caracteres não numéricos
        const cpfLimpo = cpf.replace(/\D/g, '');

        // 1. Verifica se tem 11 dígitos
        if (cpfLimpo.length !== 11) {
            return false;
        }

        // 2. Verifica se todos os dígitos são iguais
        if (/(\d)\1{10}/.test(cpfLimpo)) {
            return false;
        }

        // 3. Lógica de validação (Cálculo dos Dígitos Verificadores)
        let soma = 0;
        let resto;

        // Cálculo do primeiro dígito verificador (DV1)
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
            return false;
        }

        // Cálculo do segundo dígito verificador (DV2)
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        
        return resto === parseInt(cpfLimpo.substring(10, 11));
    }

    // --- Lógica de Busca (Métodos do Repositório) ---

    /**
     * Simula o seu método "findByCpf"
     */
    btnBuscarCPF.addEventListener('click', () => {
        const cpfBusca = cpfSearchInput.value.replace(/\D/g, '');
        
        // Simula a busca no "banco"
        const cliente = fakeClienteDatabase.find(c => c.cpf === cpfBusca);

        if (cliente) {
            exibirResultado(`Cliente encontrado: ${cliente.nome} (ID: ${cliente.id})`, 'success');
        } else {
            exibirResultado('Cliente não encontrado para este CPF.', 'error');
        }
    });

    /**
     * Simula o seu método "findByNumeroOrdemServico"
     */
    btnBuscarOS.addEventListener('click', () => {
        const osBusca = osInput.value;
        
        // Simula a busca no "banco"
        const ordem = fakeOsDatabase.find(os => os.numeroOrdemServico.toLowerCase() === osBusca.toLowerCase());

        if (ordem) {
            exibirResultado(`OS Encontrada: ${ordem.descricao} (CPF: ${ordem.cpfCliente})`, 'success');
        } else {
            exibirResultado('Ordem de Serviço não encontrada.', 'error');
        }
    });

    // Função auxiliar para mostrar resultados na tela
    function exibirResultado(mensagem, tipo) {
        resultadoDiv.textContent = mensagem;
        resultadoDiv.className = tipo; // 'success' ou 'error'
    }

});