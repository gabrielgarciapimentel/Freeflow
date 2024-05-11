import { TollBooth } from "@/types/TollBooth";

/**
    * Opções de erros para o serviço de concessionária
*/
type TollBoothErrors = '1000' | '1001' | '1002'

/**
    * Estrutura da store do serviço de concessionária
*/
export interface TollBoothStore {
    /**
        * Dados da concessionária
    */
    data?: TollBooth;

    /**
        * Informa se está carregando as informações
    */
    loading: boolean;

    /**
        * Informa se encontra algum erro
    */
    error?: ErrorStandard<TollBoothErrors>

    /**
        * Informa se tem dado para um tipo de dado que não seja array
    */
    hasData: boolean;
}

/**
    * Ações da store de concessionária
*/
export interface TollBoothStoreActions {
    /**
        * Define os dados da concessionária.
    */
    setData: (data: TollBooth) => void;

    /**
        * Define se está carregando informação.
    */
    setLoading: () => void;
    
    /**
        * Define um erro.
    */
    setError: (errorCode: TollBoothErrors) => void;
}

/**
    * Ações do serviço de concessionária
*/
export interface TollBoothService extends DeleteFields<StoreStandard<TollBoothStore, TollBoothStoreActions>, TollBoothStoreActions> {
    /**
        * Executa a chamada para buscar os dados da concessionária
    */
    getTollBooth: () => Promise<void>;
}