
/**
 * @description Clase DTO, para el ejercicio de la sesion 2, almacena la información básica de una revista
 * 
 * @author Andrés Felipe Alarcón Fonseca <andres.alarcon02@outlook.com>
 */
export class RevistaDTO {

    /**
    * Almacena un id para cada revista.
    */
    public id: string;

    /**
    * Almacena el nombre para cada revista.
    */
    public nombre: string;

    /**
    * Almacena la editorial para cada revista.
    */
    public editorial: string;

    /**
    * Almacena la temática para cada revista.
    */
    public tematica: string;
    /**
    * Almacena el número de páginas para cada revista.
    */
    public numeroPaginas: number;

    /**
    * Almacena el precio para cada revista.
    */
    public precio: number;

    /**
    * Almacena el/los autor/es para cada revista.
    */
    public autores: string;

    /**
    * Indica si la revista se encuetra a color o no
    */
    public aColor: boolean;

    /**
    * Almacena la fecha de venta para cada revista.
    */
    public fechaVenta: Date;

    /**
    * * Almacena el estado para cada revista.
    */
    public estado: string;


  
}