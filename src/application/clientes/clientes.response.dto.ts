import { UUID } from "crypto";

export class ClientesResponseDTO {
    constructor(
        public cliente_uui: UUID,
        public cliente: String,
        public direccion: String, 
        public ciudad: String,
        public movil: String, 
        public email: String,
        public atcreated: Date, 
        public atmodified: Date
    ) {}
}