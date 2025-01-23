import { UUID } from "crypto";

export class Cliente {
    constructor(
        public cliente_id: Number,
        public cliente_uuid: UUID,
        public cliente: String,
        public direccion: String, 
        public ciudad: String,
        public movil: String, 
        public email: String,
        public atcreated: Date, 
        public atmodified: Date
    ) {}
}