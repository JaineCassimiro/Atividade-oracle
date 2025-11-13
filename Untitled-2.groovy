// Pacote: com.seuprojeto.validation
// Nome do arquivo: CPFValidator.java

package com.seuprojeto.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CPFValidator implements ConstraintValidator<ValidCPF, String> {

    @Override
    public boolean isValid(String cpf, ConstraintValidatorContext context) {
        if (cpf == null || cpf.isEmpty()) {
            // Consideramos nulo como válido (use @NotNull se for obrigatório)
            return true; 
        }

        // Remove caracteres não numéricos
        String cpfLimpo = cpf.replaceAll("[^0-9]", "");

        // 1. Verifica se tem 11 dígitos
        if (cpfLimpo.length() != 11) {
            return false;
        }

        // 2. Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
        if (cpfLimpo.matches("(\\d)\\1{10}")) {
            return false;
        }

        try {
            // 3. Lógica de validação (Cálculo dos Dígitos Verificadores)
            int[] digitos = new int[11];
            for (int i = 0; i < 11; i++) {
                digitos[i] = Integer.parseInt(String.valueOf(cpfLimpo.charAt(i)));
            }

            // Cálculo do primeiro dígito verificador (DV1)
            int soma1 = 0;
            for (int i = 0; i < 9; i++) {
                soma1 += digitos[i] * (10 - i);
            }
            int resto1 = (soma1 * 10) % 11;
            if (resto1 == 10) resto1 = 0; // Se resto 10, considera 0

            if (resto1 != digitos[9]) {
                return false; // DV1 inválido
            }

            // Cálculo do segundo dígito verificador (DV2)
            int soma2 = 0;
            for (int i = 0; i < 10; i++) {
                soma2 += digitos[i] * (11 - i);
            }
            int resto2 = (soma2 * 10) % 11;
            if (resto2 == 10) resto2 = 0; // Se resto 10, considera 0

            return resto2 == digitos[10]; // DV2 válido

        } catch (NumberFormatException e) {
            return false;
        }
    }
}