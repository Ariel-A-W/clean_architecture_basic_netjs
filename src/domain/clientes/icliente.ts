import { Cliente } from './cliente';

export interface ICliente {
    getList(): Promise<Array<Cliente>>;

    getById(id: number): Cliente;

    add(entity: Cliente): number;

    delete(id: number): number;
    
    update(id: number, entity: Cliente);
}