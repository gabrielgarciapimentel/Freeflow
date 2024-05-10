import { Highway } from "./Highway";

/**
 * Interface para representar uma concessionária
*/
export interface TollBooth {
    /**
     * Id da concessionária
    */
    id: string;

    /**
     * Nome da concessionária
    */
    name: string;

    /**
     * Imagem da concessionária
    */
    logo: string;

    /**
     * Lista de rodovias que a concessionária possuí
    */
    highways: Highway[];
}
