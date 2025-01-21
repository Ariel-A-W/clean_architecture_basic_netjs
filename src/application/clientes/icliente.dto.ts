import { UUID } from "crypto";
import { ClientesResponseDTO } from "./clientes.response.dto";
import { ClientesAddRequestDTO } from "./clientes.add.request.dto";
import { ClientesUpdateRequestDTO } from "./clientes.update.request.dto";

export interface IClienteDTO 
{
    getList(): Promise<Array<ClientesResponseDTO>>;

    getById(id: number): Promise<ClientesResponseDTO>;

    getByUUID(uuid: UUID): Promise<ClientesResponseDTO>;

    add(entity: ClientesAddRequestDTO): Promise<number>;

    delete(uuid: UUID): Promise<number>;
    
    update(uuid: UUID, entity: ClientesUpdateRequestDTO): Promise<number>;
}