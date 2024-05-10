/**
 * Interface para representar uma antena
*/
export interface Antenna {
    /**
     * Id da antena.
    */
    id: string;

    /**
     * Status da antena.
    */
    status: EquipmentStaus;

    /**
     * Status do sinal do equipamento
    */
    signalFeeback: string;

    /**
     * Data da última manutenção deste equipamento.
    */
    lastCheck: Date;
}