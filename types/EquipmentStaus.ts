/**
 * Enum para representar as opções de status de um equipamento:
 **  CAMERA
 **  LASER
 **  ANTENA
*/
enum EquipmentStaus {
    /**
     * Ativo.
    */
    ACTIVE = 1,

    /**
     * Inativo.
    */
    INACTIVE = 2,

    /**
     * Em manutenção.
    */
    MAINTENANCE = 3,

    /**
     * Danificado.
    */
    BROKEN = 4
};