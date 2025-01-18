
export class Cliente {
    constructor(
        public cliente_id: BigInt,
        public cliente: String,
        public direccion: String, 
        public ciudad: String,
        public movil: String, 
        public email: String,
        public atcreated: Date, 
        public atmodified: Date
    ) {}
}