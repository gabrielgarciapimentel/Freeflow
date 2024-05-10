import { Position } from "./Position";
import { Toll } from "./Toll";

/**
 * Interface para representar uma das multiplas possíveis rodovias de um
 * cliente.
*/
export interface Highway {
    /**
     * Nome da rodovia.
    */
    name: string;

    /**
     * Definição de onde inicia a rodovia da concessionária.
    */
    startingPoint: Position;
    
    /**
     * Definição de onde finaliza a rodovia da concessionária.
    */
    endingPoint: Position;

    /**
     * Definição dos pedágios ao longo da rodovia.
    */
    tolls: Toll[];
}