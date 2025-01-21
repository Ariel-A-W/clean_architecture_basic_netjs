import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";
import { ClientesRepository } from "src/infrastructure/clientes.repository";
import { IClienteDTO } from "./icliente.dto";
import { ClientesAddRequestDTO } from "./clientes.add.request.dto";
import { ClientesResponseDTO } from "./clientes.response.dto";
import { ClientesUpdateRequestDTO } from "./clientes.update.request.dto";
import { Cliente } from "src/domain/clientes/cliente";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClientesUsesCases implements IClienteDTO {
    constructor(
        private readonly cliente: ClientesRepository
    ) {}
    
    async getList(): Promise<Array<ClientesResponseDTO>> {
        try 
        {
            var lstclientes = new Array<ClientesResponseDTO>();
            var datas = await this.cliente.getList(); 
            datas.forEach((element) =>{
                lstclientes.push(
                    new ClientesResponseDTO(
                        element.cliente_uuid,
                        element.cliente,
                        element.direccion,
                        element.ciudad,
                        element.movil,
                        element.email,
                        element.atcreated, 
                        element.atmodified  
                    )
                ); 
            });
            return lstclientes;
        }
        catch 
        {
            return null; 
        }  
    }
    
    async getById(id: number): Promise<ClientesResponseDTO> {
        throw new Error("Method not implemented.");
    }
    
    async getByUUID(uuid: UUID): Promise<ClientesResponseDTO> {
        try 
        {
            const data = await this.cliente.getByUUID(uuid);

            if(data == null || data.cliente_uuid == null) 
            {
                return null;
            }

            var oneCliente = new ClientesResponseDTO(
                data.cliente_uuid,
                data.cliente,
                data.direccion,
                data.ciudad,
                data.movil,
                data.email,
                data.atcreated, 
                data.atmodified 
            );

            return oneCliente;
        }
        catch 
        {
            return null;
        }        
    }
    
    // public cliente_id: Number,
    // public cliente_uuid: UUID,
    // public cliente: String,
    // public direccion: String, 
    // public ciudad: String,
    // public movil: String, 
    // public email: String,
    // public atcreated: Date, 
    // public atmodified: Date

    async add(entity: ClientesAddRequestDTO): Promise<number> {
        var cliente = new Cliente(
            0,
            uuidv4(),
            entity.cliente,
            entity.direccion,
            entity.ciudad,
            entity.movil,
            entity.email, 
            new Date(), 
            new Date()
        );
        return await this.cliente.add(cliente);
    }
    
    async delete(uuid: UUID): Promise<number> {        
        throw new Error("Method not implemented.");
    }
    
    async update(entity: ClientesUpdateRequestDTO): Promise<number> {

        const data = await this.cliente.getByUUID(entity.cliente_uuid);

        if(data == null || data.cliente_uuid == null) 
        {
            return null;
        }

        var cliente = new Cliente(
            data.cliente_id,
            data.cliente_uuid,
            entity.cliente,
            entity.direccion,
            entity.ciudad,
            entity.movil,
            entity.email, 
            new Date(), 
            new Date()
        );

        return await this.cliente.update(Number(data.cliente_id), cliente);        
    }
}