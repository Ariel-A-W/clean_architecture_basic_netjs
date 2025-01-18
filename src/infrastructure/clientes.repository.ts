import { Cliente } from 'src/domain/clientes/cliente';
import { ICliente } from '../domain/clientes/icliente';
import { Injectable } from '@nestjs/common';
import { ClientesModel } from '../domain/clientes/clientes.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ClientesRepository implements ICliente {  
    constructor(
        @InjectModel(ClientesModel) 
        private cliente: typeof ClientesModel
    ) {}

    async getList(): Promise<Array<Cliente>> {
        const lstclientes: Array<Cliente> = [];
        try {
            const data = await this.cliente.findAll({
                attributes: [
                    'cliente_id', 'cliente', 'direccion', 'ciudad',
                    'movil', 'email', 'atcreated', 'atupdated'
                ]
            });    
            data.forEach((element: any) => {
                lstclientes.push(
                    new Cliente(
                        element.cliente_id,
                        element.cliente,
                        element.direccion,
                        element.ciudad,
                        element.movil,
                        element.email,
                        new Date(element.atcreated), // Ajustar según formato real
                        new Date(element.atupdated)  // Ajustar según formato real
                    )
                );
            });
        } catch (error) {
            console.error('Error de datos:', error);
        }
        return lstclientes;
    }
   
    getById(id: number): Cliente {
        throw new Error('Method not implemented.');
    }

    add(entity: Cliente): number {
        throw new Error('Method not implemented.');
    }

    delete(id: number): number {
        throw new Error('Method not implemented.');
    }

    update(id: number, entity: Cliente) {
        throw new Error('Method not implemented.');
    }
}