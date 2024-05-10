import { Antenna } from "./Antenna";
import { Camera } from "./Camera";
import { Laser } from "./Lasers";
import { Position } from "./Position";

/**
 * Interface para representar um pedágio
*/
export interface Toll {
    /**
     * Id do pedágio.
    */
    id: string;

    /**
     * Nome do pedágio.
    */
    name: string;

    /**
     * Cameras disponíveis no pedágio.
    */
    eyes: Camera[];

    /**
     * Lasers disponíveis no pedágio.
    */
    lasers: Laser[];

    /**
     * Antenas disponíveis no pedágio.
    */
    antennas: Antenna[];

    /**
     * Localização do pedágio.
    */
    tollPosition: Position;
}