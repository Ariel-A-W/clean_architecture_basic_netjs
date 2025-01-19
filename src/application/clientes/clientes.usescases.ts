import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";
import { ClientesRepository } from "src/infrastructure/clientes.repository";
import { IClienteDTO } from "./icliente.dto";
import { ClientesAddRequestDTO } from "./clientes.add.request.dto";
import { ClientesResponseDTO } from "./clientes.response.dto";
import { ClientesUpdateRequestDTO } from "./clientes.update.request.dto";

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
    
    add(entity: ClientesAddRequestDTO): number {
        throw new Error("Method not implemented.");
    }
    
    delete(uuid: UUID): number {
        throw new Error("Method not implemented.");
    }
    
    update(id: number, entity: ClientesUpdateRequestDTO) {
        throw new Error("Method not implemented.");
    }
    

    // async getList(): Promise<Array<Cliente>> {
    //     try 
    //     {
    //         return this.cliente.getList();
    //     }
    //     catch 
    //     {
    //         return new Array<Cliente>(); 
    //     }       
    // }

    // getById(id: number): Promise<Cliente> {
    //     throw new Error("Method not implemented.");
    // }

    // getByUUID(uuid: UUID): Promise<Cliente> {
    //     try 
    //     {
    //         return this.cliente.getByUUID(uuid);
    //     }
    //     catch 
    //     {
    //         return null;
    //     }
    // }

    // add(entity: Cliente): number {
    //     throw new Error("Method not implemented.");
    // }

    // delete(id: number): number {
    //     throw new Error("Method not implemented.");
    // }

    // update(id: number, entity: Cliente) {
    //     throw new Error("Method not implemented.");
    // }
}