/**
    * Tipo para remover um campo K de uma interface T cujo
    * tipo extende um determinado tipo.
*/
type DeleteFields<T, U> = {
    [K in keyof T as T[K] extends U ? never : K]: T[K];
};