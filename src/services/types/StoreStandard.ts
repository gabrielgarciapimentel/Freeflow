/**
    * Tipo para padronizar a estrutura das stores dos serviços
*/
type StoreStandard<Store, Actions> = {
    /**
        * Dados da store
    */
    store: Store;

    /**
        * Ações da store
    */
    actions: Actions;
}