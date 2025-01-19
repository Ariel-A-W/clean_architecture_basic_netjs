import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";
import { Cliente } from "src/domain/clientes/cliente";
import { ICliente } from "src/domain/clientes/icliente";
import { ClientesRepository } from "src/infrastructure/clientes.repository";

@Injectable()
export class ClientesUsesCases implements ICliente {
    constructor(
        private readonly cliente: ClientesRepository
    ) {}
    
    async getList(): Promise<Array<Cliente>> {
        try 
        {
            return this.cliente.getList();
        }
        catch 
        {
            return new Array<Cliente>(); 
        }       
    }

    getById(id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }

    getByUUID(uuid: UUID): Promise<Cliente> {
        try 
        {
            return this.cliente.getByUUID(uuid);
        }
        catch 
        {
            return null;
        }
    }

    add(entity: Cliente): number {
        throw new Error("Method not implemented.");
    }

    delete(id: number): number {
        throw new Error("Method not implemented.");
    }

    update(id: number, entity: Cliente) {
        throw new Error("Method not implemented.");
    }
}