/**
 * Interface para representar um laser
*/
export interface Laser {
    /**
     * Id do laser.
    */
    id: string;

    /**
     * Status do laser.
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