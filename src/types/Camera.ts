/**
 * Interface para representar uma camera
*/
export interface Camera {
    /**
     * Id da camera.
    */
    id: string;

    /**
     * Status da camera.
    */
    status: EquipmentStaus;

    /**
     * Link para visualizar a camera em tempo real.
    */
    stream: string;

    /**
     * Data da última manutenção deste equipamento.
    */
    lastCheck: Date;
}