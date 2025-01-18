import { Cliente } from './cliente';

export interface ICliente {
    getList(): Array<Cliente>;

    getById(id: BigInt): Cliente;

    add(entity: Cliente): number;

    delete(id: BigInt): number;
    
    update(id: BigInt, entity: Cliente);
}