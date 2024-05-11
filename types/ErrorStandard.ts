/**
 * Padroniza estrutura para tratamento de erros
*/
type ErrorStandard<ErrorCode> = {
    /**
     * Mensagem do erro, geralmente tratada em functions/errorManager
    */
    message: string;

    /**
     * Código do erro, geralmente tratada em functions/errorManager
    */
    code: ErrorCode;
}