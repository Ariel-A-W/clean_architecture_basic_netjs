import { Cliente } from 'src/domain/clientes/cliente';
import { ICliente } from '../domain/clientes/icliente';
import { Injectable } from '@nestjs/common';
import { ClientesModel } from '../domain/clientes/clientes.model';
import { InjectModel } from '@nestjs/sequelize';
import { UUID } from 'crypto';

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
                    'cliente_id', 'cliente_uuid', 'cliente', 'direccion', 'ciudad',
                    'movil', 'email', 'atcreated', 'atupdated'
                ]
            });    
            data.forEach((element) => {
                lstclientes.push(
                    new Cliente(
                        element.cliente_id,
                        element.cliente_uuid,
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
   
    async getById(id: number): Promise<Cliente> {
        const clie = await this.cliente.findOne({
            where: {
                cliente_id: id
            }, 
            attributes: [
                'cliente_id', 'cliente_uuid', 'cliente', 'direccion', 'ciudad',
                'movil', 'email', 'atcreated', 'atupdated'                
            ]
        });

        if (!clie) {
          return null;
        }        

        var oneCliente = new Cliente(
            clie.cliente_id, 
            clie.cliente_uuid, 
            clie.cliente, 
            clie.direccion, 
            clie.ciudad, 
            clie.movil, 
            clie.email, 
            clie.atcreated, 
            clie.atupdated
        );
        
        return oneCliente;              
    }

    async getByUUID(uuid: UUID): Promise<Cliente> { 
        const clie = await this.cliente.findOne({
            where: {
                cliente_uuid: uuid
            }, 
            attributes: [
                'cliente_id', 'cliente_uuid', 'cliente', 'direccion', 'ciudad',
                'movil', 'email', 'atcreated', 'atupdated'                
            ]
        });

        if (!clie) {
          return null;
        }        

        var oneCliente = new Cliente(
            clie.cliente_id, 
            clie.cliente_uuid, 
            clie.cliente, 
            clie.direccion, 
            clie.ciudad, 
            clie.movil, 
            clie.email, 
            clie.atcreated, 
            clie.atupdated
        );
        
        return oneCliente;                       
    }

    async add(entity: Cliente): Promise<number> {       
        try 
        {
            var result = await this.cliente.create({entity})
            await result.save();
            return 1;
        }
        catch 
        {
            return 0;
        } 
    }

    async delete(id: number): Promise<number> {        
        try 
        {
            const clie = await this.cliente.findOne({
                where: {
                    cliente_id: id
                }, 
                attributes: [
                    'cliente_id', 'cliente_uuid', 'cliente', 'direccion', 'ciudad',
                    'movil', 'email', 'atcreated', 'atupdated'                
                ]
            });
            clie.destroy();
            return 1;
        }
        catch 
        {
            return 0;
        }
    }

    async update(id: number, entity: Cliente): Promise<number> {
        try 
        {
            // const clie = await this.cliente.findOne({
            //     where: {
            //         cliente_id: id
            //     }, 
            //     attributes: [
            //         'cliente_id', 'cliente_uuid', 'cliente', 'direccion', 'ciudad',
            //         'movil', 'email', 'atcreated', 'atupdated'                
            //     ]
            // });
            await this.cliente.update({entity}, { where: { cliente_id: id}});
            return 1;
        }
        catch 
        {
            return 0;
        }
    }
}