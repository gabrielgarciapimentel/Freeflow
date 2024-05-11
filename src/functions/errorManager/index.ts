export const errorManager = <ErrorType>(errorCode: ErrorType) => {
    let error: ErrorStandard<ErrorType> = {
        code: errorCode,
        message: ''
    }

    switch (errorCode) {
        case '1000':
            error.message = "Mensagem do erro 1000"
            break;
        case '1001':
            error.message = "Mensagem do erro 1001"
            break;
        case '1002':
            error.message = "Mensagem do erro 1002"
            break;
        default:
            break;
    }

    return error;
}