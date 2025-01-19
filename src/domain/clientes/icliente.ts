import { UUID } from 'crypto';
import { Cliente } from './cliente';

export interface ICliente {
    getList(): Promise<Array<Cliente>>;

    getById(id: number): Promise<Cliente>;

    getByUUID(uuid: UUID): Promise<Cliente>;

    add(entity: Cliente): Promise<number>;

    delete(id: number): Promise<number>;
    
    update(id: number, entity: Cliente): Promise<number>;
}