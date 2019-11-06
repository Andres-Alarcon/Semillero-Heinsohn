import { Component, OnInit } from '@angular/core';
import { RevistaDTO } from '../../dto/revista.dto';

/**
 * @description Componenete gestionar comic, el cual contiene la logica CRUD
 * 
 * @author Diego Fernando Alvarez Silva <dalvarez@heinsohn.com.co>
 */
@Component({
    selector: 'gestionar-revista',
    templateUrl: './gestionar-revista-component.html',
})
export class GestionarRevistaComponent implements OnInit {

    /**
     * Atributo que contendra la informacion de la Revista
     */
    public revista: RevistaDTO;
    public listaRevistas : Array<RevistaDTO>;

    constructor() { 

    }

    /**
     * Evento angular que se ejecuta al invocar el componente
     */
    ngOnInit(): void {
        this.revista = new RevistaDTO();
        this.listaRevistas = new Array<RevistaDTO>();

        this.revista.id = "101";
        this.revista.nombre = "People";
        this.revista.editorial = "Planeta";
        this.revista.tematica = "Personas influyentes";
        this.revista.numeroPaginas = 250;
        this.revista.precio = 6500;
        this.revista.autores = "Charles Dickens";
        this.revista.aColor = true;
        this.revista.fechaVenta = new Date();
        this.revista.estado = "Activa";

        this.listaRevistas.push(this.revista);

        this.revista.id = "102";
        this.revista.nombre = "Dinero";
        this.revista.editorial = "Penguin";
        this.revista.tematica = "Negocios";
        this.revista.numeroPaginas = 350;
        this.revista.precio = 7500;
        this.revista.autores = "Owen Taylor";
        this.revista.aColor = true;
        this.revista.fechaVenta = new Date();
        this.revista.estado = "Activa";

        this.listaRevistas.push(this.revista);
        this.revista.id = "103";
        this.revista.nombre = "Cromos";
        this.revista.editorial = "Norma";
        this.revista.tematica = "Farandula y personas influyentes";
        this.revista.numeroPaginas = 180;
        this.revista.precio = 5500;
        this.revista.autores = "Camilo De La Torre";
        this.revista.aColor = true;
        this.revista.fechaVenta = new Date();
        this.revista.estado = "Activa";

        this.listaRevistas.push(this.revista);

        this.revista.id = "104";
        this.revista.nombre = "Semana";
        this.revista.editorial = "La Castellana";
        this.revista.tematica = "Noticias y Actualidad";
        this.revista.numeroPaginas = 450;
        this.revista.precio = 8500;
        this.revista.autores = "Claudia Barrera";
        this.revista.aColor = true;
        this.revista.fechaVenta = new Date();
        this.revista.estado = "Activa";

        this.listaRevistas.push(this.revista);

        this.revista.id = "105";
        this.revista.nombre = "Time";
        this.revista.editorial = "NY";
        this.revista.tematica = "Actualidad";
        this.revista.numeroPaginas = 350;
        this.revista.precio = 6000;
        this.revista.autores = "John Connor";
        this.revista.aColor = true;
        this.revista.fechaVenta = new Date();
        this.revista.estado = "Activa";

        this.listaRevistas.push(this.revista);
        
    }

}