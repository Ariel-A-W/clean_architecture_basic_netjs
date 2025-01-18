import { Cliente } from 'src/domain/clientes/cliente';
import { ICliente } from '../domain/clientes/icliente';
import { Injectable } from '@nestjs/common';
import { ClientesModel } from '../domain/clientes/clientes.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ClienteRepository implements ICliente {  
    constructor(
        @InjectModel(ClientesModel) 
        private cliente: typeof ClientesModel
    ) {}

    getList(): Array<Cliente> {
        var lstclientes = new Array<Cliente>;
        var fndLst = this.cliente.findAll(
            {
                attributes: [
                    'cliente_id', 'cliente', 'direccion', 'ciudad', 
                    'movil', 'email', 'atcreated', 'atupdated'
                ]
            }
        );
        fndLst.then((data) => {
            lstclientes.length = 0;
            data.forEach(element => {
                lstclientes.push(
                    new Cliente(
                        BigInt(element.cliente_id), 
                        element.cliente, 
                        element.direccion, 
                        element.ciudad, 
                        element.movil, 
                        element.email, 
                        new Date(), 
                        new Date()
                    )
                );
            });
        }).catch(() => {
            lstclientes.length = 0;
        });
        return lstclientes;
    }

    getById(id: BigInt): Cliente {
        throw new Error('Method not implemented.');
    }

    add(entity: Cliente): number {
        throw new Error('Method not implemented.');
    }

    delete(id: BigInt): number {
        throw new Error('Method not implemented.');
    }

    update(id: BigInt, entity: Cliente) {
        throw new Error('Method not implemented.');
    }
}