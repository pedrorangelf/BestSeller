import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Evento{
    constructor(
        public adm: string,
        public data: DateTime,
        public dataacerto: DateTime,
        public dataviralote: DateTime,
        public id: string,
        public imagem: string,
        public lote: string,
        public meta: string,
        public nome: string,     
        public numero: string,
        public totalingressos: number,
        public valoringresso: string
    ){

    }
}